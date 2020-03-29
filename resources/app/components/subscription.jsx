import React, {useEffect, useState} from 'react';
import {API, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";

export default function (props) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [payment, setPayment] = useState({});
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');


    useEffect(() => {
        getSubscriptions();
    }, []);

    const getSubscriptions = () => {
        $.ajax({
            url: `${API}/payments/subscriptions`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = "Sorry an error has occurred. We are working on it. ";

                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
                else if (xhr.hasOwnProperty('responseText'))
                    response = JSON.parse(xhr['responseText'])['message'];

                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setSubscriptions(res);
                setLoading(false);
            }.bind(this)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        var formData = new FormData($('form#sub')[0]);
        formData.append('user_id', props.user.id);
        formData.append('package_id', subscriptions[0]['id']);
        $.ajax({
            url: `${API}/payments/subscribe`,
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. ${xhr.status}`;
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setPayment(res);
                setProcessing(false);
            }.bind(this)
        })
    };

    return(
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="page-title">
                        <div className="row justify-content-between align-items-center">
                            <div
                                className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                                <div className="d-inline-block">
                                    <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Buy Package</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit} id='sub'>
                        <div className="card">
                            <div className="card-body">

                                {
                                    message &&
                                    <div className='row'>
                                        <div className={messageType} role="alert">
                                            <div className="alert-message">
                                                {response}
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Phone Number (M-Pesa)
                                    </label>
                                    <input type="text" name='mobile' className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Packages
                                    </label>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-1" />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-1">Daily (30/=)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-2" defaultChecked={false} />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-2">Monthly (220/=)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-3" defaultChecked={false} />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-3">Annual (3640/=)</label>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-3" disabled={true} />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-3">Gold (Coming Soon)</label>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        payment.hasOwnProperty('id') ? <div className='row'>
                                                <div className='col-md-6 col-sm-6'>
                                                    <img className='mt-5 mb-5' style={{display: 'block', margin:'auto', width: '70%'}} src={`${PUBLIC_URL}/static/app/images/lipanampesa.jpg`} alt='Lipa Na M-Pesa'/>
                                                </div>
                                                <div className='col-md-6 col-sm-12'>
                                                    <b>Pay via MPESA</b><br />
                                                    <ol>
                                                        <li>Go to M-PESA on your phone.</li>
                                                        <li>Select Lipa na MPESA.</li>
                                                        <li> Pay Bill.</li>
                                                        <li>Enter Business Number:<span
                                                            style={{fontSize: "20px"}}><b>505604</b></span>.
                                                        </li>
                                                        <li>Enter Account Number:<span
                                                            style={{fontSize: '20px'}}><b>{payment.id}</b></span>.
                                                        </li>
                                                        <li> Enter the Amount. i.e<span
                                                            style={{fontSize: "20px"}}><b>Ksh.{payment.amount}</b></span></li>
                                                        <li>Enter your M-PESA PIN and Send.</li>
                                                        <li>You will receive a confirmation via SMS.</li>
                                                        <li>Get Us Payment Ref No.</li>
                                                    </ol>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                                <div className="text-right">
                                    {
                                        processing ? <ClipLoader /> : <button type="submit" className="btn btn-sm btn-primary rounded-pill">{payment.hasOwnProperty('id') ? 'Confirm Payment' : 'Pay'} </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
