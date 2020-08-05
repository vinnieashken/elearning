import React, {useState, useEffect} from "react";
import {API, PUBLIC_URL} from "../../common/constants";
import {Helmet} from "react-helmet";
import Loading from "../../common/loading";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Link} from "react-router-dom";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [units, setUnits] = useState([]);
    const pathname = `${window.origin}${props.history.location.pathname}`;

    useEffect(e => {
        fetchUnits();
    }, [])

    const fetchUnits = () => {
        $.ajax({
            url: `${API}/lessons/units`,
            method: 'get',
            error: (xhr) => {
                let response = 'Sorry an error has occurred.';
                if (xhr.status !== 500 && xhr.hasOwnProperty('responseJSON'))
                    response = xhr.responseJSON['message'];
                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response)
            },
            success: data => {
                setUnits(data);
                setLoading(false);
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
                                        data-wow-delay="0.3s">Units</h2>
                                </div>

                            </div>
                            {
                                loading ? <Loading/> :
                                    <React.Fragment>
                                        {
                                            message &&
                                            <div className={messageType}>
                                                <div className='alert-message'>
                                                    {response}
                                                </div>
                                            </div>
                                        }
                                        {/*<div className='row'>*/}
                                        {/*    <div className='col-md-3'>*/}
                                        {/*        <select className='form-control form-control-sm' name='class' placeholder='Select a class'>*/}
                                        {/*            <option  />*/}
                                        {/*            <option value={6}>Class 6</option>*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*    <div className='col-md-3'>*/}
                                        {/*        <select className='form-control form-control-sm' name='class' placeholder='Select a Subject'>*/}
                                        {/*            <option  />*/}
                                        {/*            <option value={1}>Mathematics</option>*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*    <div className='col-md-6'>*/}
                                        {/*        <button className='btn btn-success btn-sm'>Filter</button>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className='row'>
                                            <div className='col-md-12'>


                                                {
                                                    <ToolkitProvider
                                                        keyField="id"
                                                        data={units.reverse()}
                                                        columns={
                                                            [
                                                                {dataField: 'id', text: '#', sort: true,
                                                                    formatter: (cell, row, rowIndex) => {
                                                                    return rowIndex + 1
                                                            }
                                                                },
                                                                {dataField: 'class', text: 'Class', sort: true},
                                                                {dataField: 'subject', text: 'Subject', sort: true},
                                                                {dataField: 'unit', text: 'Unit', sort: true},
                                                                {
                                                                    dataField: 'created_at',
                                                                    text: 'Action',
                                                                    sort: true,
                                                                    formatter: (cell, row) => {
                                                                        return (
                                                                            <div className='button-group'>
                                                                                <Link to={`/lessons/units/${row.id}/lessons/${sluggify(row.unit)}`} className='btn btn-sm btn-success mr-2'>Open Lesson</Link>
                                                                                <Link to={`/lessons/units/${row.id}/questions/${sluggify(row.unit)}`} className='btn btn-sm btn-success'>Open Questions</Link>
                                                                            </div>
                                                                        )
                                                                    }
                                                                },
                                                            ]
                                                        } search={true}>
                                                        {
                                                            props =>
                                                                (
                                                                    <React.Fragment>
                                                                        <div className='row  mb-3'>
                                                                            <div className='col-md-12'>
                                                                                {/*<SearchBar*/}
                                                                                {/*    className='col-md-4 float-right mb-3' {...props.searchProps} />*/}
                                                                            </div>
                                                                        </div>
                                                                        <BootstrapTable {...props.baseProps}
                                                                                        headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                                        headerClasses="border-0" rowClasses="border-0"
                                                                                        rowStyle={ { borderRadius: '18px' } }
                                                                                        wrapperClasses="table-responsive"/>

                                                                    </React.Fragment>
                                                                )
                                                        }
                                                    </ToolkitProvider>
                                                }
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                                </React.Fragment>

                            }
                        </div>
                        </div>
                        {/*<div className='container'>*/}
                        {/*    <div className="card" >*/}
                        {/*        <div className='card-body'>*/}
                        {/*            <h4 className='card-title'>Units</h4>*/}
                        {/*            <table className='table table-hover'>*/}
                        {/*                <thead>*/}
                        {/*                <tr>*/}
                        {/*                    <th>#</th>*/}
                        {/*                    <th>Class</th>*/}
                        {/*                    <th>Subject</th>*/}
                        {/*                    <th>Unit</th>*/}
                        {/*                    <th>Action</th>*/}
                        {/*                </tr>*/}
                        {/*                </thead>*/}
                        {/*                <tbody>*/}
                        {/*                {*/}
                        {/*                    units.map(unit => {*/}
                        {/*                        return (*/}
                        {/*                            <tr key={unit.id}>*/}
                        {/*                                <td>{unit.id}</td>*/}
                        {/*                                <td>{unit.class}</td>*/}
                        {/*                                <td>{unit.subject}</td>*/}
                        {/*                                <td>{unit.unit}</td>*/}
                        {/*                                <td>*/}
                        {/*                                    <button className='btn btn-outline-secondary btn-sm  mr-2' onClick={e => {*/}
                        {/*                                        props.history.push(`/lessons/units/${unit.id}/lessons`);*/}
                        {/*                                    }}>Start Lesson</button>*/}
                        {/*                                    <button className='btn btn-outline-secondary btn-sm' onClick={e => {*/}
                        {/*                                        props.history.push(`/units/${unit.id}/questions`);*/}
                        {/*                                    }}>View Question</button>*/}
                        {/*                                </td>*/}
                        {/*                            </tr>*/}
                        {/*                        )*/}
                        {/*                    })*/}
                        {/*                }*/}
                        {/*                </tbody>*/}
                        {/*            </table>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        </React.Fragment>
                        )
                        }
