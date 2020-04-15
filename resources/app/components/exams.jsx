import React, { useEffect, useState } from 'react';
import {API, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import Loading from "../common/loading";
const { SearchBar } = Search;
import { Helmet } from 'react-helmet';
import EditExam from "./editExam";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [modules, setModules] = useState([]);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [selectedExam, setSelectedExam] = useState({})
    const [classes, setClasses] = useState([])
    const [subjects, setSubjects] = useState([])
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        setLoading(true);
        getModules();
    }, [props.match.params.subject]);

    const getModules = () => {
        $.ajax({
            url: `${API}/modules/${props.match.params.hasOwnProperty('subject') ? `subject/${props.match.params.subject}` : 'list'}?userid=${props.user.id}`,
            // url: `${API}/subjects/class/{class_id}`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setModules(res);
                setLoading(false);
                if (classes.length <= 0 || subjects.length <= 0) {
                    getClasses();
                    getSubjects();
                }
            }.bind(this)
        })
    };

    const getClasses = () => {
        $.ajax({
            url: `${API}/classes/list`,
            method: 'GET',
            error: function (xhr, status, error) {

            }.bind(this),
            success: function (res) {
                setClasses(res);
            }.bind(this)
        })
    };

    const getSubjects = () => {
        $.ajax({
            url: `${API}/subjects/${props.match.params.hasOwnProperty('class') ? `class/${props.match.params.class}` : 'list'}`,
            method: 'GET',
            error: function (xhr, status, error) {

            }.bind(this),
            success: function (res) {
                setSubjects(res);
            }.bind(this)
        })
    };

    const selected = (row, isSelected) =>{
        console.log(row);
        setSelectedExam(row);
    };

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <Link to={`${ENV}exams/exam/${row.id}`} className={`btn btn-sm btn-rounded ${row.done ? `btn-success-filled` : `btn-outline-success`}`}>
                    {row.done ? `Revise Paper` : `Take Test`}
                </Link>
                {/*<button className='float-right btn btn-sm btn-success btn-rounded' data-toggle="modal" data-target="#exampleModal">*/}
                {/*    Edit*/}
                {/*</button>*/}

                {/*<a href="#" className="action-item text-danger mr-2" data-toggle="tooltip" title=""*/}
                {/*   data-original-title="Move to trash">*/}
                {/*    <i className="fa fa-trash"></i>*/}
                {/*</a>*/}
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
            <div id="about" className="section-padding mt-5 profile">
                <div className="container mt-5">
                    {
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="section-title wow fadeInDown animated text-center mt-5"
                                        data-wow-delay="0.3s">Examination papers</h2>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    {
                                        loading ? <Loading/> :
                                            message ?
                                                <div className="text-center mt-2">
                                                    <div className={messageType} role="alert">
                                                        <div className="alert-message">
                                                            {response}
                                                        </div>
                                                    </div>
                                                </div> :
                                                <ToolkitProvider
                                                    keyField="id"
                                                    data={ modules }
                                                    columns={
                                                        [
                                                            {dataField: 'id',      text: 'ID',    sort: true },
                                                            {dataField: 'module',      text: 'Exam',    sort: true, style: { textAlign: 'left' }},
                                                            {dataField: 'class',        text: 'Class',      sort: true},
                                                            {dataField: 'subject',        text: 'Subject',      sort: true},
                                                            {dataField: 'created_at',   text: 'Select',      sort: true, formatter: actionButton},
                                                        ]
                                                    } search={true}>
                                                    {
                                                        props =>
                                                            (
                                                                <React.Fragment>
                                                                    <div className='row  mb-3'>
                                                                        <div className='col-md-4'>
                                                                            <SearchBar className='float-left mb-3 form-control-sm' { ...props.searchProps } />
                                                                        </div>
                                                                        <div className='col-md-8 ' >
                                                                            {/*<button className='mb-3 float-right btn btn-sm btn-rounded btn-success' data-toggle="modal" data-target="#exampleModal">Add Exam</button>*/}
                                                                        </div>
                                                                    </div>
                                                                    <BootstrapTable { ...props.baseProps } wrapperClasses="table-responsive" selectRow={{mode: "radio", clickToSelect: true, onSelect: selected.bind(this)}}/>

                                                                </React.Fragment>
                                                            )
                                                    }
                                                </ToolkitProvider>
                                    }
                                </div>
                            </div>
                        </React.Fragment>

                    }
                </div>
            </div>
            <EditExam exam={selectedExam} classes={classes} subjects={subjects} />
        </React.Fragment>
    )
}
