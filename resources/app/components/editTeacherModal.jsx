import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import Loading from "../common/loading";
import Select from "react-select";

export default function (props) {
    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [teacher, setTeacher] = useState({});

    useEffect((e) => {
        setTeacher(props.teacher)
    }, [props.teacher])


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(false);
        setProcessing(true);
        var formData = new FormData($('form#student')[0]);
        formData.append('institutionid', props.user.institution_id)
        if (teacher.hasOwnProperty('id'))
            formData.append('id', student.id)
        $.ajax({
            url: `${API}/institution/teacher/${teacher.hasOwnProperty('id') ? 'edit' : 'register'}`,
            method: 'post',
            processData: false,
            contentType: false,
            data:formData,
            headers: {
                'appkey': 'ELE-2020-XCZ3'
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
                setResponse(`Student updated successfully.`);
                setComplete(true)
            }.bind(this)
        })
    }

    return (
        <div className="modal fade" id="teacherModal" tabIndex="-1" role="dialog" style={{zIndex: 9999999}}
             aria-labelledby="teacherModalLabel" aria-hidden="true">
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
                                                <h5>{teacher.hasOwnProperty('name') ? teacher.name : "Register Teacher"}</h5>
                                            </div>
                                            <div className='card-body'>
                                                <form onSubmit={handleSubmit} id='student'>
                                                    <div className='row'>
                                                        <div className='form-group col-md-12'>
                                                            <label>Name</label>
                                                            <input type='text' name='name' className='form-control' defaultValue={teacher.name} required/>
                                                        </div>

                                                        <div className='form-group col-md-12'>
                                                            <label>Email</label>
                                                            <input type='email' name='email' className='form-control' defaultValue={teacher.email}/>
                                                        </div>
                                                        {
                                                            teacher.name ? '' :
                                                                <React.Fragment>
                                                                    <div className='form-group col-md-12'>
                                                                        <label>Password</label>
                                                                        <input type='password' name='password' className='form-control' />
                                                                    </div>
                                                                    <div className='form-group col-md-12'>
                                                                        <label>Password Confirmation</label>
                                                                        <input type='password' name='password_confirmation' className='form-control' />
                                                                    </div>
                                                                </React.Fragment>
                                                        }

                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            {
                                                                processing ? <ClipLoader  /> :
                                                                    <button type="submit" className="btn btn-sm btn-success btn-rounded float-right">Save</button>
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
