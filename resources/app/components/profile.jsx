import React, { useEffect, useState } from 'react';
import {API, ENV} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import Loading from "../common/loading";
import {PUBLIC_URL} from "../../app-old/common/constants";
import filterFactory, {selectFilter} from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
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
        if (props.user.hasOwnProperty('id')) {
            getSubscription();
            getModules();
        } else {
            props.history.push({
                pathname: `${ENV}signin`,
                state: {
                    next: props.location.pathname
                },
            });
        }
    }, []);

    const getModules = () => {
        $.ajax({
            url: `${API}/modules/user/${props.user.id}`,
            // url: `${API}/subjects/class/{class_id}`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
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
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
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

    const actionButton = (cell, row) => {
        return (
            <Link to={`${ENV}exams/exam/${row.id}`} className="btn btn-sm btn-rounded btn-success-filled" >
                Revise Exam
            </Link>
        )
    };


    return (
        <React.Fragment>
            <div id="sliders">
                <div className="full-width">
                    <div className="carousel slide" id="light-slider">
                        <div id="carousel-area">
                            <div className="carousel slide" data-ride="carousel" id="carousel-slider">

                                <div className="carousel-inner smaller" role="listbox">
                                    <div className="carousel-item active">
                                        <img alt="" src={`${PUBLIC_URL}/static/new/img/rendered.png`} style={{height: '76px', objectFit: 'cover'}} />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="section-padding profile">
                <div className="container ">
                    {
                        loading ? <Loading/> :
                            <div className="row">
                                <div className="col-md-3" style={{display: 'none'}}>
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
                                <div className="col-md-12">
                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <h2 className="section-title wow fadeInDown animated text-center"
                                                data-wow-delay="0.3s">Past Performance</h2>
                                        </div>
                                    </div>
                                    <ToolkitProvider
                                        keyField="id"
                                        data={
                                            modules.sort(function(a,b){
                                                // Turn your strings into dates, and then subtract them
                                                // to get a value that is either negative, positive, or zero.
                                                return moment(b.date, 'YYYY-MM-DD HH:mm:ss') - (moment(a.date, 'YYYY-MM-DD HH:mm:ss'));
                                            })
                                        }
                                        // data={ modules.filter(el => {
                                        //     return (el.institution_id === null || parseInt(el.institution_id) === 2 || parseInt(props.user.institution_id) ===  parseInt(el.institution_id))
                                        // }) }
                                        columns={
                                            [
                                                {
                                                    dataField: 'date',
                                                    text: 'Date Completed',
                                                    sort: true,
                                                    formatter: (cell, row) => {
                                                        return moment(row.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD')
                                                    } },
                                                {dataField: 'class',        text: 'Class',      sort: true},
                                                {dataField: 'subject',        text: 'Subject',      sort: true},
                                                {dataField: 'module',        text: 'Exam',      sort: true},
                                                {dataField: 'score',        text: 'Score',      sort: true},
                                                {dataField: 'percentage',        text: 'Percentage',      sort: true},
                                                {dataField: 'created_at',   text: 'Revise',      sort: true, formatter: actionButton},
                                            ]
                                        } search={true}>
                                        {
                                            props =>
                                                (
                                                    <React.Fragment>
                                                        <div className='row  mb-3'>
                                                            <div className='col-md-4'>
                                                                <SearchBar className='float-left mb-3 form-control-sm' { ...props.searchProps } />
                                                            </div>
                                                        </div>

                                                        <BootstrapTable { ...props.baseProps }
                                                                        wrapperClasses="table-responsive"
                                                                        headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                        headerClasses="border-0"
                                                                        rowClasses="border-0"
                                                                        rowStyle={ { borderRadius: '18px' } }
                                                            // pagination={ paginationFactory() }
                                                            // filter={ filterFactory() }
                                                        />

                                                    </React.Fragment>
                                                )
                                        }
                                    </ToolkitProvider>
                                    {/*<table className="table">*/}
                                    {/*    */}
                                    {/*    <tbody>*/}
                                    {/*    {modules.reverse().map(el => {*/}
                                    {/*        return (*/}
                                    {/*            <tr key={`m${el.id}`}>*/}
                                    {/*                <th scope="row">{el.date ? moment(el.date, 'YYYY-MM-DD HH:mm:ss').format('Y-MM-DD') : ''}</th>*/}
                                    {/*                <td>{el.class ? el.class : ''}</td>*/}
                                    {/*                <td>{el.subject ? el.subject : ''}</td>*/}
                                    {/*                <td>{el.module ? el.module : ''}</td>*/}
                                    {/*                <td>{el.score ? el.score : ''}</td>*/}
                                    {/*                <td>{el.percentage ? `${el.percentage}%` : ''}</td>*/}
                                    {/*                <td>*/}
                                    {/*                    <Link to={`${ENV}exams/exam/${el.id}`} className="btn btn-sm btn-rounded btn-success-filled" >*/}
                                    {/*                    Revise Exam*/}
                                    {/*                </Link>*/}
                                    {/*                </td>*/}
                                    {/*            </tr>*/}
                                    {/*        )*/}
                                    {/*    })}*/}
                                    {/*    </tbody>*/}
                                    {/*</table>*/}
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
                                            subscriptions.reverse().map(el => {
                                                return (
                                                    <tr key={`s${el.id}`}>
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
