import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {APPNAME, ENV} from "../common/constants";
import Loading from "../common/loading";
import Select from "react-select";

const handleSubmit = (e) => {
    e.preventDefault();
    debugger
};

export default function (props) {
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [selectedClass, setSelectedClass] = useState({});
    const [selectedSubject, setSelectedSubject] = useState({});

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form>
                        <div className="card">
                            <div className='card-header'>
                                <h5>{props.exam.module}</h5>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='form-group col-md-12'>
                                        <label>Name</label>
                                        <input type='text' name='name' className='form-control' defaultValue={props.exam.module}/>
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
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-sm btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
