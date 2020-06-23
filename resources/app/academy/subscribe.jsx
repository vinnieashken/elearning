import React, {useEffect, useState} from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import 'intl-tel-input/build/css/intlTelInput.css';
import ReactIntlTelInput from "react-intl-tel-input-v2";
import {API} from "../common/constants";

export default function (props) {

    const dispatch = useDispatch();
    const [user, setUser] = useState(localStorage.hasOwnProperty('ac_user') ? JSON.parse(localStorage.getItem('ac_user')) : {});
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `/academy`);
    const [phone, setPhone] = useState({iso2: "ke", dialCode: "254", phone: ""})
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState({});

    useEffect((e) => {
        fetchPlans();
    }, [])

    const fetchPlans = () => {
        $.ajax({
            url: `${API}/academy/plans`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {
                setLoading(false)
            }.bind(this),
            success: function (res) {
                setPlans(res)
                setLoading(false)
            }.bind(this)
        })
    }

    const handleSubscribe = (e) => {
        e.preventDefault();
        $.ajax({
            url: `${API}/academy/subscription/subscribe`,
            method: 'post',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            data: {
                phone: `${phone.dialCode}${phone.phone}`,
                plan_id: $(`input[name="package_id"]:checked`).val(),
                user_id: user.id,
            },
            error: function (xhr, status, error) {
                setProcessing(false)
            }.bind(this),
            success: function (res) {
                setProcessing(false)
            }.bind(this)
        })
    }
    return (
        <div className='d-flex justify-content-center w-100'>
            <div className="container d-flex flex-column">
                <div className="row h-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">



                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="text-center mt-4">
                                            <div className="text-center">
                                                <h1 className="h2">TutorSoma Academy</h1>
                                                <p className="lead">
                                                    Please subscribe to continue
                                                </p>
                                            </div>
                                        </div>
                                       <div className='text-center'>
                                           <img
                                               src="https://tutorsoma.standardmedia.co.ke/static/app/images/mpesa.png"
                                               className="w-75 text-center" alt="Tutor-Soma" />
                                       </div>
                                        {
                                            loading ? <div className='text-center'>
                                                    <ClipLoader />
                                                </div> :
                                                <form onSubmit={handleSubscribe}>
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <ReactIntlTelInput
                                                            inputProps={{
                                                                placeholder: 'Your phone',
                                                                className: "form-control form-control-sm",
                                                                required: true
                                                            }}
                                                            intlTelOpts={{
                                                                preferredCountries: ['ke', 'tz', 'ug'],
                                                                separateDialCode: true
                                                            }}
                                                            // className='input-group'
                                                            value={phone}
                                                            onChange={setPhone}
                                                            // onCountryDropdownClose={this.onCountryChanged}
                                                        />
                                                        {/*<input type='number' className='form-control' id='phone' required={true}/>*/}
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="form-control-label">
                                                            <strong>Packages </strong>
                                                        </label>
                                                        <div className="row">
                                                            {
                                                                plans.map(el => {
                                                                    return (
                                                                        <div className="col-md-4 col-sm-6 ">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="radio"
                                                                                       className="custom-control-input"
                                                                                       name="package_id"
                                                                                       id={el.id}
                                                                                       required="true"
                                                                                       defaultChecked={false}
                                                                                       value={el.id}/>
                                                                                <label className="custom-control-label form-control-label text-muted" htmlFor={el.id}>{el.name} ({el.cost}/=)</label>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="text-center mt-2">
                                                        <button type="submit" className="btn btn-primary mpesabtn">Pay</button>
                                                    </div>
                                                </form>
                                        }
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
