import React, {useEffect, useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {API, ENV, LOADING_SUBSCRIPTION} from "../common/constants";
import {fetchSubscription} from "../common/actions";
import {useDispatch} from "react-redux";

export default function (props) {
    const oldState = typeof props.history.location.state !== 'undefined' ? props.history.location.state : {};

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${ENV}academy`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');
    const [loginType, setLoginType] = useState('email');

    useEffect(e => {
        console.log(next);
    }, [])

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        setProcessing(true)
        setMessage(false)
        $.ajax({
            url: `${API}/app/login`,
            method: 'post',
            data: {
                username: $('#email').val(),
                password: $('#password').val()
            },
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
                dispatch({type: LOADING_SUBSCRIPTION, payload: true});
                dispatch(fetchSubscription(res));
                localStorage.setItem('user', JSON.stringify(res));
                props.history.push({
                    pathname: `${next}`,
                    state: {user: res},
                });

            }.bind(this)
        })
    }
    return (
        <div className='d-flex justify-content-center w-100'>
            <div className="container d-flex flex-column">
                <div className="row h-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                {/*<h1 className="h2">Welcome back, Chris</h1>*/}
                                {/*<p className="lead">*/}
                                {/*    Sign in to your account to continue*/}
                                {/*</p>*/}
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="text-center">
                                            <h1 className="h2">TutorSoma Academy..</h1>
                                            <p className="lead">
                                                Sign in to your account to continue
                                            </p>
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            {
                                                message &&
                                                <div className={messageType} role="alert">
                                                    <div className="alert-message">
                                                        {response}
                                                    </div>
                                                </div>
                                            }
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control form-control-lg" type="email"
                                                       id="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control form-control-lg" type="password"
                                                       id="password" placeholder="Enter your password" />
                                                {/*<small>*/}
                                                {/*    <a href="pages-reset-password.html">Forgot password?</a>*/}
                                                {/*</small>*/}
                                            </div>
                                            {/*<div>*/}
                                            {/*    <div className="custom-control custom-checkbox align-items-center">*/}
                                            {/*        <input type="checkbox" className="custom-control-input"*/}
                                            {/*               value="remember-me" name="remember-me" checked="" />*/}
                                            {/*            <label className="custom-control-label text-small">Remember me*/}
                                            {/*                next time</label>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {
                                                processing ?
                                                    <div className="text-center mt-3">
                                                        <ClipLoader color={'#cf2027'} />
                                                    </div> :
                                                    <React.Fragment>
                                                        <div className="text-center mt-3">
                                                            <button type='submit' className="btn btn-lg btn-success">Sign in</button>
                                                        </div>

                                                        <div className="text-center">
                                                            <small className="text-muted text-center mt-5">
                                                                Don't have an account yet? <Link to='/academy/register'>Register</Link>.
                                                            </small>
                                                        </div>
                                                    </React.Fragment>
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
