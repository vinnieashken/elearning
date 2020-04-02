import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {API, APPNAME, DIR, PUBLIC_URL} from "../common/constants";
import moment from "moment";

const images = [
    `${PUBLIC_URL}/static/app/images/math.png`,
    `${PUBLIC_URL}/static/app/images/eng.png`,
    `${PUBLIC_URL}/static/app/images/hist.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`,
    `${PUBLIC_URL}/static/app/images/chem.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`
];

export default function (props) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');

    useEffect(() => {
        getSubscriptions();
    }, []);

    const getSalutation = () => {
        const now = moment();
        const startOfDay = moment().startOf('day');
        const noon = startOfDay.add('12', "hours");
        const evening = startOfDay.add('18', "hours");

        return now.isAfter(evening, 'time') ? 'Evening' : now.isAfter(noon, 'time') ? 'Afternoon' : 'Morning'
    };

    const getSubscriptions = () => {
        $.ajax({
            url: `${API}/payments/subscriptions`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setSubscriptions(res);
                setLoading(false);
            }.bind(this)
        })
    };

    return (
        <React.Fragment>
            <div id="sliders">
                <div className="full-width">
                    <div id="light-slider" className="carousel slide">
                        <div id="carousel-area">
                            <div id="carousel-slider" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner mt-5" role="listbox">
                                    <div className="carousel-item active">
                                        <img src={`${PUBLIC_URL}/static/app/images/slider/bg-1.png`} alt={APPNAME} />
                                        <div className="carousel-caption">
                                            <h3 className="slide-title animated fadeInDown"><span className="red"> Keep Learning</span>
                                                - Anywhere Anytime</h3>
                                            <h5 className="slide-text animated fadeIn">We make learning easy, fun,
                                                engaging and
                                                accessible for every child</h5>
                                            <Link to={`${ENV}signin`} className="btn btn-lg btn-common animated fadeInUp">Get
                                                Started</Link>
                                            <a href="#" className="btn btn-lg btn-border animated fadeInUp">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="about block text-center">
                                <img src={`${PUBLIC_URL}/static/app/images/image%20(1).png`} alt={APPNAME} />
                                <h5><a href="#">Past Papers</a></h5>
                                <p>Get all the KCPE past papers from 2000 to date</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="about block text-center">
                                <img src={`${PUBLIC_URL}/static/app/images/image%20(2).png`} alt={APPNAME} />
                                <h5><a href="#">Revision Materials</a></h5>
                                <p>Access revision materials for Primary Schools, MOCKs Past Papers with marking schemes.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="about block text-center">
                                <img src={`${PUBLIC_URL}/static/app/images/image%20(5).png`} alt={APPNAME} />
                                <h5><a href="#">Prediction Questions</a></h5>
                                <p>We provide predictive questions and answers on all primary school subjects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="about block text-center">
                                <img src={`${PUBLIC_URL}/static/app/images/image%20(4).png`} alt={APPNAME} />
                                <h5><a href="#">Quick Test</a></h5>
                                <p>Take quick tests on the platform to help improve yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="feature" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Subjects</h2>
                        </div>
                    </div>
                    <ul className="nav nav-pills mb-3 mx-5 col-12" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                               role="tab"
                               aria-controls="pills-home" aria-selected="true">Primary School</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"*/}
                        {/*       role="tab"*/}
                        {/*       aria-controls="pills-profile" aria-selected="false">High School</a>*/}
                        {/*</li>*/}
                    </ul>
                    <div className="tab-content border-0" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab">
                            <div className="row">
                                {


                                    props.subjects.slice(0, 6).map((el, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-xs-12">
                                                <div className="featured-box-item">
                                                    <div className="featured-icon">
                                                        <img src={images[index]} alt={APPNAME} className="icons" />
                                                    </div>
                                                    <div className="featured-content">
                                                        <h4>{el.subject}</h4>

                                                        <p>Grade 1 to Grade 8</p></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                             aria-labelledby="pills-profile-tab">
                            <div className="row">

                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/math.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Mathematics</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/eng.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>English</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/chem.png`} alt={APPNAME} className="icons"/>
                                        </div>
                                        <div className="featured-content">
                                            <h4>Chemistry</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/phyc.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Physics</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/bio.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Biology</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/hist.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>History</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/geo.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Geography</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/agric.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Agriculture</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/comp.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Computer Studies</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/cre.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>CRE/IRE</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/bus.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Business Studies</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="featured-box-item">
                                        <div className="featured-icon">
                                            <img src={`${PUBLIC_URL}/static/app/images/prac.png`} alt={APPNAME} className="icons" />
                                        </div>
                                        <div className="featured-content">
                                            <h4>Practicals</h4>
                                            <p>Form 1 to Form 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section id="services" className="section-padding bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Important
                                Notes</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-cogs" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#"> Stay Relevant in a Quickly Changing World</a></h4>
                                    <p>
                                        We provide lifelong learning available any time, anywhere and at your pace.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-book" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#">Engaging exams with a timer</a></h4>
                                    <p>
                                        Our exams come with a timer to help you improve your speed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-check" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#">Keep track of your performance</a></h4>
                                    <p>
                                        We help you keep track of your performance and measure whether you are achieving your targets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-check" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#">A great place to grow</a></h4>
                                    <p>
                                        TutorSoma helps you increase your understanding of a particular subject by focusing your learning for that discipline. Our exams are meant to help you improve on areas that need focus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-folder-open" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#">Improve memorising capability</a></h4>
                                    <p>
                                        Tutor Soma supplement your reading culture to help you easily recall what you have read.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xs-12">
                            <div className="service-box">
                                <div className="service-icon">
                                    <i className="fa fa-hand-pointer-o" />
                                </div>
                                <div className="service-content">
                                    <h4><a href="#">Things to avoid when studying from home</a></h4>
                                    <ul>
                                        <li>Don't wait for the last minute to start an assignment.</li>
                                        <li>Don't be distracted by social media and cellphone notification.</li>
                                        <li>Switch off the Television</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
