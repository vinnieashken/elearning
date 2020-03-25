import React, {useState, useEffect} from 'react';
import {DIR, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";


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
            <div className='main d-flex justify-content-center w-100'>
                <div className="container d-flex flex-column">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">

                                <div className="text-center mt-4">
                                    {/*<img src={`${PUBLIC_URL}/style/images/logo.png`} alt="Standard E-Learning"*/}
                                    {/*     className="img-fluid " width="40%"/>*/}
                                    <h2>The Standard E-Learning</h2>
                                    <p className="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form onSubmit={handleSubmit}>
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
                                                    <input className="form-control form-control-lg" type="email" required
                                                           name="email" id="email" placeholder="Enter your email"/>
                                                </div>
                                                <div className="form-group">

                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Password</label>
                                                        </div>
                                                        {/*<div className="col-auto">*/}
                                                        {/*    <Link to='reset' className="form-text small text-muted">*/}
                                                        {/*        Forgot password?*/}
                                                        {/*    </Link>*/}

                                                        {/*</div>*/}
                                                    </div>

                                                    <div className="input-group input-group-merge">

                                                        <input type={passwordType} className="form-control form-control-lg form-control-appended"
                                                               name="password" id="password" placeholder="Enter your password" />

                                                        <div className="input-group-append">
                                                    <span className="input-group-text" onMouseUp={togglePasswordType.bind(this, false)} onMouseDown={togglePasswordType.bind(this, true)} onMouseLeave={togglePasswordType.bind(this, false)}>
                                                        <i className="fa fa-eye" />
                                                    </span>
                                                        </div>

                                                    </div>
                                                </div>
                                                {
                                                    processing ?
                                                        <div className="text-center mt-3">
                                                            <ClipLoader color={'#cf2027'} />
                                                        </div> :
                                                        <React.Fragment>
                                                            <div className="text-center mt-3">
                                                                <button type='submit' className="btn btn-lg btn-success">Sign in</button>
                                                            </div>

                                                            {/*<div className="text-center">*/}
                                                            {/*    <small className="text-muted text-center mt-5">*/}
                                                            {/*        Don't have an account yet? <Link to='register'>Register</Link>.*/}
                                                            {/*    </small>*/}
                                                            {/*</div>*/}
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
        </React.Fragment>
    )
}
