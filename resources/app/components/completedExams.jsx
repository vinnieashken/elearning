import React, { useEffect, useState } from 'react';

export default function (props) {
    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div
                        className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Completed Exams</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
                        <div className="actions actions-dark d-inline-block">
                            <a href="#" className="action-item ml-md-4">
                                <i className="fa fa-file-export mr-2" />Export
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
                                    <small className="d-block text-muted">{props.user.school}</small>
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

                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
