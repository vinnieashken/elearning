import React, { useEffect, useState } from 'react';
import {API, DIR, ENV} from "../common/constants";
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
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');

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
                <Link to={`${ENV}exams/classes/${row.id}/subjects`} className="action-item mr-2" data-toggle="tooltip" title=""
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
            <div id="about" className="section-padding mt-5 profile">
                <div className="container mt-5">
                    {
                        loading ? <Loading/> :
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="section-title wow fadeInDown animated text-center"
                                            data-wow-delay="0.3s">Classes</h2>
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
                                                </div> : <ToolkitProvider
                                                    keyField="id"
                                                    data={classes}
                                                    columns={
                                                        [
                                                            {dataField: 'class', text: 'Class', sort: true},
                                                            {
                                                                dataField: 'created_at',
                                                                text: 'Select',
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
                                                                        <div className='col-md-12'>
                                                                            <SearchBar
                                                                                className='col-md-4 float-right mb-3' {...props.searchProps} />
                                                                        </div>
                                                                    </div>
                                                                    <BootstrapTable {...props.baseProps}
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
                </div>
            </div>
        </React.Fragment>
    )
}
