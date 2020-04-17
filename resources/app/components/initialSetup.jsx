import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {API, DIR, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import { fetchSubscription } from "../common/actions";
import { useDispatch } from "react-redux";

export default function (props) {
    const oldState = props.history.location.state;

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${ENV}exams/modules`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        var formData = new FormData($('form#register')[0]);
        $.ajax({
            url: `${API}/institution/register`,
            method: 'post',
            data: formData,
            processData: false,
            contentType: false,
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. ${xhr.status}`;
                try {
                    response = JSON.parse(xhr['responseText'])['message'];
                }catch (e) {

                }
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
                $("html, body").animate({scrollTop: 0}, 200);

            }.bind(this),
            success: function (res) {
                localStorage.setItem('user', JSON.stringify(res));
                dispatch(fetchSubscription(res));
                props.setUser(res);
                props.history.push({
                    pathname: `${next}`,
                    state: {user: res},
                });
                setProcessing(false);
            }.bind(this)
        })
    };

    return (
        <React.Fragment>
            <div id="about" className="section-padding mt-5 pricing login">
                <div className="container mt-5">

                    <div className="row">
                        <div className="mx-auto mt-5 col-md-10 col-sm-12">
                            <div className="card weekly">
                                <h5 className="card-header text-center">REGISTER SCHOOL</h5>
                                <form onSubmit={handleSubmit} id='register'>
                                    <div className="card-body">
                                        {
                                            message ?
                                                <div className='col-md-12'>
                                                    <div className="text-center mt-2">
                                                        <div className={messageType} role="alert">
                                                            <div className="alert-message">
                                                                {response}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : ''
                                        }
                                        <div className='row'>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Institution Name</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-institution" />
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Institution Name" name='institution_name' required />
                                                </div>
                                            </div>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Address</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-address-card" />
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Address" name='institution_address' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Your Name</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Your Name" name='name' required/>
                                                </div>
                                            </div>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Phone Number</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-mobile" /></span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Phone Number" name='institution_phone'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                                    </div>
                                                    <input type="email" className="form-control loginput" placeholder="Email" name='email' required/>
                                                </div>
                                            </div>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-key" />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control loginput" placeholder="Password" name='password' required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='form-group col-md-6  mb-3 mt-3'>
                                                <label>Confirm Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-key" />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control loginput" placeholder="Confirm Password" aria-label="Confirm Password" name='password_confirmation' required />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="card-text grey">
                                            <input type="checkbox" aria-label="Checkbox for following text input" id='terms' required={true}/>
                                            <label htmlFor='terms'>I agree to the terms and conditions</label>
                                        </p>
                                        <p className="card-text grey">
                                            <input type="checkbox" aria-label="Checkbox for following text input" id='policy' required={true}/>
                                            <label htmlFor='policy'>I agree to the privacy policy</label>
                                        </p>
                                        <div className="text-center mt-2">
                                            {
                                                processing ? <ClipLoader /> : <button type='submit' className="btn btn-primary">Register</button>
                                            }
                                        </div>
                                        <h6 className="card-title text-center mt-4">
                                            Forgot Password?
                                            <Link class="green" to={`${ENV}reset`}> Reset Password</Link>
                                        </h6>
                                        <h6 className="card-title text-center mt-4">Have an Account?<br />
                                            <Link class="green" to={`${ENV}signin`}>Sign in</Link>
                                        </h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
