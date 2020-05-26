import React, { useEffect, useState } from 'react';
import {API, APPNAME, ENV, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'
import {Helmet} from "react-helmet";

const images = [
    `${PUBLIC_URL}/static/app/images/math.png`,
    `${PUBLIC_URL}/static/app/images/eng.png`,
    `${PUBLIC_URL}/static/app/images/hist.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`,
    `${PUBLIC_URL}/static/app/images/chem.png`,
    `${PUBLIC_URL}/static/app/images/cre.png`
];

export default function (props) {
    const oldState = props.history.location.state ? props.history.location.state : {};

    const student = (typeof oldState !== "undefined" && oldState.hasOwnProperty('student')) ? oldState.student : props.user
    const subscription = useSelector(state => state.subscription);
    const [exam, setExam] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showAns, setShowAns] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const subjects = useSelector(state => state.subjects);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        console.log(props)
        console.log(subscription)
        getExam();
    }, []);

    const removeTags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '').replace(/&nbsp;/g, '');
    }

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
                    setLoading(res.done);
                    if (res.done)
                        getUserAnswers();
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
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        let marks = 0;
        let answers = [];
        exam.questions.forEach((el) => {
            const ans = $(`input[name="${el.id}"]:checked`).val();
            if (parseInt(el.answer) === parseInt(ans)) {
                marks += 1;
            }
            answers.push({"questionid": el.id, "optionid": parseInt(ans)})
        });
        let data = {
            "moduleid": props.match.params.exam,
            "userid": props.user.id,
            "answers": answers
        };
        marks = (marks / exam.length) * 100;
        $.ajax({
            url: `${API}/questions/module/user/answers`,
            data: data,
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            method: 'POST',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                const score = JSON.parse(res);
                setShowAns(true);
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-success');
                setResponse(<h4>Congratulations, you have scored {score['Score']} / {score['Questions']}. <Link to={`${ENV}exams/modules`}>You can do another paper here</Link></h4>);
                $("html, body").animate({scrollTop: 0}, 200);
            }.bind(this)
        })
    };

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
                                    <link rel="canonical" href={pathname} />
                                    <meta name="keywords" content={`Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili, ${exam.name}`} />
                                    <meta name="author" content={`Standard Group`} />
                                    <meta name="description" content={`Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more ${exam.name}`} />
                                    <meta property="twitter:title" content={`Tutor-Soma Tu : ${exam.name} : The Standard`} />
                                    <meta property="twitter:description" content={`Tutor-Soma Tu - ${exam.name} `} />
                                    <meta property="twitter:url" content={pathname} />
                                    <meta property="og:title" content={`Tutor-Soma Tu : ${exam.name} : The Standard `} />
                                    <meta property="og:description" content={`Tutor-Soma Tu - ${exam.name} `} />
                                    <meta property="og:url" content={pathname} />
                                </Helmet>
                                <div className="row">
                                    <div className="col-md-12">
                                        {
                                            exam.hasOwnProperty('publisher') ?
                                                <React.Fragment>
                                                    <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">{`${exam.publisher.name}`.toUpperCase()}</h2>
                                                    <h4 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">{`${exam.name}`}</h4>
                                                </React.Fragment> :
                                                <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">{`${exam.name}`}</h2>

                                        }
                                    </div>
                                    {
                                        exam.hasOwnProperty('class') && exam.hasOwnProperty('subject') ?
                                            <div className='col-md-12 text-center mb-3'>
                                                <span className='section-desc '>{`${exam.class.class} `}</span><span className='section-desc'>{` ${exam.subject.subject}`}</span>
                                            </div> : ''
                                    }

                                </div>
                                {
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
                                                    <form onSubmit={handleSubmit}>
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
                                                        {
                                                            exam.questions.length > 0 ?
                                                                <React.Fragment>
                                                                    {
                                                                        exam.questions.map((el, index) => {
                                                                            const ansArray = userAnswers.filter(ans => {
                                                                                return el.id === ans.question_id;
                                                                            });
                                                                            const answer = ansArray.length > 0 ? ansArray[0] : {};
                                                                            return (
                                                                                <div className='row'>
                                                                                    <div className="col-md-12">
                                                                                        <div className="card examcard my-4 mt-md-0 w-100" >
                                                                                            <ul className="bg-white float-right" style={{display: `${(exam.done && showAns) ? 'block' : 'none'}`}}>
                                                                                                <li className="text-center p-1 marks">Mrks<br />{el.answer === answer.user_option ? 1 : 0}</li>
                                                                                            </ul>
                                                                                            <ul className="list-group list-group-flush">
                                                                                                <li className="list-group-item">

                                                                                                    {
                                                                                                        el.question === null
                                                                                                            ? <span dangerouslySetInnerHTML={ {__html: `<b>${index+1}</b>.`} } />
                                                                                                            : <span dangerouslySetInnerHTML={ {__html: `<b>${index+1}</b>. ${el.question}`} } />
                                                                                                    }
                                                                                                    {/*<font class="number">.</font> What is meant by the term binomial nomenclature?*/}

                                                                                                </li>
                                                                                                {
                                                                                                    el.options.map((ans) => {
                                                                                                        const isAns = parseInt(el.answer) === parseInt(ans.id);
                                                                                                        const selected = answer.hasOwnProperty('user_option') && answer.user_option === ans.id
                                                                                                        return (
                                                                                                            <React.Fragment>
                                                                                                                <li className="list-group-item ">
                                                                                                                    <input type="radio" id={`${ans.id}`} required={true}
                                                                                                                           defaultChecked={selected}
                                                                                                                           disabled={answer.hasOwnProperty('user_option')}
                                                                                                                           value={ans.id} name={el.id} />
                                                                                                                    <label htmlFor={`${ans.id}`}>
                                                                                                                        {/*<span dangerouslySetInnerHTML={ {__html: `${ans.option.replace(/(<br>\s*)+$/)}`} } className={selected ? isAns ? 'answer' : 'wrong-answer' : ''} />*/}
                                                                                                                        <span className={selected ? isAns ? 'answer' : 'wrong-answer' : ''} > {removeTags(ans.option)} </span>
                                                                                                                        {(isAns && showAns) ? <span className='fa fa-check alert-success'/>: '' }
                                                                                                                    </label>
                                                                                                                </li>
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }

                                                                    {
                                                                        processing ? <ClipLoader /> : showAns ? '' :
                                                                            <div className='row'>
                                                                                <div className="col-md-12">
                                                                                    <button type='submit' className="text-center float-right btn btn-success btn-rounded">Submit For Marking</button>
                                                                                </div>
                                                                            </div>
                                                                    }
                                                                </React.Fragment>
                                                                : message ? ''
                                                                : <div className='rounded'>
                                                                    <div className='col-md-12'>
                                                                        <div className="text-center mt-2">
                                                                            <div className='alert alert-warning' role="alert">
                                                                                <div className="alert-message">
                                                                                    <h4>Sorry, we were unable to get questions for this paper <Link to={`${ENV}exams/modules`}>You can select another paper here</Link></h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        }
                                                    </form>
                                                    <div className="mt-5 text-center container">
                                                        {
                                                            subjects.length > 0 ?
                                                                <React.Fragment>
                                                                    <h2 className="section-title wow fadeInDown animated text-center my-4"
                                                                        data-wow-delay="0.3s">You May Also Like</h2>
                                                                    <div className="row">
                                                                        {
                                                                            subjects.sort(() => 0.5 - Math.random(0, 3)).slice(0, 4).map((el, index) => {
                                                                                return (
                                                                                    <div className="col-lg-3 col-md-6 col-xs-6 col-sm-6">
                                                                                        <div className="featured-box-item">
                                                                                            <div className="featured-icon">
                                                                                                <Link to={`${ENV}exams/subjects/${el.id}/modules`}>
                                                                                                    <img src={images[index]} className="icons" alt={APPNAME} />
                                                                                                </Link>
                                                                                            </div>
                                                                                            <div className="featured-content">
                                                                                                <Link to={`${ENV}exams/subjects/${el.id}/modules`}>
                                                                                                    <h4>{el.subject}</h4>
                                                                                                    <p>Paper 1 Grade 8</p>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }

                                                                    </div>
                                                                </React.Fragment> : ''
                                                        }
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                }
                            </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
