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
import EditExamModal from "./editExamModal";
import {useSelector} from "react-redux";

export default function (props) {
    const oldState = props.history.location.state;
 const exam = oldState.hasOwnProperty('exam') ? oldState.exam : {}
    const [loading, setLoading] = useState(true);
    const [modules, setModules] = useState([]);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [selectedExam, setSelectedExam] = useState({})
    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])
    const [user, setUser] = useState(props.user)
    const subscription = useSelector(state => state.subscription);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        setLoading(true);
        setUser(props.user)
        getStudents();
    }, [props.match.params.exam]);

    const getStudents = () => {
        $.ajax({
            url: `${API}/modules/users/${props.match.params.exam}`,
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
                setStudents(res);
                setLoading(false);
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

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <Link to={{
                    pathname: `${ENV}exams/exam/${exam.id}`,
                    state: {
                        student: row
                    }
                }} className='btn btn-sm btn-rounded btn-outline-success'>
                    Performance <i className="fa fa-graduation-cap" />
                </Link>
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
                                    <h2 className="section-title wow fadeInDown animated text-center mt-5"
                                        data-wow-delay="0.3s">{`${exam.module} Performance`} </h2>
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
                                                    data={ students.filter(el => {
                                                        return (el.institution_id === null || parseInt(el.institution_id) === 2 || parseInt(props.user.institution_id) ===  parseInt(el.institution_id))
                                                    }) }
                                                    columns={
                                                        [
                                                            {dataField: 'adm_no',      text: 'Admission Number',    sort: true },
                                                            {dataField: 'name',      text: 'Student Name',    sort: true, style: { textAlign: 'left' }},
                                                            {dataField: 'score',      text: 'Score',    sort: true, style: { textAlign: 'left' }},
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
                                                                    </div>
                                                                    <BootstrapTable { ...props.baseProps }
                                                                                    headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                                    headerClasses="border-0" rowClasses="border-0"
                                                                                    rowStyle={ { borderRadius: '18px' } }
                                                                                    wrapperClasses="table-responsive"
                                                                                    selectRow={{mode: "radio", clickToSelect: true, onSelect: selected.bind(this)}}/>

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
        </React.Fragment>
    )
}
