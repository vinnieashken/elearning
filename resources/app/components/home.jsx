import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {API, APPNAME, ENV, PUBLIC_URL} from "../common/constants";
import moment from "moment";
import {Helmet} from "react-helmet";
import OwlCarousel from 'react-owl-carousel2';


const images = [
    `${PUBLIC_URL}/static/app/images/math.png`,
    `${PUBLIC_URL}/static/app/images/eng.png`,
    `${PUBLIC_URL}/static/app/images/hist.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`,
    `${PUBLIC_URL}/static/app/images/chem.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`
];

const options = {
    items: 5,
    loop: true,
    margin: 10,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

export default function (props) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const pathname = `${window.origin}${props.history.location.pathname}`;

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
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}
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
            <div className="application">
                <Helmet>
                    <link rel="canonical" href={pathname} />
                    <meta name="keywords" content="Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili" />
                    <meta name="author" content="Standard Group" />
                    <meta name="description" content="Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more" />
                    <meta property="twitter:title" content="Tutor-Soma Tu : Classes : The Standard" />
                    <meta property="twitter:description" content="Tutor-Soma Tu - Classes " />
                    <meta property="twitter:url" content={pathname} />
                    <meta property="og:title" content="Tutor-Soma Tu : Classes : The Standard" />
                    <meta property="og:description" content="Tutor-Soma Tu - Classes " />
                    <meta property="og:url" content={pathname} />
                </Helmet>
            </div>
            <div id="sliders">
                <div className="full-width">
                    <div className="carousel slide" id="light-slider">
                        <div id="carousel-area">
                            <div className="carousel slide" data-ride="carousel" id="carousel-slider">

                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img alt="" src={`${PUBLIC_URL}/static/new/img/banner.jpg?${moment().format('YMMDDHHmmss')}`} style={{objectFit: 'cover'}} />
                                            <div className="container">
                                                <div className="carousel-caption text-left mt-5 mt-md-0">

                                                    {/*<div className="slide-title animated fadeInDown mb-4"><span*/}
                                                    {/*    className="red"> Keep Learning</span>*/}
                                                    {/*    <br /> <font class="slidebottext">Anywhere*/}
                                                    {/*        Anytime</font></div>*/}
                                                    <Link className="btn btn-lg btn-common animated fadeInUp" to={{
                                                        pathname:  (props.user && props.user.hasOwnProperty('id')) ? `${ENV}exams/modules` : `${ENV}signin`}}>Get Started
                                                    </Link>
                                                    {/*<a className="btn btn-lg btn-border animated fadeInUp" href="#services">Learn*/}
                                                    {/*    More</a>*/}
                                                </div>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="">
                <div className="container">
                    <div className="row m12">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card shad">
                                <div className="card-body">
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-book topicons mr-md-3 mr-1" />
                                        <div className="card-title icontop">Revision <br /> <font
                                            class="lighttext">Materials</font></div>
                                    </div>
                                    <p className="card-text"> We make learning fun, engaging and accessible for curious
                                        children all
                                        over Kenya</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card shad">
                                <div className="card-body">
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-book topicons mr-md-3 mr-1" />
                                        <div className="card-title icontop">Quick <br /> <font
                                            class="lighttext">Test</font></div>
                                    </div>
                                    <p className="card-text">

                                        Take quick tests on the platform to help improve yourself.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card shad">
                                <div className="card-body">
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-book topicons mr-md-3 mr-1" />
                                        <div className="card-title icontop">Prediction <br /> <font
                                            class="lighttext">Questions</font></div>
                                    </div>
                                    <p className="card-text">
                                        We provide predictive questions and answers on all primary school subjects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card shad">
                                <div className="card-body">
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-book topicons mr-md-3 mr-1" />
                                        <div className="card-title icontop">Past <br /> <font
                                            class="lighttext">Papers</font></div>
                                    </div>
                                    <p className="card-text">
                                        Get all the KCPE past papers from 2000 to date</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="" id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated text-md-left text-center mx-md-5"
                                data-wow-delay="0.3s">Subjects</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            props.subjects.slice(0, 6).map(el => {
                                return(
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="card subj">
                                            <div className="card-body">
                                                <div className="mb-2">
                                                    <i className="fa fa-star-o topicons mr-3 redicon" />
                                                    <div className="card-title bold">{el.subject}</div>
                                                </div>
                                                <p className="card-text">Class 1 to Class 8</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <section className="section-padding bg-light d-lg-none d-md-none d-block" id="services">
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
                                    <h4><a href="#"> Innovations to think about during this period</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
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
                                    <h4><a href="#">Engaging with your teachers online</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
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
                                    <h4><a href="#">Keeping track of your performance</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
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
                                    <h4><a href="#">Improving Memorising capability</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
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
                                    <h4><a href="#">Things to avoid when studying from home</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
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
                                    <h4><a href="#">Fact checking</a></h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
                                        officiis
                                        consequuntur vero error excepturi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-light d-none d-md-block d-lg-block" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated text-md-left text-center mx-md-5"
                                data-wow-delay="0.3s">Important Notes</h2>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel options={options}>

                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://p0.pxfuel.com/preview/364/649/267/asia-space-earth-dark.jpg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">Stay Relevant in a Quickly
                                                            Changing World</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                We provide lifelong learning available any time, anywhere and at your
                                                pace.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://secure.img1-fg.wfcdn.com/im/97073733/compr-r85/3254/32544386/plain-hourglass-sand-timer-60-minutes.jpg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">
                                                            Engaging exams with a timer</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                Our exams come with a timer to help you improve your speed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://elearningindustry.com/wp-content/uploads/2017/02/advantages-and-disadvantages-of-elearning.jpg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">
                                                            Keep track of your performance</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                We help you keep track of your performance and measure whether you are
                                                achieving your
                                                targets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://assets.entrepreneur.com/content/3x2/2000/20181119204233-GettyImages-140892148-edit.jpeg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">
                                                            Improve memorising capability</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                Tutor Soma supplement your reading culture to help you easily recall
                                                what you have read.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://previews.123rf.com/images/underverse/underverse1506/underverse150600640/41155719-avoid-word-on-notes-paper-with-cork-background-.jpg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">
                                                            Things to avoid when studying from home</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                Don't wait for the last minute to start an assignment.
                                                Don't be distracted by social media and cellphone notification.
                                                Switch off the Television</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card bg-dark text-white">
                                                <img
                                                    src="https://markmanson.net/wp-content/uploads/2020/03/6-books-to-help-you-grow-from-your-pain.jpg"
                                                    className="card-img" alt="..." />
                                                    <div className="card-img-overlay">
                                                        <h5 className="card-title text-white">
                                                            A great place to grow</h5>
                                                        <p className="card-text">Learn More</p>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p style={{fontSize: '20px', color: 'white'}}>
                                                TutorSoma helps you increase your
                                                understanding of a
                                                particular subject by focusing your learning for that discipline. Our
                                                exams are meant to
                                                help you improve on areas that need focus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
