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
            <div id="about" className="section-padding mt-5 pricing login">
                <div className="container mt-5">

                    <div className="row">
                        <div className="mx-auto mt-5 col-md-5 col-sm-12">
                            <div className="card weekly">
                                <h5 className="card-header text-center">SIGN UP</h5>
                                <div className="card-body">
                                    <div className="input-group mb-3 mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-user" />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control loginput" placeholder="Full Name"
                                               aria-label="Username"
                                               aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3 mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control loginput" placeholder="Email"
                                               aria-label="Email"
                                               aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3 mt-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-key" />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control loginput" placeholder="Password"
                                               aria-label="Password"
                                               aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3 mt-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-key" />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control loginput"
                                               placeholder="Confirm Password" aria-label="Confirm Password"
                                               aria-describedby="basic-addon1" />
                                    </div>
                                    <p className="card-text grey">
                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                        I agree to the terms and conditions
                                    </p>
                                    <p className="card-text grey">
                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                        I agree to the privacy policy
                                    </p>
                                    <div className="text-center mt-2">
                                        <a href="#" className="btn btn-primary">Register</a>
                                    </div>
                                    <h6 className="card-title text-center mt-4">Have an Account?<br />
                                        <Link class="green" to={`${ENV}sigin`}>Sign in</Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
