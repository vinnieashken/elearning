import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import Loading from "../common/loading";
import Select from "react-select";
import {useSelector} from "react-redux";

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
    const classes = useSelector(state => state.classes);
    const subjects = useSelector(state => state.subjects);
    const [selectedClass, setSelectedClass] = useState({});
    const [selectedSubject, setSelectedSubject] = useState({});
    const [complete, setComplete] = useState(false);

    useEffect((e) => {
        setComplete(false)
        setMessage(false)
        console.log(classes);
        if (props.exam.hasOwnProperty('id'))
            getExam()
        else setLoading(false)
    }, [props.exam])

    const getExam = () => {
        setLoading(true)
        $.ajax({
            url: `${API}/questions/module/${props.exam.id}?userid=2`,
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
                setExam(res);
                setSelectedSubject({label: res.subject.subject, value: res.subject.id})
                setSelectedClass({label: res.class.class, value: res.class.id})
                setLoading(false);
            }.bind(this)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        setMessage(false);
        setProcessing(true);
        var formData = new FormData($('form#exam')[0]);
        formData.append('institutionid', props.exam.institution_id)
        if (props.exam.hasOwnProperty('id'))
            formData.append('id', props.exam.id)
        $.ajax({
            url: `${API}/institution/modules/${props.exam.hasOwnProperty('id') ? 'edit' : 'add'}`,
            method: 'post',
            processData: false,
            contentType: false,
            data:formData,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
                $("html, body").animate({scrollTop: 0}, 200);
            }.bind(this),
            success: function (res) {
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-success');
                setResponse(`Module updated successfully.`);
                if (props.exam.hasOwnProperty('id'))
                    setComplete(true);
                else {
                    $('#exam')[0].reset();
                    setSelectedClass({});
                    setSelectedSubject({});
                    props.getModules();
                }
            }.bind(this)
        })
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
                                                <h5>{exam.hasOwnProperty('name') ? exam.name : "Add New Exam"}</h5>
                                            </div>
                                            <div className='card-body'>
                                                <form id='exam'>
                                                    <div className='row'>
                                                        <div className='form-group col-md-12'>
                                                            <label>Name</label>
                                                            <input type='text' name='module' className='form-control' defaultValue={exam.name}/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='form-group col-md-6'>
                                                            <label>Class</label>
                                                            <Select name="classid"
                                                                    defaultValue={selectedClass}
                                                                    onChange={setSelectedClass}
                                                                    options={classes.map(el => {
                                                                        return {value: el.id, label: el.class}
                                                                    })}
                                                            />
                                                        </div>
                                                        <div className='form-group col-md-6'>
                                                            <label>Subject</label>
                                                            <Select name="subjectid"
                                                                    defaultValue={selectedSubject}
                                                                    onChange={setSelectedSubject}
                                                                    options={subjects.map(el => {
                                                                        return {value: el.id, label: el.subject}
                                                                    })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {
                                                                processing ? <ClipLoader /> :
                                                                    <button type="button" onClick={handleSubmit} className="btn btn-sm btn-success btn-rounded float-right">Save changes</button>
                                                            }
                                                        </div>
                                                    </div>
                                                </form>
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
