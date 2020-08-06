import React, {useState, useEffect} from 'react';
import {
    API,
    DIR,
    ENV,
    PUBLIC_URL,
    LOADING_SUBSCRIPTION,
    SUBJECTS_LOADED,
    SUBSCRIPTION_DELETED,
    SUBSCRIPTION_LOADED
} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import ReactGA from 'react-ga';
import { fetchSubscription } from "../common/actions";
import { useDispatch } from "react-redux";

export default function Login(props) {
    const oldState = typeof props.history.location.state !== 'undefined' ? props.history.location.state : {};

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${ENV}exams/modules`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');
    const [loginType, setLoginType] = useState('email');


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        let data = {};
        let url = `${API}/app/login`;
        if (loginType === 'email'){
            data['username'] = $('#email').val()
            data['password'] = $('#password').val()
        } else {
            data['phone'] = $('#phone').val();
            url = `${API}/app/otp/request`;
        }

        $.ajax({
            url: url,
            method: 'post',
            data: data,
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
                if (loginType === 'otp') {
                    props.history.push({
                        pathname: `${ENV}otp`,
                        state: {
                            ...data,
                            next: next
                        },
                    });
                } else {
                    const thisUser = res;
                    dispatch({type: LOADING_SUBSCRIPTION, payload: true});
                    dispatch(fetchSubscription(thisUser));
                    props.setUser(thisUser);
                    localStorage.setItem('user', JSON.stringify(res));
                    ReactGA.event({
                        category: `User ID: ${thisUser.id}, User Name: ${thisUser.name}, Next Page: ${next}`,
                        action: `User Login`
                    });
                    props.history.push({
                        pathname: `${next}`,
                        state: {user: thisUser},
                    });
                }
            }.bind(this)
        })
    };

    const togglePasswordType = (toggle, e) => {
        setPasswordType(toggle ? 'text' : 'password')
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
                            <form onSubmit={handleSubmit}>
                                <div className="card weekly">
                                    <h5 className="card-header text-center">WELCOME</h5>
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
                                        {
                                            loginType === 'otp' ?
                                                <div className="input-group mb-3 mt-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-mobile" />
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control loginput" placeholder="Phone Number"
                                                           id='phone' required={true}
                                                           aria-label="Phone"
                                                           aria-describedby="basic-addon1" />
                                                </div> :
                                                <React.Fragment>
                                                    <div className="input-group mb-3 mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="fa fa-user" />
                                                            </span>
                                                        </div>
                                                        <input type="email" className="form-control loginput" placeholder="Email"
                                                               id='email' required={true}
                                                               aria-label="Email"
                                                               aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="input-group mb-3 mt-4">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="fa fa-key" />
                                                            </span>
                                                        </div>
                                                        <input type="password" className="form-control loginput" placeholder="Password"
                                                               id='password' required={true}
                                                               aria-label="Password"
                                                               aria-describedby="basic-addon1" />
                                                    </div>
                                                </React.Fragment>
                                        }

                                        {/*<p className="card-text grey">*/}
                                        {/*    <input type="checkbox" aria-label="Checkbox for following text input" /> Remember*/}
                                        {/*        Me</p>*/}
                                        {
                                            processing ?
                                                <div className="text-center">
                                                    <ClipLoader color={'#cf2027'}/>
                                                </div> :
                                                <React.Fragment>
                                                    <div className="text-center mt-2">
                                                        <button type='submit' className="btn btn-primary">Login</button>
                                                    </div>
                                                    {
                                                        loginType === 'otp' ?
                                                            <h6 className="card-title text-center mt-4">
                                                                <button type='button' className='btn btn-primary' onClick={e=> {
                                                                    setLoginType('email')
                                                                }}>Login Using Your Email</button>
                                                            </h6> :
                                                            <h6 className="card-title text-center mt-4">
                                                                <button type='button' className='btn btn-primary' onClick={e=> {
                                                                    setLoginType('otp')
                                                                }}>Login Using Your Phone Number</button>
                                                            </h6>
                                                    }
                                                    <h6 className="card-title text-center mt-4">
                                                        Login To Your
                                                        <Link class="green" to={`${ENV}school-login`}> Student Account</Link>
                                                    </h6>
                                                    <h6 className="card-title text-center mt-4">
                                                        Forgot Password?
                                                        <Link class="green" to={`${ENV}reset`}> Reset Password</Link>
                                                    </h6>
                                                    <h6 className="card-title text-center mt-4">Not yet registered?<br />
                                                        <Link class="green" to={`${ENV}signup`}>Register</Link>
                                                    </h6>
                                                </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
