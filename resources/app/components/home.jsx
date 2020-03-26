import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {DIR} from "../common/constants";

export default function (props) {

    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5 className="h3 font-weight-400 mb-0 text-white">Moning, {props.user.name}!</h5>
                        <span className="text-sm text-white opacity-8">Have a nice day!</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header actions-toolbar border-0">
                    <div className="row ">
                        <div className="col-md-12">
                            <h4 className="d-inline-block mb-0 text-center">This content is available exclusively to Standard E-Learning members.</h4>
                        </div>
                    </div>
                </div>
                <div className="py-4 row">
                    <div className="mb-3 mb-md-0 col-sm-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Daily</h5><span className="display-4">KES 100</span></div>
                                {/*<h6>Includes:</h6>*/}
                                {/*<ul className="list-unstyled">*/}
                                {/*    <li className="mb-2">1 users</li>*/}
                                {/*    <li className="mb-2">5 projects</li>*/}
                                {/*    <li className="mb-2">5 GB storage</li>*/}
                                {/*</ul>*/}
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mb-md-0 col-sm-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Weekly</h5><span
                                    className="display-4">KES 300</span><span>/week</span></div>
                                {/*<h6>Includes:</h6>*/}
                                {/*<ul className="list-unstyled">*/}
                                {/*    <li className="mb-2">5 users</li>*/}
                                {/*    <li className="mb-2">50 projects</li>*/}
                                {/*    <li className="mb-2">50 GB storage</li>*/}
                                {/*    <li className="mb-2">Security policy</li>*/}
                                {/*    <li className="mb-2">Weekly backups</li>*/}
                                {/*</ul>*/}
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mb-md-0 col-sm-4">
                        <div className="text-center h-100 card">
                            <div className="d-flex flex-column card-body">
                                <div className="mb-4"><h5>Monthly</h5><span
                                    className="display-4">KES 500</span><span>/mo</span></div>
                                {/*<h6>Includes:</h6>*/}
                                {/*<ul className="list-unstyled">*/}
                                {/*    <li className="mb-2">Unlimited users</li>*/}
                                {/*    <li className="mb-2">Unlimited projects</li>*/}
                                {/*    <li className="mb-2">250 GB storage</li>*/}
                                {/*    <li className="mb-2">Priority support</li>*/}
                                {/*    <li className="mb-2">Security policy</li>*/}
                                {/*    <li className="mb-2">Daily backups</li>*/}
                                {/*    <li className="mb-2">Custom CSS</li>*/}
                                {/*</ul>*/}
                                <div className="mt-auto">
                                    <Link to={`${DIR}/subscribe`} className="btn btn-outline-primary btn-lg">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
