import React, { useEffect, useState } from 'react';
import {DIR, ENV, PUBLIC_URL} from "../common/constants";
import {Link, Switch, Route} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";

const Subscription = Loadable({
    loader: () => import('./subscription'),
    loading: Loading
});

export default function (props) {
    const [user, setUser] = useState({name: "Dennis Karimi"});

    const toggleSidebar = (e) => {
        $('.sidebar').toggleClass('toggled');
    };

    return (
        <React.Fragment>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                    <div className="sidebar-content ">
                        <Link className="sidebar-brand" to={`${DIR}`}>
                            {/*<img src={`${PUBLIC_URL}/style/images/logo.png`} alt="Standard E-Learning" className="img-fluid " width="100%"/>*/}
                            <h2>E-Learning</h2>
                        </Link>

                        <ul className="sidebar-nav">
                            <li className="sidebar-item">
                                <a href="#kcpe" data-toggle="collapse" className="sidebar-link collapsed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-sliders align-middle">
                                        <line x1="4" y1="21" x2="4" y2="14"/>
                                        <line x1="4" y1="10" x2="4" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12" y2="3" />
                                        <line x1="20" y1="21" x2="20" y2="16" />
                                        <line x1="20" y1="12" x2="20" y2="3" />
                                        <line x1="1" y1="14" x2="7" y2="14" />
                                        <line x1="9" y1="8" x2="15" y2="8" />
                                        <line x1="17" y1="16" x2="23" y2="16" />
                                    </svg>
                                    <span className="align-middle">KCPE</span>
                                    {/*<span className="sidebar-badge badge badge-primary">5</span>*/}
                                </a>
                                <ul id="kcpe" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link" to={`${DIR}/exams`}>Available Tests</Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link" to={`${DIR}/exams`}>Completed Tests</Link>
                                    </li>
                                </ul>
                                <li className='sidebar-item'>
                                    <Link className="sidebar-link" to={`${DIR}/subscription`}>Subscription</Link>
                                </li>
                            </li>

                        </ul>

                        <div className="sidebar-bottom d-none d-lg-block">
                            <div className="media">
                                {/*<img className="rounded-circle mr-3" src="img/avatars/avatar.jpg" alt={user.name} width="40" height="40" />*/}
                                <div className="media-body">
                                    <h5 className="mb-1">{user.name}</h5>
                                    <div>
                                        <i className="fas fa-circle text-success" /> Online
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light bg-white">
                        <a className="sidebar-toggle d-flex mr-2" onClick={toggleSidebar}>
                            <i className="hamburger align-self-center" />
                        </a>


                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                                       data-toggle="dropdown">
                                        <div className="position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-message-circle align-middle">
                                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                            </svg>
                                            <span className="indicator">0</span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                                         aria-labelledby="messagesDropdown">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">
                                                0 New Messages
                                            </div>
                                        </div>
                                        <div className="list-group">
                                            {/*<a href="#" className="list-group-item">*/}
                                            {/*    <div className="row no-gutters align-items-center">*/}
                                            {/*        <div className="col-2">*/}
                                            {/*            <img src="img/avatars/avatar-5.jpg"*/}
                                            {/*                 className="avatar img-fluid rounded-circle"*/}
                                            {/*                 alt="Ashley Briggs" />*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-10 pl-2">*/}
                                            {/*            <div className="text-dark">Ashley Briggs</div>*/}
                                            {/*            <div className="text-muted small mt-1">Nam pretium turpis et*/}
                                            {/*                arcu. Duis arcu tortor.*/}
                                            {/*            </div>*/}
                                            {/*            <div className="text-muted small mt-1">15m ago</div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                        </div>
                                        {/*<div className="dropdown-menu-footer">*/}
                                        {/*    <a href="#" className="text-muted">Show all messages</a>*/}
                                        {/*</div>*/}
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                       data-toggle="dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-settings align-middle">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                    </a>

                                    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                       data-toggle="dropdown">
                                        {/*<img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood" /> */}
                                        <span className="text-dark">{user.name}</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to={`${DIR}/profile`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-user align-middle mr-1">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Profile</Link>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Help</a>
                                        <Link className="dropdown-item" to={`${ENV}login`}>Sign out</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="content">
                        <div className="container-fluid p-0">
                            <Switch>
                                <Route exact={true} path={`${props.match.url}/subscription`} render={(props) => <Subscription  {...props} user={user} />}/>
                            </Switch>
                        </div>
                    </main>

                </div>
            </div>
        </React.Fragment>
    )
}
