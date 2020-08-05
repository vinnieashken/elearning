import React, {useEffect, useState} from "react";
import {API, PUBLIC_URL} from "../../common/constants";
import {Helmet} from "react-helmet";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import Loading from "../../common/loading";

export default function (props) {
    const [unit, setUnit] = useState({});
    const [lessonIndex, setLessonIndex] = useState(0);
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

    const sluggify = (text) => {
        let str = text
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-');

        return `${str}/vel`
    }

    return (
        <React.Fragment>
            <div className="application">
                <Helmet>
                    {
                        !loading &&
                        <title>{`Tutor-Soma Tu : The Standard : ${unit.unit}`}</title>

                    }
                    <link rel="canonical" href={pathname} />
                    <meta name="keywords" content="Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili" />
                    <meta name="author" content="Standard Group" />
                    <meta name="description" content="Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more" />
                    <meta property="twitter:title" content={`Tutor-Soma Tu : The Standard : ${unit.unit}`} />
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
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="section-title wow fadeInDown animated text-center mt-5"
                                        data-wow-delay="0.3s">{unit.unit}</h2>
                                </div>

                            </div>
                            {
                                loading ? <Loading /> :
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="nav flex-column nav-tabs" aria-orientation="vertical">
                                                {
                                                    unit.lessons.map((lesson, index) => {
                                                        return (
                                                            <button className={`nav-link lesson-tab ${parseInt(lessonIndex) === index && 'active'}`} id="v-pills-home-tab"
                                                                    onClick={e => {
                                                                        setLessonIndex(index);
                                                                    }}
                                                            >{lesson.topic}</button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="card-body">
                                                <div className='card-header'>
                                                    <div className='row'>
                                                        <div className='col-md-9'>
                                                            <h5>Squares of numbers</h5>
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <Link to={`/school/units/${props.match.params.unit}/questions/${sluggify(unit.unit)}`} className='btn btn-success btn-sm btn-rounded'>Attempt Questions</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jumbotron">
                                                    <div dangerouslySetInnerHTML={{__html: unit.lessons[lessonIndex].content}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </React.Fragment>

                    }
                </div>
            </div>
        </React.Fragment>
    )
}
