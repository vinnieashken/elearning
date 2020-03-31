import React, {useState, useEffect} from 'react';
import {API, DIR, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";


export default function Login(props) {
    const oldState = props.history.location.state;

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${DIR}/exams/modules`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');

    useEffect(() => {
        localStorage.clear();
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
                props.history.push({
                    pathname: `${next}`,
                    state: {user: JSON.parse(res)},
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
            <div className=''>
                <nav className="navbar navbar-expand-md bg-white sticky-top pb-3">

                    <div className="collapse navbar-collapse flex-column  text-center" id="navbar">

                        <ul className="navbar-nav w-100 justify-content-center px-3 ">

                            <li>
                                <a href={`${PUBLIC_URL}`} className="logo">
                                    <img src={`${PUBLIC_URL}/static/landing/img/logo.png`}
                                         className="logoimg" alt="Standard E-Learning"/>
                                </a>
                            </li>
                        </ul>


                    </div>

                </nav>
                <div className="container-fluid container-application">
                    <div className="main-content position-relative">
                        <div className="page-content">
                            <div className=" py-5 d-flex align-items-center">
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
                                                        {
                                                            message &&
                                                            <div className={messageType} role="alert">
                                                                <div className="alert-message">
                                                                    {response}
                                                                </div>
                                                            </div>
                                                        }
                                                        <div className="form-group">
                                                            <label className="form-control-label">Email address</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-user" />
                                                                </span>
                                                                </div>
                                                                <input type="email" className="form-control"
                                                                       id="email"  />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div
                                                                className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <label className="form-control-label">Password</label>
                                                                </div>
                                                                {/*<div className="mb-2">*/}
                                                                {/*    <a href="#!"*/}
                                                                {/*       className="small text-muted text-underline--dashed border-primary">Lost*/}
                                                                {/*        password?</a>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-key" />
                                                                </span>
                                                                </div>
                                                                <input type={passwordType} className="form-control"
                                                                       id="password" placeholder="Password" />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text" onMouseUp={togglePasswordType.bind(this, false)} onMouseDown={togglePasswordType.bind(this, true)} onMouseLeave={togglePasswordType.bind(this, false)}>
                                                                                <i className="fa fa-eye" />
                                                                        </span>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            {
                                                                processing ?  <div className="text-center">
                                                                        <ClipLoader color={'#6e00ff'}/>
                                                                    </div> :
                                                                    <button type="submit"
                                                                            className="btn btn-sm btn-primary btn-icon rounded-pill">
                                                                        <span className="btn-inner--text">Sign in</span>
                                                                        <span className="btn-inner--icon">
                                                                    <i className="fa fa-long-arrow-alt-right" />
                                                                </span>
                                                                    </button>
                                                            }
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
                <footer style={{color: "#000000", background: "linear-gradient(to bottom right, #510812, #bf1e2d)"}}
                        className="">
                    <ul className="nav from text-center bg-light ">
                        <li className="nav-item mt-2 mr-1 ">
                            <a className="nav-link px-0 " href="# ">VAS from </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-0 " href="# "><img
                                src="https://vas.standardmedia.co.ke/front-end/images/STANDARD-REDESIGN-LOGO.png"
                                className="bottomlogo mt-2" /></a>
                        </li>
                    </ul>
                    <div className="card text-center ">
                        <div className="card-header p-2 ">
                            <div className="container ">
                                <ul className="nav text-center ">
                                    <li className="nav-item ">
                                        <a className="nav-link " href="# ">DIGGER</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " href="# ">BTV</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " href="# ">TRAVELOG</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#slider-area ">PULSER</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#services ">FARMERS</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#slider-area ">EVE WOMAN</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#services ">FM VYBEZ</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#slider-area ">SPICE RADIO</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link page-scroll " href="#services ">RADIO MAISHA</a>
                                    </li>
                                    <li className="nav-item border-0 ">
                                        <a className="nav-link page-scroll " href="#slider-area ">CORPORATE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body p-2 ">
                            <span>© Copyright 2020 - Standard Group PLC</span>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}
