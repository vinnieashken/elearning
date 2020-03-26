import React, { useEffect, useState } from 'react';
import {API, DIR, PUBLIC_URL} from "../common/constants";
import {ClipLoader} from "react-spinners";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
const { SearchBar } = Search;
import moment from "moment";
import {Link} from "react-router-dom";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses();
    }, []);

    const getSubjects = () => {
        $.ajax({
            url: `${API}/subjects/${props.match.params.hasOwnProperty('class') ? `class/${props.match.params.class}` : 'list'}`,
            // url: `${API}/subjects/class/{class_id}`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
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
    const getClasses = () => {
        $.ajax({
            url: `${API}/classes/list`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setClasses(res);
                getSubjects();
            }.bind(this)
        })
    };

    const dateFormatter= (cell, row) => {
        return moment(cell, 'Y-MM-DD HH:mm:ss').fromNow()
    };

    const formatClassName = (cell, row) => {
        let class_ = classes.filter((el) => {
            return parseInt(el.id) === parseInt(row.class_id);
        });
        return class_.length > 0 ? class_[0]['class'] : '';
    };

    const actionButton = (cell, row) => {
        return (
            <div className="actions ml-3">
                <Link to={`${DIR}/exams/subjects/${row.id}/modules`} className="action-item mr-2" data-toggle="tooltip" title=""
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
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div
                        className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Subjects</h5>
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
                                        data={ subjects }
                                        columns={
                                            [
                                                {dataField: 'subject',      text: 'Subject',    sort: true},
                                                {dataField: 'class',        text: 'Class',      sort: true, formatter: formatClassName},
                                                {dataField: 'created_at',   text: 'Added',      sort: true, formatter: dateFormatter},
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
                                                        <BootstrapTable { ...props.baseProps } wrapperClasses="table-responsive"/>

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
