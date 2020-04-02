import React, { useEffect, useState } from 'react';
import {API, ENV} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import modules from "./modules";
import Loading from "../common/loading";
const { SearchBar } = Search;

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [modules, setModules] = useState([]);
    const [percentage, setPercentage] = useState(0);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect((e) => {
        getSubscription();
        getModules();
    }, []);

    const getModules = () => {
        $.ajax({
            url: `${API}/modules/user/${props.user.id}`,
            // url: `${API}/subjects/class/{class_id}`,
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
                setModules(res);
                let percentage = 0;
                res.forEach((el) => {
                    percentage += parseFloat( el.percentage)
                });
                let marks = parseFloat(percentage/(res.length)).toFixed(2)
                setPercentage(isNaN(marks) ? 0 : marks);
            }.bind(this)
        })
    };

    const getSubscription = () => {
        $.ajax({
            url: `${API}/payments/subscriptions/user/${props.user.id}`,
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
            <div id="about" className="section-padding mt-5 profile">
                <div className="container mt-5">
                    {
                        loading ? <Loading/> :
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="sticky-top pt-md-5">
                                        <div className="mt-5 pt-5 d-none d-md-block d-lg-block" />
                                        <table className="table mb-4 border-0">
                                            <thead className="border-0">
                                            <tr className="border-0">
                                                <th className="border-0">
                                                    <div className="float-left text-center">
                                                        <h6>Average score for the last 30 Days</h6>
                                                    </div>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-0">
                                                <td className="border-0">
                                                    <h6 className="text-center">
                                                        <font class="score">{`${percentage}%`}</font>
                                                    </h6>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="section-title wow fadeInDown animated text-center"
                                                data-wow-delay="0.3s">Exam Profile</h2>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead className="thead-dark text-center">
                                        <tr>
                                            <th scope="col">Class</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Exam</th>
                                            <th scope="col">Score</th>
                                            <th scope="col">Percentage</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {modules.map(el => {
                                            return (
                                                <tr>
                                                    <th scope="row">{el.class}</th>
                                                    <td>{el.subject}</td>
                                                    <td>{el.module}</td>
                                                    <td>{el.score}</td>
                                                    <td>{el.percentage}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="section-title wow fadeInDown animated text-center mt-4"
                                                data-wow-delay="0.3s">
                                                Transactions</h2>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead className="thead-dark text-center">
                                        <tr>
                                            <th scope="col">Order Number</th>
                                            <th scope="col">Receipt Number</th>
                                            <th scope="col">Package</th>
                                            <th scope="col">Expiry</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            subscriptions.map(el => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{el.ordernumber}</th>
                                                        <td>{el.receipt}</td>
                                                        <td>{el.package}</td>
                                                        <td>{el.expiry_date}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
