import React, { useEffect, useState } from 'react';
import {API, DIR, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {Link} from "react-router-dom";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        getModules();
    }, []);

    const getModules = () => {
        $.ajax({
            url: `${API}/modules/${props.match.params.hasOwnProperty('subject') ? `subject/${props.match.params.subject}` : 'list'}`,
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
                setLoading(false);
            }.bind(this)
        })
    };

    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div
                        className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Select Module</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
                        <div className="actions actions-dark d-inline-block">
                            <a href="#" className="action-item ml-md-4">
                                <i className="fa fa-file-export mr-2" />Export
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-fluid">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <a href="#" className="avatar rounded-circle">
                                        {/*<img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className="" />*/}
                                    </a>
                                </div>
                                <div className="col ml-md-n2">
                                    <a href="#!" className="d-block h6 mb-0">{props.user.name}</a>
                                    <small className="d-block text-muted">{props.user.school}</small>
                                </div>
                                <div className="col-auto">
                                    {/*<button type="button" className="btn btn-xs btn-primary btn-icon rounded-pill">*/}
                                    {/*    <span className="btn-inner--icon">*/}
                                    {/*        <i className="far fa-edit" />*/}
                                    {/*    </span>*/}
                                    {/*    /!*<span className="btn-inner--text">Edit</span>*!/*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                        {
                            loading ? <Loading/> :
                                <React.Fragment>
                                    <div className="card-body">
                                        <div className='row'>
                                            {
                                                modules.map((el) => {
                                                    return (
                                                        <Link className="btn btn-square text-sm " to={`${DIR}/exams/exam/${el.id}`}>
                                                        <span className="btn-inner--icon d-block">
                                                            <i className="fa fa-tasks fa-2x" />
                                                        </span>
                                                            <span className="btn-inner--icon d-block pt-2">{el.module}</span>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
