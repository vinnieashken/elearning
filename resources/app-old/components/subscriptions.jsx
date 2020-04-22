import React, {useEffect, useState} from 'react';
import {API, ENV, SUBSCRIPTION_DELETED} from "../common/constants";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Loading from "../common/loading";
import {Helmet} from "react-helmet";

export default function (props) {

    const oldState = props.history.location.state;

    const next = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${ENV}exams/modules`);
    useDispatch ({ type: SUBSCRIPTION_DELETED, payload: next });

    const [subscriptions, setSubscriptions] = useState([]);
    const [payment, setPayment] = useState({});
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        getSubscriptions();
    }, []);

    const getSubscriptions = () => {
        // const url = (props.user.owner || props.user.teacher) ? `${API}/payments/institutions/subscriptions` : `${API}/payments/subscriptions`;
        const url = `${API}/payments/subscriptions`;
        console.log(url);
        $.ajax({
            url: url,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}

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

    return(
        <React.Fragment>
            <Helmet>
                <link rel="canonical" href={pathname} />
                <meta name="keywords" content="Tutor-Soma Tu, Standard E-learning, Membership Plans" />
                <meta name="author" content="Standard Group" />
                <meta name="description" content="Tutor-Soma Tu Membership Plans" />
                <meta property="twitter:title" content="Tutor-Soma Tu : Membership Plans : The Standard" />
                <meta property="twitter:description" content="Tutor-Soma Tu - Membership Plans " />
                <meta property="twitter:url" content={pathname} />
                <meta property="og:title" content="Tutor-Soma Tu : Membership Plans : The Standard" />
                <meta property="og:description" content="Tutor-Soma Tu - Membership Plans " />
                <meta property="og:url" content={pathname} />
            </Helmet>
            <div id="about" className="section-padding mt-5 pricing">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated mt-5" data-wow-delay="0.3s">Our Membership Plans</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            loading ?
                                <div className='col-md-12'>
                                    <Loading/>
                                </div> : subscriptions.map(el => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="card daily">
                                                <h5 className="card-header text-center">{el.subscription}</h5>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">Ksh. {el.cost}</h5>
                                                    <h6 className="card-title text-center">Also Recieve</h6>
                                                    <p className="card-text text-center">- {el.description}</p>
                                                    <div className="text-center">
                                                        <Link to={{
                                                            pathname: `${ENV}subscription/payment`,
                                                            state: {
                                                                plan: el
                                                            }
                                                        }} className="btn btn-primary">Select Plan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}