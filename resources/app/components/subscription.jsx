import React, { useEffect, useState } from 'react';
import {PUBLIC_URL} from "../common/constants";

export default function (props) {
    return(
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="page-title">
                        <div className="row justify-content-between align-items-center">
                            <div
                                className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                                <div className="d-inline-block">
                                    <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Buy Package</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Phone Number (M-Pesa)
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Project privacy
                                    </label>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-1" />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-1">Daily (100/=)</label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-2" defaultChecked={false} />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-2">Weekly (300/=)</label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="custom-control custom-checkbox">
                                                <input type="radio" className="custom-control-input"
                                                       name="project-privacy" id="radio-project-3" defaultChecked={false} />
                                                <label
                                                    className="custom-control-label form-control-label text-muted"
                                                    htmlFor="radio-project-3">Monthly (500/=)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <img className='mt-5 mb-5' style={{display: 'block', margin:'auto'}} src={`${PUBLIC_URL}/static/app/images/lipanampesa.jpg`} alt='Lipa Na M-Pesa'/>
                                    </div>

                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-sm btn-primary rounded-pill">Pay </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
