import React, { useEffect, useState } from 'react';
import {API, ENV, LOADING_SUBSCRIPTION, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter, customFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from "react-bootstrap-table-next";
import Loading from "../common/loading";
const { SearchBar } = Search;
import { Helmet } from 'react-helmet';
import EditExamModal from "./editExamModal";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubscription} from "../common/actions";
import Select from "react-select";

const levels = {
    primary: 1,
    secondary: 2
}

export default function (props) {
    const dispatch = useDispatch();
    const oldState = typeof props.history.location.state !== 'undefined' ? props.history.location.state : {};

    const [loading, setLoading] = useState(true);
    const [allModules, setAllModules] = useState([]);
    const [modules, setModules] = useState([]);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [selectedExam, setSelectedExam] = useState({});
    const [searchParam, setSearchParam] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const classes = useSelector(state => state.default.classes);
    const subjects = useSelector(state => state.default.subjects);
    const [subjectOptions, setSubjectOptions] = useState({});
    const [classOptions, setClassOptions] = useState({});
    const [user, setUser] = useState(props.user);
    const subscription = useSelector(state => state.default.subscription);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        setLoading(true);
        setUser(props.user)
        const subjectArray = {}
        const classArray = {}
        subjects.forEach(el => {
            subjectArray[`${el.subject}`] = `${el.subject}`
        })
        classes.filter(el => {
            return [2, 6, 7, 8].includes(el.id)
        }).forEach(el => {
            classArray[el.id] = el.class
        })
        setSubjectOptions(subjectArray)
        setClassOptions(classArray)
        getModules();
    }, [props.match.params.subject, props.match.params.level]);

    const getModules = () => {
        let url = props.match.params.level === 'secondary' ? `${API}/modules/nochoices/list` : `${API}/modules/${props.match.params.hasOwnProperty('subject') ? `subject/name/${props.match.params.subject}` : 'list'}${props.user ? `?userid=${props.user.id}`: ''}` ;
        // if (props.match.params.hasOwnProperty('subject'))
        //     url = `${API}/modules/subject/name/${filterValue}`;

        $.ajax({
            url: url,
            // url: `${API}/subjects/class/{class_id}`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setAllModules(res);
                setModules(res);
                setLoading(false);
                if (classes.length <= 0 || subjects.length <= 0) {
                    getClasses();
                    getSubjects();
                }
            }.bind(this)
        })
    };

    const selected = (row, isSelected) =>{
        let exam = row;
        exam['institution_id'] = props.user.institution.id
        setSelectedExam(exam);
    };

    const addExam = (exam) => {
        setModules(modules.push(exam))
    }


    const provider = (cell, row) => {
        return (
            row.institution_name !== null ? row.institution_name : 'Standard Group'
        )
    }

    const convertToSlug = (Text) => {
        return Text
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-')
            ;
    }

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                {
                    // ((user.teacher || user.owner) && (parseInt(user.institution_id) === parseInt(row.institution_id))) ?
                    //     <React.Fragment>
                    //         <Link to={{
                    //             pathname: `${ENV}exams/exam/${row.id}/performance`,
                    //             state: {
                    //                 exam: row
                    //             }
                    //         }} className='btn btn-sm btn-rounded btn-outline-success btn-success m-1'>
                    //             Performance <i className="fa fa-graduation-cap" />
                    //         </Link>
                    //         <Link to={{
                    //             pathname: `${ENV}exams/exam/edit/${row.id}`,
                    //             state: {
                    //                 exam: row
                    //             }
                    //         }} className='btn btn-sm btn-rounded btn-outline-success btn-success m-1'>
                    //             Add Question <i className="fa fa-plus" />
                    //         </Link>
                    //         <Link to={'#'} className='btn btn-sm btn-rounded btn-outline-success btn-success m-1' data-toggle="modal" data-target="#exampleModal">
                    //             Edit Paper <i className="fa fa-pencil" />
                    //         </Link>
                    //     </React.Fragment> :
                        <Link to={{
                            pathname: props.match.params.level === 'secondary' ? `${ENV}exams/exam/${row.id}/${convertToSlug(row.module)}/questions/1` : parseInt(row.institution_id) === 29 ? `${ENV}free/exam/${row.id}/${convertToSlug(row.module)}` : `${ENV}exams/exam/${row.id}/${convertToSlug(row.module)}`,
                            state: {
                                exam: row
                            }
                        }} className={`btn btn-sm btn-rounded ${row.done ? `btn-success-filled` : `btn-outline-success`} btn-success`}>
                            {row.done ? `Revise Paper` : `Take Test`}
                        </Link>
                }
            </div>
        )
    };

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
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="section-title wow fadeInDown animated text-center "
                                        data-wow-delay="0.3s">Examination papers</h2>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    {
                                        message ?
                                            <div className="text-center mt-2">
                                                <div className={messageType} role="alert">
                                                    <div className="alert-message">
                                                        {response}
                                                    </div>
                                                </div>
                                            </div> : ''
                                    }
                                                <React.Fragment>
                                                    {/*<div className='row'>*/}
                                                    {/*    <div className='col-md-8'>*/}
                                                    {/*        <input type='text' className='form-control form-control-sm rounded' name='search' placeholder="Search" onChange={event => {*/}
                                                    {/*            let str = event.target.value;*/}
                                                    {/*            let filteredModules = allModules.filter(el => {*/}
                                                    {/*                return (el.module && el.module.toLowerCase().includes(str.toLowerCase())) || (el.class && el.class.toLowerCase().includes(str.toLowerCase())) || (el.subject && el.subject.toLowerCase().includes(str.toLowerCase()))*/}
                                                    {/*            })*/}
                                                    {/*            setModules(filteredModules)*/}
                                                    {/*        }}/>*/}
                                                    {/*    </div>*/}
                                                    {/*    <div className='col-md-4'>*/}
                                                    {/*        {*/}
                                                    {/*            (user.teacher || user.owner) ?*/}
                                                    {/*                subscription.hasOwnProperty('id') ?*/}
                                                    {/*                    <button onClick={e => {*/}
                                                    {/*                        let exam = {};*/}
                                                    {/*                        exam['institution_id'] = user.institution.id*/}
                                                    {/*                        setSelectedExam(exam);*/}
                                                    {/*                    }} className='mb-3 float-right btn btn-sm btn-rounded btn-success' data-toggle="modal" data-target="#exampleModal">Add Exam</button>*/}
                                                    {/*                    : <Link to={`${ENV}subscriptions`} className='mb-3 float-right btn btn-sm btn-rounded btn-success' >Add Exam</Link>*/}
                                                    {/*                : <Link to={`${ENV}free/exams`} className='mb-3 float-right btn btn-sm btn-rounded btn-success' >Try Free Exams</Link>*/}
                                                    {/*        }*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    {/*{*/}
                                                    {/*    modules.filter(el => {return parseInt(el.status) === 1}).reverse().map(el => {*/}
                                                    {/*        return (*/}
                                                    {/*            <div className="card">*/}
                                                    {/*                <div className="card-body">*/}
                                                    {/*                    <div className='row'>*/}
                                                    {/*                        <div className='col-md-8' onClick={e=> {*/}
                                                    {/*                            props.history.push({*/}
                                                    {/*                                pathname: parseInt(el.institution_id) === 29 ? `${ENV}free/exam/${el.id}` : `${ENV}exams/exam/${el.id}`,*/}
                                                    {/*                                state: {*/}
                                                    {/*                                    exam: el*/}
                                                    {/*                                },*/}
                                                    {/*                            });*/}
                                                    {/*                        }}>*/}
                                                    {/*                            <h1 className={`h3 mb-3`}>{el.module}</h1>*/}
                                                    {/*                            <h6 className="card-subtitle text-muted"><span>{el.subject}</span> - <span>{el.class}</span></h6>*/}
                                                    {/*                            <h6 className="card-subtitle text-muted mt-1"><span>{`Paper #${el.id}`}</span></h6>*/}
                                                    {/*                        </div>*/}
                                                    {/*                        <div className="col-md-4 ">*/}
                                                    {/*                            {*/}
                                                    {/*                                ((user.teacher || user.owner) && (parseInt(user.institution_id) === parseInt(el.institution_id))) ?*/}
                                                    {/*                                    <React.Fragment>*/}
                                                    {/*                                        <Link to={{*/}
                                                    {/*                                            pathname: `${ENV}exams/exam/${el.id}/performance`,*/}
                                                    {/*                                            state: {*/}
                                                    {/*                                                exam: el*/}
                                                    {/*                                            }*/}
                                                    {/*                                        }} className='float-right btn btn-sm btn-rounded btn-outline-success btn-success m-1'>*/}
                                                    {/*                                            Performance <i className="fa fa-graduation-cap" />*/}
                                                    {/*                                        </Link>*/}
                                                    {/*                                        <Link to={{*/}
                                                    {/*                                            pathname: `${ENV}exams/exam/edit/${el.id}`,*/}
                                                    {/*                                            state: {*/}
                                                    {/*                                                exam: el*/}
                                                    {/*                                            }*/}
                                                    {/*                                        }} className='float-right btn btn-sm btn-rounded btn-outline-success btn-success m-1'>*/}
                                                    {/*                                            Add Question <i className="fa fa-plus" />*/}
                                                    {/*                                        </Link>*/}
                                                    {/*                                        <Link to={'#'} className='float-right btn btn-sm btn-rounded btn-outline-success btn-success m-1' data-toggle="modal" data-target="#exampleModal">*/}
                                                    {/*                                            Edit Paper <i className="fa fa-pencil" />*/}
                                                    {/*                                        </Link>*/}
                                                    {/*                                    </React.Fragment> :*/}
                                                    {/*                                    <Link to={{*/}
                                                    {/*                                        pathname: parseInt(el.institution_id) === 29 ? `${ENV}free/exam/${el.id}` : `${ENV}exams/exam/${el.id}`,*/}
                                                    {/*                                        state: {*/}
                                                    {/*                                            exam: el*/}
                                                    {/*                                        }*/}
                                                    {/*                                    }} className={`float-right btn btn-sm btn-rounded ${el.done ? `btn-success-filled` : `btn-outline-success`} btn-success`}>*/}
                                                    {/*                                        {el.done ? `Revise Paper` : `Take Test`}*/}
                                                    {/*                                    </Link>*/}
                                                    {/*                            }*/}
                                                    {/*                            /!*<Link className={`float-right btn btn-sm btn-rounded ${el.done ? `btn-success-filled` : `btn-outline-success`} btn-success mr-3`} to={{*!/*/}
                                                    {/*                            /!*    pathname: parseInt(el.institution_id) === 29 ? `${ENV}free/exam/${el.id}` : `${ENV}exams/exam/${el.id}`,*!/*/}
                                                    {/*                            /!*    state: {*!/*/}
                                                    {/*                            /!*        exam: el*!/*/}
                                                    {/*                            /!*    }*!/*/}
                                                    {/*                            /!*}}>{el.done ? `Revise Paper` : `Take Test`}</Link>*!/*/}
                                                    {/*                        </div>*/}
                                                    {/*                        /!*<a href="#" className="btn btn-sm btn-success float-right">Take Test</a>*!/*/}
                                                    {/*                    </div>*/}
                                                    {/*                </div>*/}
                                                    {/*            </div>*/}
                                                    {/*        )*/}
                                                    {/*    })*/}
                                                    {/*}*/}

                                                    <ToolkitProvider
                                                        keyField="id"
                                                        data={modules.filter(el => {return parseInt(el.status) === 1}).reverse()}
                                                        // data={ modules.filter(el => {
                                                        //     return (el.institution_id === null || parseInt(el.institution_id) === 2 || parseInt(props.user.institution_id) ===  parseInt(el.institution_id))
                                                        // }) }
                                                        columns={
                                                            [
                                                                // {dataField: 'id',      text: 'ID',    sort: true },
                                                                {
                                                                    dataField: 'module',
                                                                    text: 'Test Papers',
                                                                    formatter: (cell, row) => {
                                                                        return (
                                                                            <span>{row.module}<br />{`${row.class} - ${row.subject}`}</span>
                                                                        )
                                                                    },
                                                                    style: { textAlign: 'left' }
                                                                },
                                                                // {
                                                                //     dataField: 'class_id',
                                                                //     text: 'Class',
                                                                //     formatter: cell => classOptions[cell],
                                                                //     filter: selectFilter({
                                                                //         options: classOptions,
                                                                //         onFilter: (filterValue) => {
                                                                //             setSelectedClass(filterValue)
                                                                //             // props.history.push({
                                                                //             //     pathname: `${ENV}exams/modules`,
                                                                //             //     state: {user: thisUser},
                                                                //             // });
                                                                //         }
                                                                //     })
                                                                // },
                                                                // {
                                                                //     dataField: 'subject',
                                                                //     text: 'Subject',
                                                                //     formatter: cell => subjectOptions[cell],
                                                                //     filter: selectFilter({
                                                                //         options: subjectOptions,
                                                                //         onFilter: (filterValue) => {
                                                                //             setSelectedSubject(filterValue)
                                                                //             setLoading(true)
                                                                //             $.ajax({
                                                                //                 url: `${API}/modules/subject/name/${filterValue}`,
                                                                //                 // url: `${API}/subjects/class/{class_id}`,
                                                                //                 method: 'GET',
                                                                //                 headers: {
                                                                //                     'appkey': 'ELE-2020-XCZ3'
                                                                //                 },
                                                                //                 error: function (xhr, status, error) {
                                                                //                     var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                                                                //                     try {
                                                                //                         response = JSON.parse(xhr['responseText'])['message']
                                                                //                     }catch (e) {}                setLoading(false);
                                                                //                     setMessage(true);
                                                                //                     setMessageType('alert alert-danger');
                                                                //                     setResponse(response);
                                                                //                 }.bind(this),
                                                                //                 success: function (res) {
                                                                //                     setModules(res);
                                                                //                     setLoading(false);
                                                                //                 }.bind(this)
                                                                //             })
                                                                //         }
                                                                //     })
                                                                // },
                                                                // {dataField: 'subject',        text: 'By',      sort: true, formatter: provider},
                                                                {dataField: 'created_at',   text: 'Select',      sort: true, formatter: actionButton},
                                                            ]
                                                        } search={true}>
                                                        {
                                                            props =>
                                                                (
                                                                    <React.Fragment>
                                                                        <div className='row  mt-2'>
                                                                            <div className='col-md-3 col-sm-6'>
                                                                                <input type='text' className='form-control form-control-sm rounded' name='search' placeholder="Search" defaultValue={searchParam} onChange={event => {
                                                                                    let str = event.target.value;
                                                                                    setSearchParam(str);
                                                                                }}/>
                                                                            </div>
                                                                            <div className='col-md-3 col-sm-6'>
                                                                                <Select name="class"
                                                                                        defaultValue={selectedClass}
                                                                                        onChange={setSelectedClass}
                                                                                        options={classes.map(el => {
                                                                                            return {label: el.class, value: el.id}
                                                                                        })}

                                                                                />
                                                                            </div>
                                                                            <div className='col-md-3 col-sm-6' >
                                                                                <button onClick={event => {
                                                                                    event.preventDefault();
                                                                                    if (!searchParam || searchParam === '') {
                                                                                        setMessage(true);
                                                                                        setMessageType('alert alert-danger');
                                                                                        setResponse("Please type in search");
                                                                                    } else {
                                                                                        setLoading(true)
                                                                                        setMessage(false)
                                                                                        $.ajax({
                                                                                            url: `${API}/modules/list?${props.user ? `userid${props.user.id}&`:''}search=${searchParam}&${selectedClass ? `class_id=${selectedClass.value}` : ''}`,
                                                                                            // url: `${API}/subjects/class/{class_id}`,
                                                                                            method: 'GET',
                                                                                            headers: {
                                                                                                'appkey': 'ELE-2020-XCZ3'
                                                                                            },
                                                                                            error: function (xhr, status, error) {
                                                                                                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                                                                                                try {
                                                                                                    response = JSON.parse(xhr['responseText'])['message']
                                                                                                } catch (e) {
                                                                                                }
                                                                                                setLoading(false);
                                                                                                setMessage(true);
                                                                                                setMessageType('alert alert-danger');
                                                                                                setResponse(response);
                                                                                            }.bind(this),
                                                                                            success: function (res) {
                                                                                                setAllModules(res);
                                                                                                setModules(res);
                                                                                                setLoading(false);
                                                                                            }.bind(this)
                                                                                        })
                                                                                    }
                                                                                }} className='float-left btn-sm-block btn btn-sm btn-rounded btn-success' >Search</button>
                                                                            </div>
                                                                            <div className='col-md-3 col-sm-6' >
                                                                                {
                                                                                    (user.teacher || user.owner) ?
                                                                                        subscription.hasOwnProperty('id') ?
                                                                                            <button onClick={e => {
                                                                                                let exam = {};
                                                                                                exam['institution_id'] = user.institution.id
                                                                                                setSelectedExam(exam);
                                                                                            }} className='float-right btn-sm-block btn btn-sm btn-rounded btn-info' data-toggle="modal" data-target="#exampleModal">Add Exam</button>
                                                                                            : <Link to={`${ENV}subscriptions`} className=' float-right btn-sm-block btn btn-sm btn-rounded btn-info' >Add Exam</Link>
                                                                                        : <Link to={`${ENV}free/exams`} className='float-right btn-sm-block btn btn-sm btn-rounded btn-info' >Try Free Exams</Link>
                                                                                }

                                                                            </div>
                                                                        </div>
                                                                        {
                                                                            loading ? <Loading/> :

                                                                                (user.teacher || user.owner) ?
                                                                                    <BootstrapTable { ...props.baseProps }
                                                                                                    wrapperClasses="table-responsive"
                                                                                                    headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                                                    headerClasses="border-0"
                                                                                                    rowClasses="border-0"
                                                                                                    rowStyle={ { borderRadius: '18px' } }
                                                                                                    selectRow={{mode: "radio", clickToSelect: true, onSelect: selected.bind(this)}}
                                                                                                    pagination={ paginationFactory() }
                                                                                                    filter={ filterFactory() }/>
                                                                                    : <BootstrapTable { ...props.baseProps }
                                                                                                      wrapperClasses="table-responsive"
                                                                                                      headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                                                      headerClasses="border-0"
                                                                                                      rowClasses="border-0"
                                                                                                      rowStyle={ { borderRadius: '18px' } }
                                                                                                      pagination={ paginationFactory() }
                                                                                                      filter={ filterFactory() }/>
                                                                        }

                                                                    </React.Fragment>
                                                                )
                                                        }
                                                    </ToolkitProvider>
                                                </React.Fragment>

                                </div>
                            </div>
                        </React.Fragment>

                    }
                </div>
            </div>
            <EditExamModal exam={selectedExam} getModules={getModules}/>
        </React.Fragment>
    )
}
