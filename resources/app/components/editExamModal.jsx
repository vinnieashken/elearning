import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import Loading from "../common/loading";
import Select from "react-select";

const handleSubmit = (e) => {
    e.preventDefault();
    debugger
};

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [exam, setExam] = useState({});
    const [selectedClass, setSelectedClass] = useState({});
    const [selectedSubject, setSelectedSubject] = useState({});
    const [complete, setComplete] = useState(false);

    useEffect((e) => {
        setComplete(false)
        setMessage(false)
        if (props.exam.hasOwnProperty('id'))
            getExam()
    }, [props.exam])

    const getExam = () => {
        setLoading(true)
        $.ajax({
            url: `${API}/questions/module/${props.exam.id}?userid=2`,
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
                setSelectedSubject({label: res.subject.subject, value: res.subject.id})
                setSelectedClass({label: res.class.class, value: res.class.id})
                setLoading(false);
            }.bind(this)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        setMessageType('alert alert-success');
        setResponse("Exam details have been updated successfully.");
        setComplete(true)
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {
                        loading ? <div className="text-center" style={{marginTop: '50px'}}>
                                <ClipLoader color={'#cf2027'}/>
                            </div> :
                            <form onSubmit={handleSubmit} >
                                {
                                    message ?
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="text-center mt-2">
                                                    <div className={messageType} role="alert">
                                                        <div className="alert-message">
                                                            {response}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : ''
                                }
                                {
                                    complete ? '' :
                                        <div className="card">
                                            <div className='card-header'>
                                                <h5>{props.exam.module}</h5>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='form-group col-md-12'>
                                                        <label>Name</label>
                                                        <input type='text' name='name' className='form-control' defaultValue={exam.name}/>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='form-group col-md-6'>
                                                        <label>Class</label>
                                                        <Select name="class"
                                                                defaultValue={selectedClass}
                                                                onChange={setSelectedClass}
                                                                options={props.classes.map(el => {
                                                                    return {value: el.id, label: el.class}
                                                                })}
                                                        />
                                                    </div>
                                                    <div className='form-group col-md-6'>
                                                        <label>Subject</label>
                                                        <Select name="class"
                                                                defaultValue={selectedSubject}
                                                                onChange={setSelectedSubject}
                                                                options={props.subjects.map(el => {
                                                                    return {value: el.id, label: el.subject}
                                                                })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <button type="submit" className="btn btn-sm btn-success btn-rounded float-right">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </form>
                    }
                </div>
            </div>
        </div>
    )
}
