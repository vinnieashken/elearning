import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {API, DIR} from "../common/constants";
import moment from "moment";

export default function (props) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');

    useEffect(() => {
        getSubscriptions();
    }, []);

    const getSalutation = () => {
        const now = moment();
        const startOfDay = moment().startOf('day');
        const noon = startOfDay.add('12', "hours");
        const evening = startOfDay.add('18', "hours");

        return now.isAfter(evening, 'time') ? 'Evening' : now.isAfter(noon, 'time') ? 'Afternoon' : 'Morning'
    };

    const getSubscriptions = () => {
        $.ajax({
            url: `${API}/payments/subscriptions`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
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

    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5 className="h3 font-weight-400 mb-0 text-white">{getSalutation()}, {props.user.name}!</h5>
                        <span className="text-sm text-white opacity-8">Have a nice day!</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header actions-toolbar border-0">
                    <div className="row ">
                        <div className="col-md-12">
                            <h4 className="d-inline-block mb-0 text-center">This content is available exclusively to Standard E-Learning members.</h4>
                        </div>
                    </div>
                </div>
                <div className="py-4 row">
                    <div className="mb-3 mb-md-0 col-md-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Daily</h5><span className="display-4">KES 30</span></div>
                                <h6>Includes:</h6>
                                <ul className="list-unstyled">
                                    <li >- Plus complimentary e-paper.</li>
                                    <li >- Regular email bulletins.</li>
                                </ul>
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mb-md-0 col-md-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Monthly</h5><span
                                    className="display-4">KES 220</span></div>
                                <h6>Includes:</h6>
                                <ul className="list-unstyled">
                                    <li >- Plus complimentary e-paper.</li>
                                    <li >- Regular email bulletins.</li>
                                </ul>
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mb-md-0 col-md-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Annual</h5><span
                                    className="display-4">KES 3,640</span></div>
                                <h6>Includes:</h6>
                                <ul className="list-unstyled">
                                    <li >- Plus complimentary e-paper.</li>
                                    <li >- Regular email bulletins.</li>
                                </ul>
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="mb-3 mb-md-0 col-md-3">*/}
                    {/*    <div className="text-center h-100 card">*/}
                    {/*        <div className="d-flex flex-column card-body">*/}
                    {/*            <div className="mb-4"><h5>Gold</h5><span*/}
                    {/*                className="display-4">KES 10,000</span></div>*/}
                    {/*            <h6>Includes:</h6>*/}
                    {/*            <ul className="list-unstyled">*/}
                    {/*                <li >- Plus complimentary e-paper.</li>*/}
                    {/*                <li >- Regular email bulletins.</li>*/}
                    {/*                <li >- Set your own exam.</li>*/}
                    {/*            </ul>*/}
                    {/*            <div className="mt-auto">*/}
                    {/*                <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Select Plan</Link>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </React.Fragment>
    )
}
