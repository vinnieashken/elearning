import React, { useEffect, useState } from 'react';

export default function (props) {
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
                            <div className="row">
                                <div className="col-4 text-center">
                                    <span className="h5 mb-0">86</span>
                                    <span className="d-block text-sm">Images</span>
                                </div>
                                <div className="col-4 text-center">
                                    <span className="h5 mb-0">8</span>
                                    <span className="d-block text-sm">Products</span>
                                </div>
                                <div className="col-4 text-center">
                                    <span className="h5 mb-0">1578</span>
                                    <span className="d-block text-sm">Followers</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <button type="button"
                                            className="btn btn-sm px-0 font-weight-bold btn-link text-primary btn-icon">
                                        Message
                                    </button>
                                </div>
                                <div className="col-6 text-right">
                                    <button type="button" className="btn btn-xs btn-secondary rounded-pill">Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
