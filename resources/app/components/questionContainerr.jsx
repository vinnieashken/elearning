import React, {useEffect, useState} from "react";
import {API, ENV, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {ClipLoader} from "react-spinners";

export default function (props) {
    const oldState = props.history.location.state ? props.history.location.state : {};

    const student = (typeof oldState !== "undefined" && oldState.hasOwnProperty('student')) ? oldState.student : props.user
    const subscription = useSelector(state => state.default.subscription);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [exam, setExam] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(props.match.params.hasOwnProperty('index') ? parseInt(props.match.params.index) : 1);
    const [showAns, setShowAns] = useState(false);
    const [answers, setAnswers] = useState({})
    const [userAnswers, setUserAnswers] = useState([]);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(e => {
        if (parseInt(activeQuestion) === parseInt(props.match.params.index))
            getExam();
        else {
            setActiveQuestion(parseInt(props.match.params.index));
            setShowAns(answers.hasOwnProperty(parseInt(props.match.params.index)-1));
        }
    }, [props.match.params.index]);

    const getExam = () => {
        $.ajax({
            url: `${API}/questions/module/${props.match.params.exam}?userid=${student.id}`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
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
                if (subscription.hasOwnProperty('id') || (res.publisher && parseInt(res.publisher.id) === 29)) {
                    setExam(res);
                    if (res.done) {
                        getUserAnswers();
                        res.questions.forEach((el, index) => {
                            if (el.id === res.lastquestion) {
                                props.history.push({
                                    pathname: `${ENV}exams/exam/${res.id}/questions/${index + 1}`,
                                });
                            }
                        });
                    }
                    setLoading(res.done);
                } else {
                    props.history.push({
                        pathname: `${ENV}subscriptions`,
                        state: {
                            next: props.location.pathname
                        },
                    })
                }

            }.bind(this)
        })
    };

    const getUserAnswers = () => {
        $.ajax({
            url: `${API}/modules/${props.match.params.exam}/user/${student.id}`,
            // url: `${API}/subjects/class/{class_id}`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}
                setLoading(false);
                // setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setUserAnswers(res);
                setShowAns(res.length > 0 );
                setLoading(false);
            }.bind(this)
        })
    };


    const handleSubmit = (e) => {
        setProcessing(true);
        $.ajax({
            url: `${API}/questions/module/user/answers/choiceless`,
            method: 'POST',
            data: {
                userid: student['id'],
                moduleid: exam['id'],
                questionid: exam.questions[activeQuestion - 1]['id'],
                answer: answers.hasOwnProperty(activeQuestion - 1) ? answers[activeQuestion - 1] : '',
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
                setShowAns(true);
            }.bind(this),
            success: function (res) {
                setProcessing(false);
                setShowAns(true);
            }.bind(this)
        })
    }

    const handleNext = (e) => {
        e.preventDefault();
        if (activeQuestion === exam.questions.length) {
            props.history.push({
                pathname: `${ENV}exams/modules/secondary`,
            });
        } else {
            setShowAns(false);
            props.history.push({
                pathname: `${ENV}exams/exam/${exam.id}/questions/${activeQuestion + 1}`,
            });
        }
    }

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
            <div id="about" className="section-padding exam">
                <div className="container">
                    {
                        loading ? <Loading/> :
                            <React.Fragment>
                                <Helmet>
                                    <link rel="canonical" href={pathname}/>
                                    <meta name="keywords"
                                          content={`Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili, ${exam.name}`}/>
                                    <meta name="author" content={`Standard Group`}/>
                                    <meta name="description"
                                          content={`Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more ${exam.name}`}/>
                                    <meta property="twitter:title"
                                          content={`Tutor-Soma Tu : ${exam.name} : The Standard`}/>
                                    <meta property="twitter:description" content={`Tutor-Soma Tu - ${exam.name} `}/>
                                    <meta property="twitter:url" content={pathname}/>
                                    <meta property="og:title" content={`Tutor-Soma Tu : ${exam.name} : The Standard `}/>
                                    <meta property="og:description" content={`Tutor-Soma Tu - ${exam.name} `}/>
                                    <meta property="og:url" content={pathname}/>
                                </Helmet>
                                <div className="row">
                                    <div className="col-md-12">
                                        {
                                            exam.hasOwnProperty('publisher') ?
                                                <React.Fragment>
                                                    <h2 className="section-title wow fadeInDown animated"
                                                        data-wow-delay="0.3s">{`${exam.publisher.name}`.toUpperCase()}</h2>
                                                    <h4 className="section-title wow fadeInDown animated"
                                                        data-wow-delay="0.3s">{`${exam.name}`}</h4>
                                                </React.Fragment> :
                                                <h2 className="section-title wow fadeInDown animated"
                                                    data-wow-delay="0.3s">{`${exam.name}`}</h2>

                                        }
                                    </div>
                                    {
                                        exam.hasOwnProperty('class') && exam.hasOwnProperty('subject') ?
                                            <div className='col-md-12 text-center mb-3'>
                                                <span className='section-desc '>{`${exam.class.class} `}</span><span
                                                className='section-desc'>{` ${exam.subject.subject}`}</span>
                                            </div> : ''
                                    }

                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-md-5" style={{display: 'none'}}>
                                        <div className="sticky-top pt-md-5">
                                            <div className="pt-5 mt-2 d-none d-md-block d-lg-block">
                                            </div>
                                            <table className="table mb-4">
                                                <thead className="mb-3">
                                                <tr>
                                                    <p>This Paper contains <font className="bold"> 100</font> Questions to be completed
                                                        within <font className="bold">1hr 20min</font></p>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row" className="">Start Time</th>
                                                    <td>10:00 am</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Time Taken</th>
                                                    <td>25 min</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Time Remaining</th>
                                                    <td>45 min</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Questions Attempted</th>
                                                    <td>10</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table className="table mb-4">
                                                <thead className="">
                                                <tr>
                                                    <h5 className="text-center">Questions Progress <font class="donetxt">(Red
                                                        Attempted)</font></h5>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td className="done">2</td>
                                                    <td>3</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>4</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>6</td>
                                                    <td>7</td>
                                                    <td className="done">32</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td className="done">17</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {
                                        loading ? <Loading/> :
                                            <div className='col-md-12'>
                                                <div>
                                                    {
                                                        message ?
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <div className="text-center mt-2">
                                                                        <div className={messageType} role="alert">
                                                                            <div className="alert-message">
                                                                                {response}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> : ''
                                                    }
                                                    <div className='card'>
                                                        <div className='card-header'>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <h1 className="h3 mb-3">{`Question ${activeQuestion}`}</h1>
                                                                    {/*<h6 className="card-subtitle text-muted">Question Details</h6>*/}
                                                                </div>
                                                                <div className="col-6 ">
                                                                    {
                                                                        <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
                                                                            <div className="btn-group mr-2 sw-btn-group" role="group">
                                                                                {
                                                                                    activeQuestion !== 1 &&
                                                                                    <button className="btn btn-info sw-btn-prev disabled btn-rounded mr-2"
                                                                                            type="button"
                                                                                            onClick={
                                                                                                event => {
                                                                                                    setShowAns(false);
                                                                                                    props.history.push({
                                                                                                        pathname: `${ENV}exams/exam/${exam.id}/questions/${activeQuestion - 1}`,
                                                                                                    });
                                                                                                }
                                                                                            }
                                                                                    >Previous Question</button>
                                                                                }
                                                                                <button className="btn btn-info sw-btn-next btn-rounded mr-2" type="button"
                                                                                        onClick={handleNext}>
                                                                                    {showAns ? 'Next Question' : 'Skip'}
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='card-body'>
                                                            {
                                                                (exam.questions && exam.questions.length > (activeQuestion - 1)) &&
                                                                <React.Fragment>
                                                                    <div className='row'>
                                                                        <div className="col-md-12">
                                                                            <div className="card examcard my-4 mt-md-0 w-100" >
                                                                                <ul className="bg-white float-right" style={{display: 'none'}}>
                                                                                    <li className="text-center p-1 marks">Mrks<br />0</li>
                                                                                </ul>
                                                                                <ul className="list-group list-group-flush">
                                                                                    <li className="list-group-item">
                                                                                        <span dangerouslySetInnerHTML={ {__html: `${exam.questions[activeQuestion - 1].question}`} } />
                                                                                    </li>
                                                                                    {
                                                                                        <div className='row'>
                                                                                            <div className={`form-group ${showAns ? 'col-md-6' : 'col-md-12'} mt-2`}>
                                                                                                <CKEditor
                                                                                                    editor={ ClassicEditor }
                                                                                                    data={answers.hasOwnProperty(activeQuestion - 1) ? answers[activeQuestion - 1] : ''}
                                                                                                    onInit={ editor => {
                                                                                                        // You can store the "editor" and use when it is needed.
                                                                                                        console.log( 'Editor is ready to use!', editor );
                                                                                                    } }
                                                                                                    onChange={ ( event, editor ) => {
                                                                                                        const data = editor.getData();
                                                                                                        let choices = answers;
                                                                                                        choices[activeQuestion - 1] = data;
                                                                                                        setAnswers(choices);
                                                                                                    } }
                                                                                                />
                                                                                            </div>
                                                                                            {
                                                                                                showAns &&
                                                                                                <div className={'form-group col-md-6 answer'}>
                                                                                                    {
                                                                                                        <span dangerouslySetInnerHTML={ {__html: `${exam.questions[activeQuestion - 1].options[0].option}`} } />
                                                                                                    }
                                                                                                </div>
                                                                                            }
                                                                                        </div>
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
                                                                        {
                                                                            processing ?
                                                                                <ClipLoader /> :
                                                                                showAns ?
                                                                                    <div className="btn-group mr-2 sw-btn-group" role="group">
                                                                                        {/*<button className="btn btn-info sw-btn-prev disabled btn-rounded mr-2" type="button">Previous</button>*/}
                                                                                        <button className="btn btn-info sw-btn-next btn-rounded mr-2" type="button"
                                                                                                onClick={handleNext}>{(activeQuestion) === exam.questions.length ? 'Finish Exam' : 'Next Question'}</button>
                                                                                    </div> :
                                                                                    <button type='button'
                                                                                            className="text-center float-right btn btn-success btn-rounded"
                                                                                            onClick={handleSubmit}>
                                                                                        {'Review Answer'}
                                                                                    </button>

                                                                        }
                                                                    </div>
                                                                </React.Fragment>
                                                            }

                                                        </div>
                                                        <div className='card-footer'>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
