import React , {useState, useEffect} from 'react';
import {Link, Switch, Route} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import LoadingWhite from "../common/loadingWhite";
import {API, DIR, ENV, APPNAME, PUBLIC_URL, ISPRODUCTION} from "../common/constants";
import { useSelector } from 'react-redux'
import { fetchSubscription, fetchSubjects } from "../common/actions";
import { useDispatch } from "react-redux";

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading
});

const Register = Loadable({
    loader: () => import('./register'),
    loading: Loading
});

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

const Subscriptions = Loadable({
    loader: () => import('./subscriptions'),
    loading: LoadingWhite
});

const Payment = Loadable({
    loader: () => import('./payment'),
    loading: LoadingWhite
});

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [user, setUser] = useState(localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {});
    const [classes, setClasses] = useState([]);
    const subscription = useSelector(state => state.subscription);
    const subjects = useSelector(state => state.subjects);

    const dispatch = useDispatch();

    useEffect((e) => {
        if (user.hasOwnProperty('name') && props.location.pathname !== `${ENV}signin` && props.location.pathname !== `${ENV}signup` ) {
            dispatch(fetchSubscription(user));
        }
        dispatch(fetchSubjects());
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

    const toggleSideBar = (e) => {
        const ele = $('.sidenav');
        ele.toggleClass('toggled');
    };

    return (
        <React.Fragment>
            {
                <React.Fragment>
                    <header id="header-wrap">
                        <nav className="navbar navbar-expand-md bg-white fixed-top scrolling-navbar indigo">
                            <div className="w-100 d-block d-lg-none d-md-none mr-5">
                                <a className="nav-link" href="#">
                                    <span style={{fontSize: "20px", cursor:"pointer"}} className="float-right mr-3 opennav" onClick={toggleSideBar}>&#9776;</span>
                                    <img src={`${PUBLIC_URL}/static/app/images/logo.png`} className="w-25 float-left" alt={APPNAME} />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                                        aria-controls="navbarTogglerDemo02" aria-expanded="false"
                                        aria-label="Toggle navigation" >

                                </button>
                            </div>

                            <div id="mySidenav" className="sidenav">
                                <a href="#" className="closebtn border-0" onClick={toggleSideBar}>&times;</a>
                                <a href="#">HOME</a>

                                <div className="dropdown">
                                    <a className=" dropdown-toggle" data-toggle="dropdown">CLASSES
                                        <span className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            classes.slice(0, 4).map(el => {
                                                return (
                                                    <li><Link to={`${ENV}exams/classes/${el.id}/subjects`}>{el.class}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a className=" dropdown-toggle" data-toggle="dropdown">SUBJECTS
                                        <span className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            subjects.slice(0, 4).map(el => {
                                                return (
                                                    <li><Link to={`${ENV}exams/subjects/${el.id}/modules`}>{el.subject}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <Link to={`${ENV}exams/modules`}>EXAMINATION PAPERS</Link>
                                {/*<a href="#">KCSE</a>*/}
                                {
                                    user.hasOwnProperty('id') ?
                                        <React.Fragment>
                                            <Link to={`${ENV}profile`}>PROFILE</Link>
                                            <Link to={`${ENV}signin`}>LOGOUT</Link>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <Link to={`${ENV}signin`}>LOGIN</Link>
                                            <Link to={`${ENV}signup`}>REGISTER</Link>
                                        </React.Fragment>
                                }
                            </div>

                            <div className="collapse navbar-collapse flex-column " id="navbar">

                                <ul className="navbar-nav  w-100 justify-content-center p-0">
                                    <li className="nav-item active p-0 m-0">
                                        <a className="nav-link" href="#">
                                            <img src={`${PUBLIC_URL}/static/app/images/logo.png`} className="w-75" alt={APPNAME} /></a>
                                    </li>
                                </ul>

                                <ul className="navbar-nav justify-content-around w-75">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to={ENV}>HOME </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                           id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            CLASSES
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            {
                                                classes.slice(0, 4).map(el => {
                                                    return (
                                                        <Link className="dropdown-item" to={`${ENV}exams/classes/${el.id}/subjects`}>{el.class}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#"
                                           id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            SUBJECTS
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            {
                                                subjects.slice(0, 4).map(el => {
                                                    return (
                                                        <Link className="dropdown-item" to={`${ENV}exams/subjects/${el.id}/modules`}>{el.subject}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link" to={`${ENV}exams/modules`}>EXAMINATION PAPERS </Link>
                                    </li>
                                    {/*<li className="nav-item ">*/}
                                    {/*    <a className="nav-link" href="#">KCSE </a>*/}
                                    {/*</li>*/}
                                    {
                                        user.hasOwnProperty('id') ?
                                            <React.Fragment>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle"
                                                          to={`${ENV}profile`} id="navbarDropdownMenuLink"
                                                          data-toggle="dropdown" aria-haspopup="true"
                                                          aria-expanded="false">
                                                        <i className="fa fa-user-circle"> </i> Hello {user.name}
                                                    </Link>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="navbarDropdownMenuLink">
                                                        <Link className="dropdown-item" to={`${ENV}profile`}>PROFILE</Link>
                                                        <Link className="dropdown-item" to={`${ENV}signin`}>LOGOUT</Link>
                                                    </div>
                                                </li>
                                            </React.Fragment> :
                                            <React.Fragment>
                                                <li className="nav-item ">
                                                    <Link className="nav-link login " to={`${ENV}signup`}>REGISTER</Link>
                                                </li>
                                                <li className="nav-item ">
                                                    <Link className="nav-link login" to={`${ENV}signin`}>LOGIN</Link>
                                                </li>

                                                <li className="nav-item ">
                                                    <Link className="nav-link login" to={`${ENV}signin`}>Get 1 day for Ksh.30 </Link>
                                                </li>
                                            </React.Fragment>
                                    }

                                </ul>


                            </div>
                        </nav>
                    </header>
                    {
                        loading ? <Loading/> :
                            <React.Fragment>
                                {
                                    <Switch>
                                        <Route exact={true} path={props.match.url}
                                               render={(props) => <Home{...props} user={user} subjects={subjects}/>}/>
                                        <Route exact={true} path={`${props.match.url}signin`}
                                               render={(props) => <Login{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}signup`}
                                               render={(props) => <Register{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}profile`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       <Profile {...props} user={user}/>
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/classes`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Classes {...props} user={user}/>
                                                           : props.history.push({
                                                               pathname: `${ENV}subscriptions`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/subjects`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Subjects {...props} user={user}/>
                                                           : props.history.push({
                                                               pathname: `${ENV}subscriptions`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/classes/:class/subjects`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Subjects {...props} user={user}/>
                                                           : props.history.push({
                                                               pathname: `${ENV}subscriptions`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/modules`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                       <Modules {...props} user={user}/>
                                                       : props.history.push({
                                                           pathname: `${ENV}subscriptions`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/subjects/:subject/modules`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                       <Modules {...props} user={user}/>
                                                       : props.history.push({
                                                           pathname: `${ENV}subscriptions`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/done`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <CompletedExams {...props} user={user}/>
                                                           : props.history.push({
                                                               pathname: `${ENV}subscriptions`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/exam/:module`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Exam {...props} user={user}/>
                                                           : props.history.push({
                                                               pathname: `${ENV}subscriptions`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}subscriptions`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       <Subscriptions {...props} user={user}/> :
                                                       props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}subscription/payment`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       <Payment {...props} user={user}/>
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                    </Switch>
                                }
                                <ul className="nav from text-center bg-light d-flex">

                                    <li className="nav-item ">
                                        <a className="nav-link px-0 fromtext" href="#">E-Learning from
                                            <img src={`${PUBLIC_URL}/static/app/images/thestandardlogo.png`} alt={APPNAME}
                                                 className="footerlogo" />
                                        </a>
                                    </li>
                                </ul>
                                <footer className="footer">
                                    <div className="container">
                                        <div className="row">

                                            <div className="mx-auto col-xs-12">
                                                <ul className="nav nav-inline ">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="http://www.btvkenya.ke/">BTV</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="http://www.evewoman.co.ke/">
                                                            EVE WOMAN</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="http://www.spicefm.co.ke/">
                                                            SPICE RADIO</a>
                                                    </li>
                                                    <li className="nav-item">

                                                        <a className="nav-link" href="http://www.travelog.ke/">TRAVEL</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className="nav-link" href="https://www.farmers.co.ke/">FARMERS</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="https://www.digger.co.ke/">DIGGER</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link"
                                                           href="https://www.vas.standardmedia.co.ke/">VAS</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link"
                                                           href="https://www.newsstand.standardmedia.co.ke/">EPAPER</a>
                                                    </li>
                                                    <li className="nav-item border-0">
                                                        <a className="nav-link"
                                                           href="https://www.standardmedia.co.ke/corporate">CORPORATE</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="copyright">
                                        <div className="container text-center p-0">
                                            <div className="row p-0">
                                                <div className="col-12 mx-auto p-0">
                                                    <p className="text-center">© 2020 The Standard Group PLC All rights reserved
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </footer>
                                <a href="#" className="back-to-top">
                                    <i className="fa fa-arrow-up" />
                                </a>
                            </React.Fragment>
                    }

                </React.Fragment>
            }
        </React.Fragment>
    )
}
