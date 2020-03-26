import React, { useEffect, useState } from 'react';
import {API, DIR, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {Link} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
import BootstrapTable from "react-bootstrap-table-next";
import moment from "moment";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses();
    }, []);

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
                <Link to={`${DIR}/exams/classes/${row.id}/subjects`} className="action-item mr-2" data-toggle="tooltip" title=""
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
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Classes</h5>
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
                                        data={ classes }
                                        columns={
                                            [
                                                {dataField: 'class',      text: 'Class',    sort: true},
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
