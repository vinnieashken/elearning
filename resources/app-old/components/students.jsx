import React, { useEffect, useState } from 'react';
import {API, DIR, ENV} from "../common/constants";
import Loading from "../common/loading";
import {Link} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
import BootstrapTable from "react-bootstrap-table-next";
import moment from "moment";
import {Helmet} from "react-helmet";
import EditStudentModal from './editStudentModal';

export default function (props) {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [student, setStudent] = useState({});
    const [user, setUser] = useState(props.user);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = () => {
        setLoading(true)
        $.ajax({
            url: `${API}/institution/students/list/${props.user.institution.id}`,
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
                setStudents(res);
                setLoading(false);
            }.bind(this)
        })
    };

    const dateFormatter= (cell, row) => {
        return moment(cell, 'Y-MM-DD HH:mm:ss').fromNow()
    };

    const selected = (row, isSelected) =>{
        setStudent(row);
    };

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <button className='btn btn-sm btn-rounded btn-success' data-toggle="modal" data-target="#studentModal">Edit Student</button>
                {/*<a href="#" className="action-item mr-2" data-toggle="tooltip" title="" data-original-title="Edit">*/}
                {/*    <i className="fa fa-pencil-alt"></i>*/}
                {/*</a>*/}
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
                    <meta property="twitter:title" content="Tutor-Soma Tu : Classes : The Standard" />
                    <meta property="twitter:description" content="Tutor-Soma Tu - Classes " />
                    <meta property="twitter:url" content={pathname} />
                    <meta property="og:title" content="Tutor-Soma Tu : Classes : The Standard" />
                    <meta property="og:description" content="Tutor-Soma Tu - Classes " />
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
                                        data-wow-delay="0.3s">{`${props.user.institution.name}`.toUpperCase()} STUDENTS</h2>
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
                                                </div> : <ToolkitProvider
                                                    keyField="id"
                                                    data={students.filter(el => {
                                                        return el.institution_id === user.institution_id
                                                    })}
                                                    columns={
                                                        [
                                                            {dataField: 'adm_no', text: 'Adm. No.', sort: true},
                                                            {dataField: 'login_code', text: 'Login Code', sort: true},
                                                            {dataField: 'name', text: 'Name', sort: true},
                                                            {dataField: 'avg', text: 'Average', sort: true},
                                                            {
                                                                dataField: 'created_at',
                                                                text: 'Actions',
                                                                sort: true,
                                                                formatter: actionButton
                                                            },
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
                                                                            <button className='mb-3 float-right btn btn-sm btn-rounded btn-success' data-toggle="modal" data-target="#studentModal" onClick={setStudent.bind({})}>Add Student</button>
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
            <EditStudentModal student={student} user={props.user} getStudents={getStudents} />
        </React.Fragment>
    )
}