import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HOME_VIDEOS_UPDATED} from "../common/constants/academy";
import {API, ENV} from "../common/constants";
import Loading from "../common/loading";
import {Link} from "react-router-dom";
import {convertToSlug} from "../common/constants/functions";
import {ClipLoader} from "react-spinners";

export default function (props) {

    const dispatch = useDispatch();
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `/academy`);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
    }

    return (
        <React.Fragment>
            {
                loading ? <ClipLoader /> :
                    <React.Fragment>
                        <h1 className="h3 mb-3">Subscription</h1>
                        <div className='card'>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className="form-group col-md-4">
                                            <label className="form-control-label">
                                                <strong>Mobile Number</strong>
                                            </label>
                                            <input type="text" placeholder="Enter Mobile Number" name='mobile' required
                                                   className="w-100 mb-4 form-control form-control-lg" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label className="form-control-label">
                                                <strong>Packages </strong>
                                            </label>
                                            <div className="row">
                                                <div className="custom-controls-stacked">
                                                    {
                                                        plans.map(el => {
                                                            return (
                                                                <React.Fragment>

                                                                    <label className="custom-control custom-radio" htmlFor={`${el.id}`}>
                                                                        <input name="custom-radio-3" type="radio" id={`${el.id}`}
                                                                               className="custom-control-input" value={el.id}
                                                                               defaultChecked={parseInt(plan.id) === parseInt(el.id)}  required />
                                                                        <span className="custom-control-label">{el.name} ({el.cost}/=)</span>
                                                                    </label>
                                                                </React.Fragment>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <Link to={next} className='btn btn-lg btn-success' >Initiate Payment</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
