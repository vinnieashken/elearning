import React, { useEffect, useState } from 'react';
import {API, ENV} from "../common/constants";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import moment from "moment";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
const { SearchBar } = Search;

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect((e) => {
            getSubscription();
    }, []);

    const getSubscription = () => {
        $.ajax({
            url: `${API}/payments/subscriptions/user/${props.user.id}`,
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
                setSubscriptions(res);
                setLoading(false);
            }.bind(this)
        })
    };

    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div
                        className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">My profile</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
                        <div className="actions actions-dark d-inline-block">
                            {/*<a href="#" className="action-item ml-md-4">*/}
                            {/*    <i className="fa fa-file-export mr-2" />Export*/}
                            {/*</a>*/}
                            <a href="#" className="action-item ml-3">
                                <i className="fa fa-cog mr-2" />Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-fluid">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <a href="#" className="avatar rounded-circle">
                                        {/*<img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className="" />*/}
                                    </a>
                                </div>
                                <div className="col ml-md-n2">
                                    <a href="#!" className="d-block h6 mb-0">{props.user.name}</a>
                                    <small className="d-block text-muted">{props.user.email}</small>
                                    <small className="d-block text-muted">{props.user.phone}</small>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn btn-xs btn-primary btn-icon rounded-pill">
                                        <span className="btn-inner--icon">
                                            <i className="far fa-edit" />
                                        </span>
                                        {/*<span className="btn-inner--text">Edit</span>*/}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                           <div>
                               {

                                   loading ?
                                       <div className="text-center mt-4">
                                           <ClipLoader color={'#cf2027'} />
                                       </div> :

                                       <div className="row">
                                           <div className="col-md-12">
                                               <ToolkitProvider
                                                   keyField="id"
                                                   data={ subscriptions }
                                                   columns={
                                                       [
                                                           {dataField: 'ordernumber',      text: 'Order',    sort: true},
                                                           {dataField: 'receipt',        text: 'Receipt',      sort: true},
                                                           {dataField: 'method',        text: 'Method',      sort: true},
                                                           {dataField: 'package',   text: 'Package',      sort: true},
                                                           {dataField: 'startdate',   text: 'Start Date',      sort: true},
                                                           {dataField: 'expiry_date',   text: 'Expiry Date',      sort: true},
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
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
