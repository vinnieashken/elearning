import React, {useState, useEffect} from 'react';
import {DIR, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";


export default function Login(props) {
    const oldState = props.history.location.state;

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${DIR}`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');

    useEffect(() => {
        localStorage.clear();
        console.log(`${JSON.stringify(env)}`)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push({
            pathname: `${next}`
        })
        // setProcessing(true);
        // setMessage(false);
        // let email = $('#email').val();
        // let password = $('#password').val();
        // $.ajax({
        //     url: `${PUBLIC_URL}/api/login`,
        //     method: 'post',
        //     data: {
        //         username: email,
        //         password: password,
        //     },
        //     error: function (xhr, status, error) {
        //         var response = JSON.parse(xhr['responseText'])['message'];
        //         if (xhr.status === 405)
        //             response = "Sorry an error has occurred. We are working on it. (405)";
        //         setProcessing(false);
        //         setMessage(true);
        //         setMessageType('alert alert-danger');
        //         setResponse(response);
        //     }.bind(this),
        //     success: function (res) {
        //         setProcessing(false);
        //         localStorage.setItem('token', res.access_token);
        //         props.history.push({
        //             pathname: `${next}`
        //         })
        //     }.bind(this)
        // })
    };

    const togglePasswordType = (toggle, e) => {
        setPasswordType(toggle ? 'text' : 'password')
    };
    return (
        <React.Fragment>
            <div className='application application-offset ready'>
                <div className="container-fluid container-application">
                    <div className="main-content position-relative">
                        <div className="page-content">
                            <div className="min-vh-100 py-5 d-flex align-items-center">
                                <div className="w-100">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-8 col-lg-4">
                                            <div className="card shadow zindex-100 mb-0">
                                                <div className="card-body px-md-5 py-5">
                                                    <div className="mb-5">
                                                        <h6 className="h3">Login</h6>
                                                        <p className="text-muted mb-0">Sign in to your account to
                                                            continue.</p>
                                                    </div>
                                                    <span className="clearfix" />
                                                    <form role="form" onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <label className="form-control-label">Email address</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-user" />
                                                                </span>
                                                                </div>
                                                                <input type="email" className="form-control"
                                                                       id="input-email" placeholder="name@example.com" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div
                                                                className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <label className="form-control-label">Password</label>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a href="#!"
                                                                       className="small text-muted text-underline--dashed border-primary">Lost
                                                                        password?</a>
                                                                </div>
                                                            </div>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-key" />
                                                                </span>
                                                                </div>
                                                                <input type="password" className="form-control"
                                                                       id="input-password" placeholder="Password" />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">
                                                                            <a href="#" data-toggle="password-text" data-target="#input-password">
                                                                                <i className="fa fa-eye" />
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button type="submit"
                                                                    className="btn btn-sm btn-primary btn-icon rounded-pill">
                                                                <span className="btn-inner--text">Sign in</span>
                                                                <span className="btn-inner--icon">
                                                                    <i className="fa fa-long-arrow-alt-right" />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer px-md-5"><small>Not registered?</small>
                                                    <Link to={`${ENV}register`} className="small font-weight-bold">Create account</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
