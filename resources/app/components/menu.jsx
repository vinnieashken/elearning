import React , {useState, useEffect} from 'react';
import {Link, Switch, Route} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import LoadingWhite from "../common/loadingWhite";
import {API, DIR, ENV, APPNAME, PUBLIC_URL, ISPRODUCTION, SUBSCRIPTION_DELETED} from "../common/constants";
import { useSelector } from 'react-redux'
import { fetchSubscription, fetchSubjects, fetchClasses, fetchExams } from "../common/actions";
import { useDispatch } from "react-redux";
import {ClipLoader} from "react-spinners";
import moment from "moment";

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading
});

const VerifyOtp = Loadable({
    loader: () => import('./verifyOtp'),
    loading: Loading
})

const SchoolLogin = Loadable({
    loader: () => import('./studentLogin'),
    loading: Loading
});

const ResetPassword = Loadable({
    loader: () => import('./resetPassword'),
    loading: Loading
});

const Register = Loadable({
    loader: () => import('./register'),
    loading: Loading
});

const InitialSetup = Loadable({
    loader: () => import('./initialSetup'),
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

const FreeExams = Loadable({
    loader: () => import('./free'),
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
    loader: () => import('./exams'),
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

const ExamQuestions = Loadable({
    loader: () => import('./examQuestions'),
    loading: Loading
})

const Teachers = Loadable({
    loader: () => import('./teachers'),
    loading: Loading
})

const Students = Loadable({
    loader: () => import('./students'),
    loading: Loading
})

const EditQuestion = Loadable({
    loader: () => import('./editQuestion'),
    loading: Loading
})

const MyPapers = Loadable({
    loader: () => import('./myPapers'),
    loading: Loading
})

const ExamPerformance = Loadable({
    loader: () => import('./examPerformance'),
    loading: Loading
})

const PaymentReport = Loadable({
    loader: () => import('./paymentReport'),
    loading: Loading
})

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [user, setUser] = useState(localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {});
    const classes = useSelector(state => state.default.classes);
    const subscription = useSelector(state => state.default.subscription);
    const subjects = useSelector(state => state.default.subjects);
    const loadingSubscription = useSelector(state => state.default.loadingSubscription);
    const [subscriptionShown, setSubscriptionShown] = useState({});

    const dispatch = useDispatch();

    useEffect((e) => {
        if (user.hasOwnProperty('name') && props.location.pathname !== `${ENV}signin` && props.location.pathname !== `${ENV}signup` ) {
            dispatch(fetchSubscription(user));
        }
        dispatch(fetchExams());
        dispatch(fetchClasses());
        dispatch(fetchSubjects());
        getSubscriptions();
    }, []);

    const getSubscriptions = () => {
        $.ajax({
            url: `${API}/payments/subscriptions`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}

                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                const filterd = res.filter(el => {
                    return el.days === 1;
                });
                if (filterd.length > 0)
                    setSubscriptionShown(filterd[0]);
                setLoading(false);
            }.bind(this)
        })
    };

    const getClasses = () => {
        $.ajax({
            url: `${API}/classes/list`,
            method: 'GET',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                try {
                    response = JSON.parse(xhr['responseText'])['message']
                }catch (e) {}
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

    const logout = (e) => {
        localStorage.clear();
        setUser({});
        dispatch ({ type: SUBSCRIPTION_DELETED, payload: [] });
        props.history.push({
            pathname: `${ENV}signin`,
            state: {next: props.location.pathname},
        });
    };

    const openNav = (e) => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = (e) => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <React.Fragment>
            {
                <React.Fragment>
                    <header id="header-wrap">
                        <nav className="navbar navbar-expand-md text-white  fixed-top scrolling-navbar indigo top-nav-collapse">
                            <div className="w-100 d-block d-lg-none d-md-none ml-2">
                                <a className="nav-link" href="#">
                                    <span style={{fontSize: "20px", cursor:"pointer"}} className="float-right opennav" onClick={toggleSideBar}>&#9776;</span>
                                    <img className="w-25 float-left logotop" src={`${PUBLIC_URL}/static/new/img/logo.png?${moment().format('YYYYMMDDHHmmss')}`} alt={''} />
                                </a>
                                <button aria-controls="navbarTogglerDemo02" aria-expanded="false"
                                        aria-label="Toggle navigation"
                                        className="navbar-toggler"
                                        data-target="#navbar" data-toggle="collapse" type="button">
                                </button>
                            </div>

                            <div className="sidenav" id="mySidenav">
                                <a href="#" className="closebtn border-0" onClick={toggleSideBar}>&times; </a>
                                <Link to={`${ENV}`}>HOME</Link>

                                <div className="dropdown">
                                    <a className=" dropdown-toggle" data-toggle="dropdown">CLASSES
                                        <span className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/*<li><Link to={`${ENV}exams/classes/2/subjects`}>Class 8</Link></li>*/}

                                        {
                                            classes.filter(el => {
                                                return [2, 6, 7, 8].includes(el.id)
                                            }).map(el => {
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
                                            subjects.filter(el => {return [2,4,5,6,7,8].includes(el.id)}).map(el => {
                                                return (
                                                    <li><Link to={`${ENV}exams/subjects/${el.subject}/modules`}>{el.subject}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a className=" dropdown-toggle" data-toggle="dropdown">EXAMINATION PAPERS
                                        <span className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/*<li>*/}
                                        {/*    <Link to={{*/}
                                        {/*        pathname: `${ENV}exams/subjects/${el.subject}/modules`,*/}
                                        {/*        state: {*/}
                                        {/*            level: '0'*/}
                                        {/*        },*/}
                                        {/*    }}>CBC</Link>*/}
                                        {/*</li>*/}
                                        <li>
                                            <Link to={{
                                                pathname: `${ENV}exams/modules/primary`,
                                                state: {
                                                    level: '1'
                                                },
                                            }}>PRIMARY SCHOOL</Link>
                                        </li>
                                        <li>
                                            <Link to={{
                                                pathname: `${ENV}exams/modules/secondary`,
                                                state: {
                                                    level: '2'
                                                }
                                            }}>HIGH SCHOOL</Link>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    user.hasOwnProperty('id') ?
                                        <React.Fragment>
                                            <Link to={`${ENV}profile`}>PROFILE</Link>
                                            <a href='#' onClick={logout}>LOGOUT</a>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <Link to={`${ENV}signin`}>LOGIN</Link>
                                            <Link to={`${ENV}signup`}>REGISTER</Link>
                                        </React.Fragment>
                                }
                            </div>


                            {/*<script>*/}
                            {/*    function openNav() {*/}
                            {/*    document.getElementById("mySidenav").style.width = "250px";*/}
                            {/*}*/}

                            {/*    function closeNav() {*/}
                            {/*    document.getElementById("mySidenav").style.width = "0";*/}
                            {/*}*/}
                            {/*</script>*/}


                            <div className="collapse navbar-collapse flex-column " id="navbar" style={{background: '#1865f1'}}>


                                <ul className="navbar-nav justify-content-around w-90">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${ENV}`}>
                                            <img className="logo" src={`${PUBLIC_URL}/static/new/img/logo.png`} alt={`${APPNAME}`} />
                                        </Link>
                                    </li>
                                    <li className="nav-item active mt-4">
                                        <Link className="nav-link" to={ENV}>HOME </Link>
                                    </li>
                                    <li className="nav-item dropdown mt-4">
                                        <a aria-expanded="false" aria-haspopup="true"
                                           className="nav-link dropdown-toggle"
                                           data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink">
                                            CLASSES
                                        </a>
                                        <div aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                                            {/*<Link className="dropdown-item" to={`${ENV}exams/classes/2/subjects`}>Class 8</Link>*/}

                                            {
                                                classes.filter(el => {
                                                    return [2, 6, 7, 8].includes(el.id)
                                                }).map(el => {
                                                    return (
                                                        <Link className="dropdown-item" to={`${ENV}exams/classes/${el.id}/subjects`}>{el.class}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mt-4">
                                        <a aria-expanded="false" aria-haspopup="true"
                                           className="nav-link dropdown-toggle"
                                           data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink">
                                            SUBJECTS
                                        </a>
                                        <div aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                                            {
                                                subjects.filter(el => {return [2,4,5,6,7,8].includes(el.id)}).map(el => {
                                                    return (
                                                        <Link className="dropdown-item " to={`${ENV}exams/subjects/${el.subject}/modules`}>{el.subject}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown mt-4">
                                        <a aria-expanded="false" aria-haspopup="true"
                                           className="nav-link dropdown-toggle"
                                           data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink">
                                            EXAMINATION PAPERS
                                        </a>
                                        <div aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                                            {/*<Link className="dropdown-item " to={*/}
                                            {/*    {*/}
                                            {/*        pathname: `${ENV}exams/modules`,*/}
                                            {/*        state: {*/}
                                            {/*            level: 0*/}
                                            {/*        }*/}
                                            {/*    }*/}
                                            {/*}>CBC</Link>*/}
                                            <Link className="dropdown-item " to={
                                                {
                                                    pathname: `${ENV}exams/modules/primary`,
                                                    state: {
                                                        level: 1
                                                    }
                                                }
                                            }>PRIMARY SCHOOL</Link>
                                            {/*<Link className="dropdown-item " to={*/}
                                            {/*    {*/}
                                            {/*        pathname: `${ENV}exams/modules/secondary`,*/}
                                            {/*        // state: {*/}
                                            {/*        //     level: 2*/}
                                            {/*        // }*/}
                                            {/*    }*/}
                                            {/*}>HIGH SCHOOL</Link>*/}
                                        </div>
                                    </li>

                                    {/*<li className="nav-item mt-4">*/}
                                    {/*    <Link className="nav-link" to={`${ENV}exams/modules`}>EXAMINATION PAPERS </Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item mt-4">*/}
                                    {/*    <a className="nav-link" href="#">KCSE </a>*/}
                                    {/*</li>*/}
                                    {
                                        user.hasOwnProperty('id') ?
                                            <React.Fragment>
                                                {
                                                    (typeof user.institution !== "undefined" && user.institution.hasOwnProperty('id')) ?
                                                        <React.Fragment>
                                                            {
                                                                parseInt(user.owner) || parseInt(user.teacher)  ?
                                                                    <li className="nav-item dropdown mt-4">
                                                                        <Link className="nav-link dropdown-toggle"
                                                                              to={`${ENV}profile`} id="reports"
                                                                              data-toggle="dropdown" aria-haspopup="true"
                                                                              aria-expanded="false">
                                                                            REPORTS
                                                                        </Link>
                                                                        <div className="dropdown-menu"
                                                                             aria-labelledby="reports">
                                                                            <Link className="dropdown-item" to={`${ENV}students`}>Registered Students </Link>
                                                                            <Link className="dropdown-item" to={`${ENV}teachers`}>Registered Teachers </Link>
                                                                            {/*<Link className="dropdown-item" to={`${ENV}exams/performance`}>Student Performance </Link>*/}
                                                                            <Link className="dropdown-item" to={`${ENV}exams/mine`}>My Papers</Link>
                                                                            <Link className="dropdown-item" to={`${ENV}report/payments`}>Payments</Link>
                                                                        </div>
                                                                    </li> : ''
                                                            }

                                                            {/*{*/}
                                                            {/*    parseInt(user.owner) || parseInt(user.teacher)  ?*/}
                                                            {/*        <React.Fragment>*/}
                                                            {/*            <li className="nav-item ">*/}
                                                            {/*                <Link className="nav-link" to={`${ENV}students`}>STUDENTS </Link>*/}
                                                            {/*            </li>*/}
                                                            {/*            <li className="nav-item ">*/}
                                                            {/*                <Link className="nav-link" to={`${ENV}teachers`}>TEACHERS </Link>*/}
                                                            {/*            </li>*/}
                                                            {/*            <li className="nav-item ">*/}
                                                            {/*                <Link className="nav-link" to={`${ENV}exams/mine`}>MY PAPERS </Link>*/}
                                                            {/*            </li>*/}
                                                            {/*        </React.Fragment>*/}
                                                            {/*        : ''*/}
                                                            {/*}*/}
                                                            <li className="nav-item dropdown mt-4">
                                                                <a aria-expanded="false" aria-haspopup="true"
                                                                   className="nav-link dropdown-toggle"
                                                                   data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink">
                                                                    HOW IT WORKS
                                                                </a>
                                                                <div aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                                                                    <a className="dropdown-item " href={`https://tutorsoma.standardmedia.co.ke/docs/4Design.pdf`}>For Students</a>
                                                                    <a className="dropdown-item " href={`https://tutorsoma.standardmedia.co.ke/docs/2Design.pdf`}>For Teachers</a>
                                                                    <a className="dropdown-item " href={`https://tutorsoma.standardmedia.co.ke/docs/3Design.pdf`}>For Your School's Students</a>
                                                                </div>
                                                            </li>
                                                        </React.Fragment> : ''
                                                }
                                                <li className="nav-item dropdown mt-4">
                                                    <Link className="nav-link dropdown-toggle"
                                                          to={`${ENV}profile`} id="navbarDropdownMenuLink"
                                                          data-toggle="dropdown" aria-haspopup="true"
                                                          aria-expanded="false">
                                                        <i className="fa fa-user-circle"> </i> Hello {user.name}
                                                    </Link>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="navbarDropdownMenuLink">
                                                        <Link className="dropdown-item" to={`${ENV}profile`}>PROFILE</Link>
                                                        <a href='#' onClick={logout} className="dropdown-item" >LOGOUT</a>
                                                    </div>
                                                </li>
                                            </React.Fragment> :
                                            <React.Fragment>
                                                <li className="nav-item mt-4">
                                                    <Link className="nav-link" to={`${ENV}signin`}>LOGIN</Link>
                                                </li>
                                                <li className="nav-item mt-4">
                                                    <Link className="nav-link " to={`${ENV}signup`}>SIGN UP</Link>
                                                </li>
                                                <li className="nav-item mt-4">
                                                    <Link className="nav-link " to={`${ENV}initialSetup`}>REGISTER SCHOOL</Link>
                                                </li>
                                                <li className="nav-item dropdown mt-4">
                                                    <a aria-expanded="false" aria-haspopup="true"
                                                       className="nav-link dropdown-toggle"
                                                       data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink">
                                                        HOW IT WORKS
                                                    </a>
                                                    <div aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                                                        <a className="dropdown-item " target='_blank' href={`https://tutorsoma.standardmedia.co.ke/docs/Design.pdf`}>For Students</a>
                                                        <a className="dropdown-item " target='_blank' href={`https://tutorsoma.standardmedia.co.ke/docs/2Design.pdf`}>For Teachers</a>
                                                        <a className="dropdown-item " target='_blank' href={`https://tutorsoma.standardmedia.co.ke/docs/3Design.pdf`}>For Your School's Students</a>
                                                    </div>
                                                </li>
                                                {
                                                    subscriptionShown.hasOwnProperty('cost') > 0 ? <li className="nav-item mt-4">
                                                        <Link className="nav-link" to={`${ENV}signin`}>Get {subscriptionShown['days']} day for Ksh.{subscriptionShown['cost']} </Link>
                                                    </li> : ''
                                                }
                                            </React.Fragment>
                                    }

                                </ul>


                            </div>

                        </nav>

                    </header>
                    {
                        (loading || loadingSubscription) ?
                            <Loading/>
                            : <React.Fragment>
                                {
                                    <Switch>
                                        <Route exact={true} path={props.match.url}
                                               render={(props) => <Home{...props} user={user} subjects={subjects}/>}/>
                                        <Route exact={true} path={`${props.match.url}signin`}
                                               render={(props) => <Login{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}otp`}
                                               render={(props) => <VerifyOtp{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}school`}
                                               render={(props) => <SchoolLogin{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}reset`}
                                               render={(props) => <ResetPassword {...props}  />}/>
                                        <Route exact={true} path={`${props.match.url}signup`}
                                               render={(props) => <Register{...props} setUser={setUser} />}/>
                                        <Route exact={true} path={`${props.match.url}initialSetup`}
                                               render={(props) => <InitialSetup{...props} setUser={setUser} />}/>
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
                                                   // user.hasOwnProperty('id') ?
                                                   <Modules {...props} user={user}/>
                                                   // : props.history.push({
                                                   //     pathname: `${ENV}signin`,
                                                   //     state: {
                                                   //         next: props.location.pathname
                                                   //     },
                                                   // })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/modules/:level`}
                                               render={(props) =>
                                                   // user.hasOwnProperty('id') ?
                                                   <Modules {...props} user={user}/>
                                                   // : props.history.push({
                                                   //     pathname: `${ENV}signin`,
                                                   //     state: {
                                                   //         next: props.location.pathname
                                                   //     },
                                                   // })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/subjects/:subject/modules`}
                                               render={(props) =>
                                                   // user.hasOwnProperty('id') ?
                                                   //     subscription.hasOwnProperty('id') ?
                                                   <Modules {...props} user={user}/>
                                                   //     : props.history.push({
                                                   //         pathname: `${ENV}subscriptions`,
                                                   //         state: {
                                                   //             next: props.location.pathname
                                                   //         },
                                                   //     })
                                                   // : props.history.push({
                                                   //     pathname: `${ENV}signin`,
                                                   //     state: {
                                                   //         next: props.location.pathname
                                                   //     },
                                                   // })
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

                                        <Route exact={true} path={`${props.match.url}exams/mine`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <MyPapers {...props} user={user}/>
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

                                        <Route exact={true} path={`${props.match.url}exams/exam/edit/:exam`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <ExamQuestions {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}free/exams`}
                                               render={(props) =>
                                                   <FreeExams {...props} user={user}/>
                                               }/>
                                        <Route exact={true} path={`${props.match.url}free/exam/:exam`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       <Exam {...props} user={user}/>
                                                       : props.history.push({
                                                           pathname: `${ENV}signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        <Route exact={true} path={`${props.match.url}exams/exam/:exam`}
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
                                        <Route exact={true} path={`${props.match.url}exams/exam/:exam/performance`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <ExamPerformance {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}questions/question/new`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <EditQuestion {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}questions/question/:question/edit`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <EditQuestion {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}students`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Students {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}teachers`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Teachers {...props} user={user}/>
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
                                        <Route exact={true} path={`${props.match.url}report/payments`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <PaymentReport {...props} user={user}/>
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

                                        <Route exact={true} path={`${props.match.url}*`}
                                               render={(props) => <Home{...props} user={user} subjects={subjects}/>}/>
                                    </Switch>
                                }
                                <ul className="nav from text-center bg-light d-flex">

                                    <li className="nav-item ">
                                        <a className="nav-link px-0 fromtext" href="#">Tutor Soma from
                                            <img src={`${PUBLIC_URL}/static/app/images/thestandardlogo.png`} alt={APPNAME}
                                                 className="footerlogo" />
                                        </a>
                                    </li>
                                </ul>
                                <footer className="footer">
                                    <div className=" bg-grey pl-3 w-100">
                                        <div className="container">
                                            <div className="row  bg-grey w-100">
                                                <div className="mx-auto col-xs-12">
                                                    <ul className="nav nav-inline ">
                                                        <li className="nav-item">
                                                            <a className="nav-link active"
                                                               href="http://www.standardmedia.co.ke/">THE STANDARD |</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link active"
                                                               href="https://www.standardmedia.co.ke/ktnnews">
                                                                KTN NEWS |</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link active"
                                                               href="https://www.standardmedia.co.ke/radiomaisha">
                                                                RADIO MAISHA |</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link"
                                                               href="https://www.vas.standardmedia.co.ke/">VAS |</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link"
                                                               href="https://newsstand.standardmedia.co.ke/">E-PAPER |</a>
                                                        </li>
                                                        <li className="nav-item border-0">
                                                            <a className="nav-link"
                                                               href="https://www.standardmedia.co.ke/corporate">CORPORATE
                                                                |</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="text-center bg-black">
                                        <ul className="navbar-nav justify-content-center p-3">
                                            <li className="nav-item">
                                                <a className="text-white"
                                                   href="https://new.standardmedia.co.ke/privacy-policy">Privacy policy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="text-white"
                                                   href=" https://new.standardmedia.co.ke/terms-and-conditions">Terms &amp; Conditions</a>
                                            </li>
                                            <li className="nav-item">
                                                © 2020 Standard Group PLC
                                            </li>
                                        </ul>
                                    </nav>
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
