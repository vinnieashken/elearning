import React, { useEffect, useState } from 'react';
import {API, DIR} from "../common/constants";
import Loading from "../common/loadingWhite";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";

export default function (props) {
    const [exam, setExam] = useState([]);
    const [showAns, setShowAns] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        let marks = 0;
        let answers = [];
        exam.forEach((el) => {
            const ans = $(`input[name="${el.id}"]:checked`).val();
            if (parseInt(el.answer) === parseInt(ans)) {
                marks += 1;
            }
            answers.push({"questionid": el.id, "optionid": parseInt(ans)})
        });
        let data = {
            "moduleid": props.match.params.module,
            "userid": props.user.id,
            "answers": answers
        };
        marks = (marks / exam.length) * 100;
        $.ajax({
            url: `${API}/questions/module/user/answers`,
            data: data,
            method: 'POST',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. ${xhr.status}`;
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setShowAns(true);
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-success');
                setResponse(<h3>Congratulations, you have scored {marks}%. <Link to={`${DIR}/exams/modules`}>You can do another paper here</Link></h3>);
                $("html, body").animate({scrollTop: 0}, 200);
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
                                    <form onSubmit={handleSubmit} id='exam'>
                                        {
                                            message &&
                                            <div className='row'>
                                                <div className={`col-12 ${messageType}`} role="alert">
                                                    <div className="alert-message">
                                                        {response}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            <div className='row'>
                                                {
                                                    exam.map((el) => {
                                                        return (
                                                            <div className="form-group col-md-12">

                                                                <p><label className="form-control-label"><span dangerouslySetInnerHTML={ {__html: `${el.question}`} } /></label></p>
                                                                {
                                                                    el.options.map((ans) => {
                                                                        const isAns = parseInt(el.answer) === parseInt(ans.id);
                                                                        return (
                                                                            <React.Fragment>
                                                                                <input type="radio" id={el.id} name={el.id} value={ans.id} required={true} />
                                                                                <label htmlFor={ans.option}>{` ${ans.option}`}</label> {(isAns && showAns) ? <span className='fa fa-check alert-success'/> : ''}<br />
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
                                            {
                                                processing ? <ClipLoader /> : showAns ? <Link to={`${DIR}/exams/modules`} className="btn btn-sm btn-primary rounded-pill">Select New Paper</Link>
                                                    : <button type="submit" className="btn btn-sm btn-primary rounded-pill">Submit</button>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
