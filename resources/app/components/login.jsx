import React, {useState, useEffect} from 'react';
import {API, DIR, ENV, PUBLIC_URL, SUBJECTS_LOADED, SUBSCRIPTION_DELETED} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import Loading from "../common/loading";
import { fetchSubscription } from "../common/actions";
import { useDispatch } from "react-redux";

export default function Login(props) {
    const oldState = props.history.location.state;

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${ENV}exams/modules`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
        props.setUser({});
        dispatch ({ type: SUBSCRIPTION_DELETED, payload: [] });
        console.log(`${JSON.stringify(env)}`)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        let email = $('#email').val();
        let password = $('#password').val();
        $.ajax({
            url: `${API}/app/login`,
            method: 'post',
            data: {
                username: email,
                password: password,
            },
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
                $("html, body").animate({scrollTop: 0}, 200);
            }.bind(this),
            success: function (res) {
                localStorage.setItem('user', res);
                const thisUser = JSON.parse(res);
                dispatch(fetchSubscription(thisUser));
                props.setUser(thisUser);
                props.history.push({
                    pathname: `${next}`,
                    state: {user: thisUser},
                });
                setProcessing(false);
            }.bind(this)
        })
    };

    const togglePasswordType = (toggle, e) => {
        setPasswordType(toggle ? 'text' : 'password')
    };
    return (
        <React.Fragment>
            <div id="about" className="section-padding mt-5 pricing login">
                <div className="container mt-5">

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
                                        <div className="input-group mb-3 mt-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-user" />
                                            </span>
                                            </div>
                                            <input type="email" className="form-control loginput" placeholder="Username"
                                                   id='email'
                                                   aria-label="Username"
                                                   aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3 mt-4">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-key" />
                                            </span>
                                            </div>
                                            <input type="password" className="form-control loginput" placeholder="Password"
                                                   id='password'
                                                   aria-label="Password"
                                                   aria-describedby="basic-addon1" />
                                        </div>
                                        {/*<p className="card-text grey">*/}
                                        {/*    <input type="checkbox" aria-label="Checkbox for following text input" /> Remember*/}
                                        {/*        Me</p>*/}
                                        {
                                            processing ?
                                                <Loading/> :
                                                <React.Fragment>
                                                    <div className="text-center mt-2">
                                                        <button type='submit' className="btn btn-primary">Login</button>
                                                    </div>
                                                    {/*<h6 className="card-title text-center mt-4">*/}
                                                    {/*    Forgot Password?*/}
                                                    {/*    <font class="green">Reset Password</font>*/}
                                                    {/*</h6>*/}
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
