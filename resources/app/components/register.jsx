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
    const [registrationType, setRegistrationType] = useState('email');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        var formData = new FormData($('form#register')[0]);
        if (registrationType === 'otp')
            formData.append('otp', 1)
        $.ajax({
            url: `${API}/app/register`,
            method: 'post',
            data: formData,
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            processData: false,
            contentType: false,
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
                if (registrationType === 'otp') {
                    var object = {};
                    formData.forEach(function(value, key){
                        object[key === 'email' ? 'phone' : key] = value;
                    });
                    props.history.push({
                        pathname: `${ENV}otp`,
                        state: {
                            ...object,
                            next: next
                        },
                    });

                } else {
                    localStorage.setItem('user', res);
                    const thisUser = JSON.parse(res);
                    dispatch(fetchSubscription(thisUser));
                    props.setUser(thisUser);
                    props.history.push({
                        pathname: `${next}`,
                        state: {user: thisUser},
                    });
                    setProcessing(false);
                }
            }.bind(this)
        })
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
            <div id="about" className="section-padding pricing login">
                <div className="container">

                    <div className="row">
                        <div className="mx-auto mt-5 col-md-5 col-sm-12">
                            <div className="card weekly">
                                <h5 className="card-header text-center">SIGN UP</h5>
                                {
                                    registrationType === 'email' ?
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
                                                <div className="input-group mb-3 mt-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Full Name" name='name' />
                                                </div>
                                                <div className="input-group mb-3 mt-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                    </div>
                                                    <input type="email" className="form-control loginput" placeholder="Email" name='email'/>
                                                </div>
                                                <div className="input-group mb-3 mt-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-key" />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control loginput" placeholder="Password" name='password' />
                                                </div>
                                                <div className="input-group mb-3 mt-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-key" />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control loginput"
                                                           placeholder="Confirm Password" aria-label="Confirm Password"
                                                           name='password_confirmation' />
                                                </div>
                                                <p className="card-text grey">
                                                    <input type="checkbox" aria-label="Checkbox for following text input" required={true}/>
                                                    I agree to the terms and conditions
                                                </p>
                                                <p className="card-text grey">
                                                    <input type="checkbox" aria-label="Checkbox for following text input" required={true}/>
                                                    I agree to the privacy policy
                                                </p>
                                                <div className="text-center mt-2">
                                                    {
                                                        processing ? <ClipLoader /> : <button type='submit' className="btn btn-primary">Register</button>
                                                    }
                                                </div>
                                                <h6 className="card-title text-center mt-4">
                                                    <button className='btn btn-primary' onClick={e=> {
                                                        setRegistrationType('otp')
                                                    }}>Register Using Your Phone Number</button>
                                                </h6>
                                                <h6 className="card-title text-center mt-4">
                                                    Forgot Password?
                                                    <Link class="green" to={`${ENV}reset`}> Reset Password</Link>
                                                </h6>
                                                <h6 className="card-title text-center mt-4">Have an Account?<br />
                                                    <Link class="green" to={`${ENV}signin`}>Sign in</Link>
                                                </h6>
                                            </div>
                                        </form> :
                                        registrationType === 'otp' ?
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
                                                    <div className="input-group mb-3 mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="fa fa-user" />
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control loginput" placeholder="Full Name" name='name' />
                                                    </div>
                                                    <div className="input-group mb-3 mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="fa fa-mobile" />
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control loginput" placeholder="Phone Number" name='email'/>
                                                    </div>
                                                    <span className='danger'>Note: OTP (One Time Password) only served to Safaricom users.</span>

                                                    <p className="card-text grey">
                                                        <input type="checkbox" aria-label="Checkbox for following text input" required={true}/>
                                                        I agree to the terms and conditions
                                                    </p>
                                                    <p className="card-text grey">
                                                        <input type="checkbox" aria-label="Checkbox for following text input" required={true}/>
                                                        I agree to the privacy policy
                                                    </p>
                                                    <div className="text-center mt-2">
                                                        {
                                                            processing ? <ClipLoader /> : <button type='submit' className="btn btn-primary">Register</button>
                                                        }
                                                    </div>
                                                    <h6 className="card-title text-center mt-4">
                                                        <button className='btn btn-primary' onClick={e=> {
                                                            setRegistrationType('email')
                                                        }}>Register Using Your Email</button>
                                                    </h6>
                                                    <h6 className="card-title text-center mt-4">Have an Account?<br />
                                                        <Link class="green" to={`${ENV}signin`}>Sign in</Link>
                                                    </h6>
                                                </div>
                                            </form> :
                                            <div className="card-body">
                                                <h6 className="card-title text-center mt-4">
                                                    <button className='btn btn-primary' onClick={e=> {
                                                        setRegistrationType('email')
                                                    }}>Register Using Your Email</button>
                                                </h6>
                                                <h6 className="card-title text-center mt-4">
                                                    OR
                                                </h6>
                                                <h6 className="card-title text-center mt-4">
                                                    <button className='btn btn-primary' onClick={e=> {
                                                        setRegistrationType('otp')
                                                    }}>Register Using Your Mobile</button>
                                                </h6>
                                            </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
