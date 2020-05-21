import React, { useEffect, useState } from 'react';
import {API, DIR, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
const { SearchBar } = Search;

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        getModules();
    }, []);

    const getModules = () => {
        $.ajax({
            url: `${API}/modules/user/${props.user.id}`,
            // url: `${API}/subjects/class/{class_id}`,
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
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
                setModules(res);
                setLoading(false);
            }.bind(this)
        })
    };

    const dateFormatter= (cell, row) => {
        return moment(cell, 'Y-MM-DD HH:mm:ss').fromNow()
    };

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <Link to={`${DIR}/exams/exam/${row.id}`} className="action-item mr-2" data-toggle="tooltip" title=""
                      data-original-title="Take Exam">
                    <i className="fa fa-external-link-alt" />
                </Link>
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
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div
                        className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Completed Exams</h5>
                        </div>
                        {/*<div className="align-items-center ml-4 d-inline-flex">*/}
                        {/*    <span className="h4 text-info mb-0 mr-2">9</span>*/}
                        {/*    <span className="text-sm opacity-7 text-white">New products</span>*/}
                        {/*</div>*/}
                        {/*<a href="card-listing.html" className="text-sm text-info d-none d-lg-inline-block ml-4">See*/}
                        {/*    cards</a>*/}
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className="mt-3">
                    {

                        loading ?
                            <div className="text-center mt-4">
                                <ClipLoader color={'#cf2027'} />
                            </div> :

                            <div className="row">
                                <div className="col-md-12">
                                    <ToolkitProvider
                                        keyField="id"
                                        data={ modules }
                                        columns={
                                            [
                                                {dataField: 'module',      text: 'Exam',    sort: true},
                                                {dataField: 'class',        text: 'Class',      sort: true},
                                                {dataField: 'subject',        text: 'Subject',      sort: true},
                                                {dataField: 'percentage',        text: 'Score(%)',      sort: true},

                                                {dataField: 'created_at',   text: 'Select',      sort: true, formatter: actionButton},
                                            ]
                                        } search={true}>
                                        {
                                            props =>
                                                (
                                                    <React.Fragment>
                                                        <div className='row  mb-3'>
                                                            <div className='col-md-12'>
                                                                <SearchBar className='col-md-4 float-right mb-3' { ...props.searchProps } />
                                                            </div>
                                                        </div>
                                                        <BootstrapTable { ...props.baseProps }
                                                                        headerWrapperClasses ="pt-0 shadowtable bg-danger"
                                                                        headerClasses="border-0" rowClasses="border-0"
                                                                        rowStyle={ { borderRadius: '18px' } }
                                                                        wrapperClasses="table-responsive"/>

                                                    </React.Fragment>
                                                )
                                        }
                                    </ToolkitProvider>
                                </div>
                            </div>

                    }
                </div>
            </div>
        </React.Fragment>
    )
}
