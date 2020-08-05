import React, {useEffect, useState} from "react";
import {API, PUBLIC_URL} from "../../common/constants";
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
import Loading from "../../common/loading";

export default function (props) {
    const [unit, setUnit] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerVisible, setAnswerVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(e => {
        fetchUnit();
    }, []);

    const fetchUnit = () => {
        $.ajax({
            url: `${API}/lessons/unit/${props.match.params.unit}`,
            method: 'get',
            success: data => {
                setUnit(data);
                setLoading(false)
                // if (data.lessons && data.lessons.length > 0)
                //     props.history.push(`/lessons/units/${props.match.params.unit}/lessons/${sluggify(data.lessons[lessonIndex].topic)}`);
            }
        })
    }

    return (
        <React.Fragment>
            <div className="application">
                <Helmet>
                    <link rel="canonical" href={pathname} />
                    <meta name="keywords" content="Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili" />
                    <meta name="author" content="Standard Group" />
                    <meta name="description" content="Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more" />
                    <meta property="twitter:title" content="Tutor-Soma Tu : Examination Papers : The Standard" />
                    <meta property="twitter:description" content="Tutor-Soma Tu - Examination Papers " />
                    <meta property="twitter:url" content={pathname} />
                    <meta property="og:title" content="Tutor-Soma Tu : Examination Papers : The Standard" />
                    <meta property="og:description" content="Tutor-Soma Tu - Examination Papers " />
                    <meta property="og:url" content={pathname} />
                </Helmet>
            </div>
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
            <div id="about" className="section-padding profile">
                <div className="container">
                    {
                        loading ? <Loading /> :
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h4 className="card-title">{unit.unit}</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <Link className="btn btn-outline-success btn-sm btn-rounded float-right"
                                                  to={`/school/units/${props.match.params.unit}/lessons`}>View Lessons</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12"><h5>Question {questionIndex + 1} of {unit.questions.length}</h5>
                                            <div className='jumbotron'>
                                                <strong><span dangerouslySetInnerHTML={{__html: unit.questions[questionIndex].question}} /></strong>
                                                <div className='answers'>
                                                    <p>A. {unit.questions[questionIndex].A}</p>
                                                    <p>B. {unit.questions[questionIndex].B}</p>
                                                    <p>C. {unit.questions[questionIndex].C}</p>
                                                    <p>D. {unit.questions[questionIndex].D}</p>
                                                </div>
                                                {
                                                    (answerVisible) &&
                                                    <div className='answer'>
                                                        <strong>Correct Answer: {unit.questions[questionIndex].answer}</strong>
                                                        <div dangerouslySetInnerHTML={{__html: unit.questions[questionIndex].explanation}} />

                                                    </div>
                                                }
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className='btn-group float-right'>
                                                            <button type='button' className='btn btn-outline-success mr-2 btn-sm btn-rounded' onClick={e => {
                                                                if (questionIndex + 1 === unit.questions.length) {
                                                                    props.history.push(`/school`);
                                                                } else {
                                                                    setAnswerVisible(false);
                                                                    setQuestionIndex(questionIndex + 1)
                                                                }
                                                            }}>Skip</button>

                                                            {
                                                                answerVisible ?
                                                                    <button className='btn btn-success bt-sm btn-rounded' onClick={e => {
                                                                        if (questionIndex + 1 === unit.questions.length) {
                                                                            props.history.push(`/school`);
                                                                        } else {
                                                                            setAnswerVisible(false);
                                                                            setQuestionIndex(questionIndex + 1)
                                                                        }
                                                                    }}>{questionIndex + 1 === unit.questions.length ? 'Finish' : 'Next'}</button> :
                                                                    <button className='btn btn-success btn-sm btn-rounded' onClick={e => {setAnswerVisible(true)}}>See Answer</button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
