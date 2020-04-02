import React, {useEffect, useState} from 'react';
import {API, ENV} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";

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
            <div id="about" className="section-padding mt-5 pricing">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Pricing
                                Plans</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card daily">
                                <h5 className="card-header text-center">Daily</h5>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ksh. 30</h5>
                                    <h6 className="card-title text-center">Also Recieve</h6>
                                    <p className="card-text text-center">- Complimentary e-paper.<br />- Regular email bulletins.</p>
                                    <div className="text-center">
                                        <Link to={`${ENV}subscription/payment`} className="btn btn-primary">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card monthly">
                                <h5 className="card-header text-center">Monthly</h5>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ksh. 300</h5>
                                    <h6 className="card-title text-center">Also Recieve</h6>
                                    <p className="card-text text-center">- Complimentary e-paper.<br />- Regular email bulletins.</p>
                                    <div className="text-center">
                                        <Link to={`${ENV}subscription/payment`} className="btn btn-primary">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card yearly">
                                <h5 className="card-header text-center">Yearly</h5>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ksh. 3000</h5>
                                    <h6 className="card-title text-center">Also Recieve</h6>
                                    <p className="card-text text-center">- Complimentary e-paper.<br />- Regular email bulletins.</p>
                                    <div className="text-center">
                                        <Link to={`${ENV}subscription/payment`} className="btn btn-primary">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
