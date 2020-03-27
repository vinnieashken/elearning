import React, { useEffect, useState } from 'react';
import {API} from "../common/constants";
import Loading from "../common/loadingWhite";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [exam, setExam] = useState([]);

    useEffect(() => {
        getExam();
    }, []);

    const getExam = () => {
        $.ajax({
            url: `${API}/questions/module/${props.match.params.module}`,
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
                setExam(res);
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
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Exam</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {
                        loading ? <Loading/> :
                            <div className="card card-fluid">
                                <div className="card-header actions-toolbar">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col">
                                            <h6 className="d-inline-block mb-0">{"Questions"}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {
                                        <div className='row'>
                                            {
                                                exam.map((el) => {
                                                    return (
                                                        <div className="form-group col-md-12">

                                                            <p><label className="form-control-label"><b>{el.id}. </b> <span dangerouslySetInnerHTML={ {__html: `${el.question}`} } /></label></p>
                                                            {
                                                                el.options.map((ans) => {
                                                                    return (
                                                                        <React.Fragment>
                                                                            <input type="radio" id={ans.id} name={el.id} value={ans.id} />
                                                                            <label htmlFor={ans.option}>{` ${ans.option}`}</label><br />
                                                                        </React.Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    <div className="text-right">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill">Submit</button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
