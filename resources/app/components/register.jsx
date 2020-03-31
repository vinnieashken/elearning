import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {API, DIR, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";

export default function (props) {
    const oldState = props.history.location.state;

    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('message') ? oldState.message : false);
    const [next, setNext] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('next') ? oldState.next : `${DIR}`);
    const [messageType, setMessageType] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('messageType') ? oldState.messageType : '');
    const [response, setResponse] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('response') ? oldState.response : '');
    const [passwordType, setPasswordType] = useState('password');

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        var formData = new FormData($('form#register')[0]);
        $.ajax({
            url: `${API}/app/register`,
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
                setProcessing(false);
                localStorage.setItem('token', res.access_token);
                props.history.push({
                    pathname: `${next}`
                })
            }.bind(this)
        })
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
                            <div className="min-vh-100 py-5 d-flex align-items-center">
                                <div className="w-100">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-8 col-lg-5">
                                            <div className="card shadow zindex-100 mb-0">
                                                <div className="card-body px-md-5 py-5">
                                                    <div className="mb-5">
                                                        <h6 className="h3">Create account</h6>
                                                        <p className="text-muted mb-0">Made with love for students.</p>
                                                    </div>
                                                    <span className="clearfix" />
                                                    <form role="form" onSubmit={handleSubmit} id='register'>
                                                        {
                                                            message &&
                                                            <div className='row'>
                                                                <div className={messageType} role="alert">
                                                                    <div className="alert-message">
                                                                        {response}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        <div className="form-group">
                                                            <label className="form-control-label">Full Name</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-user" /></span>
                                                                </div>
                                                                <input type="text" className="form-control"
                                                                       name="name" placeholder="full name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-control-label">Email address</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-user" /></span>
                                                                </div>
                                                                <input type="email" className="form-control"
                                                                       name="email" placeholder="name@example.com" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <label className="form-control-label">Password</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-key" /></span>
                                                                </div>
                                                                <input type="password" className="form-control"
                                                                       name="password" placeholder="********" />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        <a href="#" data-toggle="password-text" data-target="#input-password">
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-control-label">Confirm password</label>
                                                            <div className="input-group input-group-merge">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-key" /></span>
                                                                </div>
                                                                <input type="password" className="form-control"
                                                                       name="password_confirmation" placeholder="********" />
                                                            </div>
                                                        </div>
                                                        <div className="my-4">
                                                            <div className="custom-control custom-checkbox mb-3">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id="check-terms" required={true} />
                                                                <label className="custom-control-label"
                                                                       htmlFor="check-terms">I agree to the <a href="#">terms
                                                                    and conditions</a>
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id="check-privacy" required={true} />
                                                                <label className="custom-control-label"
                                                                       htmlFor="check-privacy">I agree to the <a
                                                                    href="#">privacy policy</a>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            {
                                                                processing ? <div className="text-center">
                                                                        <ClipLoader color={'#6e00ff'}/>
                                                                    </div> :
                                                                    <button type="submit"
                                                                            className="btn btn-sm btn-primary btn-icon rounded-pill">
                                                                        <span className="btn-inner--text">Create my account</span>
                                                                        <span className="btn-inner--icon">
                                                                <i className="fa fa-long-arrow-alt-right" />
                                                            </span>
                                                                    </button>
                                                            }

                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer px-md-5"><small>Already have an acocunt?</small>
                                                    <Link to={`${ENV}login`} className="small font-weight-bold">Sign in</Link></div>
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
