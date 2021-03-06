import React, { useEffect, useState } from 'react';
import {API, ENV, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
const { SearchBar } = Search;
import moment from "moment";
import {Link} from "react-router-dom";
import Loading from "../common/loading";
import {Helmet} from "react-helmet";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        setLoading(true);
        getSubjects();
    }, [props.match.params.class]);


    const getSubjects = () => {
        $.ajax({
            url: `${API}/subjects/${props.match.params.hasOwnProperty('class') ? `class/${props.match.params.class}` : 'list'}`,
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
                setSubjects(res);
                setLoading(false);
            }.bind(this)
        })
    };

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <Link to={{pathname: `${ENV}exams/subjects/${row.subject}/modules`}} className="btn btn-sm btn-rounded btn-success-filled" >
                    Select Exam
                </Link>
            </div>
        )
    };

    return (
        <React.Fragment>
            <Helmet>
                <link rel="canonical" href={pathname} />
                <meta name="keywords" content="Tutorsoma Tu, Kenya, KCSE, KCPE, elearning, past revision papers, online courses, Education in Kenya, Maths, Science, Technology, English, Kiswahili" />
                <meta name="author" content="Standard Group" />
                <meta name="description" content="Tutorsoma Tu is an e-learning platform targeting students in the Kenya education system. Learn Maths, English, Kiswahili, Social Studies, Science and many more" />
                <meta property="twitter:title" content="Tutor-Soma Tu : Subjects : The Standard" />
                <meta property="twitter:description" content="Tutor-Soma Tu - Subjects " />
                <meta property="twitter:url" content={pathname} />
                <meta property="og:title" content="Tutor-Soma Tu : Subjects : The Standard" />
                <meta property="og:description" content="Tutor-Soma Tu - Subjects " />
                <meta property="og:url" content={pathname} />
            </Helmet>
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
                                        data-wow-delay="0.3s">Subjects</h2>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    {
                                        loading ? <Loading/> :
                                            message ?
                                                <div className="text-center mt-2">
                                                    <div className={messageType} role="alert">
                                                        <div className="alert-message">
                                                            {response}
                                                        </div>
                                                    </div>
                                                </div> : <ToolkitProvider
                                                    keyField="id"
                                                    data={ subjects }
                                                    columns={
                                                        [
                                                            {dataField: 'subject',      text: 'Subject',    sort: true},
                                                            {dataField: 'class',        text: 'Class',      sort: true},
                                                            {dataField: 'id',   text: 'Select',      sort: true, formatter: actionButton},
                                                        ]
                                                    } search={true}>
                                                    {
                                                        props =>
                                                            (
                                                                <React.Fragment>
                                                                    <div className='row  mb-3'>
                                                                        <div className='col-md-12'>
                                                                            <SearchBar className='col-md-4 form-control-sm float-right mb-3' { ...props.searchProps } />
                                                                        </div>
                                                                    </div>
                                                                    <BootstrapTable { ...props.baseProps }
                                                                                    headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                                    headerClasses="border-0" rowClasses="border-0"
                                                                                    rowStyle={ { borderRadius: '18px' } }
                                                                                    wrapperClasses="table-responsive" />

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
