import React , {useState, useEffect} from 'react';
import {Link, Switch, Route} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import LoadingWhite from "../common/loadingWhite";
import {DIR, ENV, PUBLIC_URL} from "../common/constants";

const Home = Loadable({
    loader: () => import('./home'),
    loading: LoadingWhite
});

const Profile = Loadable({
    loader: () => import('./profile'),
    loading: LoadingWhite
});

const Exams = Loadable({
    loader: () => import('./exams'),
    loading: LoadingWhite
});

const Exam = Loadable({
    loader: () => import('./exam'),
    loading: LoadingWhite
});

const CompletedExams = Loadable({
    loader: () => import('./completedExams'),
    loading: LoadingWhite
});

const Classes = Loadable({
    loader: () => import('./classes'),
    loading: LoadingWhite
});

const Subjects = Loadable({
    loader: () => import('./subjects'),
    loading: LoadingWhite
});

const Modules = Loadable({
    loader: () => import('./modules'),
    loading: LoadingWhite
});

const Subscription = Loadable({
    loader: () => import('./subscription'),
    loading: LoadingWhite
});

export default function (props) {

    const [user, setUser] = useState(localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {});
    const [sideBar, setSideBar] = useState(true);

    useEffect((e) => {
        if (!user.hasOwnProperty('name'))
            props.history.push({
                pathname: `${ENV}login`,
            });
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            setSideBar(false)
        }
    }, []);
    const toggleSideBar = (e) => {
        setSideBar(!sideBar)
    };

    const isActive = (path) => {
        var exist = props.location.pathname.slice(-path.length) === path;
        return exist ? 'active' : '';
    };

    return (
        <div data-gr-c-s-loaded="true" className={`application application-offset ${sideBar ? 'sidenav-pinned' : ''} ready`}>

            <div className="container-fluid container-application">
                <div className={`sidenav ${sideBar ? 'show' : ''}`} id="sidenav-main">
                    <div className="sidenav-header d-flex align-items-center">
                        <a className="navbar-brand" href={`${PUBLIC_URL}`}>
                            <img src={`${PUBLIC_URL}/assets/img/elearning.png?20200326114313`} className="navbar-brand-img" alt="..." />
                        </a>
                        <div className="ml-auto">
                            <div className="sidenav-toggler sidenav-toggler-dark d-md-none active"
                                 data-action="sidenav-unpin" data-target="#sidenav-main">
                                <div className="sidenav-toggler-inner" onClick={toggleSideBar}>
                                    <i className="sidenav-toggler-line bg-white" />
                                    <i className="sidenav-toggler-line bg-white" />
                                    <i className="sidenav-toggler-line bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="sidenav-user d-flex flex-column align-items-center justify-content-between text-center">
                        <div>
                            <a href="#" className="avatar rounded-circle avatar-xl">
                                {/*<img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg" className="" />*/}
                            </a>
                            <div className="mt-4">
                                <h5 className="mb-0 text-white">{user.name}</h5>
                                <span className="d-block text-sm text-white opacity-8 mb-3">{user.email}</span>
                                <Link to={`${DIR}/subscribe`}
                                   className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3">
                                    <span className="btn-inner--icon"><i className="fa fa-coins" /></span>
                                    <span className="btn-inner--text">$2.300</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="nav-application clearfix">
                        <Link to={`${DIR}`} className={`btn btn-square text-sm ${isActive('/app')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-home fa-2x" />
                            </span>
                            <span className="btn-inner--icon d-block pt-2">Home</span>
                        </Link>
                        <Link to={`${DIR}/exams/classes`} className={`btn btn-square text-sm ${isActive('/exams/classes')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-project-diagram fa-2x" />
                            </span>
                            <span className="btn-inner--icon d-block pt-2">Take Test</span>
                        </Link>

                        <Link to={`${DIR}/exams/subjects`} className={`btn btn-square text-sm ${isActive('/exams/subjects')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-columns fa-2x" />
                            </span>
                            <span className="btn-inner--icon d-block pt-2">Subjects</span>
                        </Link>
                        <Link to={`${DIR}/exams/modules`} className={`btn btn-square text-sm ${isActive('/exams/modules')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-receipt fa-2x" />
                            </span>
                            <span className="btn-inner--icon d-block pt-2">Modules</span>
                        </Link>

                        <Link to={`${DIR}/exams/done`} className={`btn btn-square text-sm ${isActive('/exams/done')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-tasks fa-2x" />
                            </span>
                            <span className="btn-inner--icon d-block pt-2">Completed Exams</span>
                        </Link>
                        <Link to={`${DIR}/profile`} className={`btn btn-square text-sm ${isActive('/profile')}`}>
                            <span className="btn-inner--icon d-block">
                                <i className="fa fa-user-ninja fa-2x" /></span>
                            <span className="btn-inner--icon d-block pt-2">Profile</span>
                        </Link>
                    </div>
                    {/*<div className="card bg-gradient-warning">*/}
                    {/*    <div className="card-body">*/}
                    {/*        <h5 className="text-white">Hello, Friend!</h5>*/}
                    {/*        <p className="text-white mb-4">*/}
                    {/*            Why not start using Purpose Application UI Kit and create something amazing today?*/}
                    {/*        </p>*/}
                    {/*        <a href="https://themes.getbootstrap.com/product/purpose-application-ui-kit/"*/}
                    {/*           className="btn btn-sm btn-block btn-white rounded-pill" target="_blank">Get started</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="main-content position-relative">
                    <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border"
                         id="navbar-main">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse"
                                    aria-expanded="false" aria-label="Toggle navigation"  onClick={toggleSideBar}>
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
                                <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link nav-link-icon sidenav-toggler active"
                                           data-action="sidenav-pin" data-target="#sidenav-main" onClick={toggleSideBar}>
                                            <i className="fa fa-bars" />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown dropdown-animate">
                                        <a className="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <div className="media media-pill align-items-center">
                                                <span className="avatar rounded-circle">
                                                    {/*<img alt="Image placeholder" src="../assets/img/theme/light/team-4-800x800.jpg" />*/}
                                                </span>
                                                <div className="ml-2 d-none d-lg-block">
                                                    <span className="mb-0 text-sm  font-weight-bold">{user.name}</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 className="dropdown-header px-0">Hi, {user.name}!</h6>
                                            <Link to={`${DIR}/profile`} className="dropdown-item">
                                                <i className="fa fa-user" />
                                                <span>My profile</span>
                                            </Link>
                                            <Link to={`${DIR}`} className="dropdown-item">
                                                <i className="fa fa-cog" />
                                                <span>Settings</span>
                                            </Link>
                                            <Link to={`${DIR}`} className="dropdown-item">
                                                <i className="fa fa-credit-card" />
                                                <span>Billing</span>
                                            </Link>
                                            <Link to={`${DIR}`} href="#!" className="dropdown-item">
                                                <i className="fa fa-tasks" />
                                                <span>Activity</span>
                                            </Link>
                                            <div className="dropdown-divider" />
                                            <Link to={`${ENV}login`} className="dropdown-item">
                                                <i className="fa fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="page-content">
                        <Switch>
                            <Route  exact={true} path={props.match.url} render={(props) => <Home {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/profile`} render={(props) => <Profile {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams`} render={(props) => <Exams {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/classes`} render={(props) => <Classes {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/subjects`} render={(props) => <Subjects {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/classes/:class/subjects`} render={(props) => <Subjects {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/modules`} render={(props) => <Modules {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/subjects/:subject/modules`} render={(props) => <Modules {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/done`} render={(props) => <CompletedExams {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/exams/exam/:module`} render={(props) => <Exam {...props} user={user}/>}/>
                            <Route  exact={true} path={`${props.match.url}/subscribe`} render={(props) => <Subscription {...props} user={user}/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}
