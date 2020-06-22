import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import {useDispatch, useSelector} from "react-redux";
import {API, LOADING_SUBSCRIPTION, SUBSCRIPTION_LOADED} from "../common/constants";

const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading
});

const Payment = Loadable({
    loader: () => import('./payment'),
    loading: Loading
})

const Player = Loadable({
    loader: () => import('./player'),
    loading: Loading
})

export default function (props) {

    const [user, setUser] = useState(localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {});
    const subscription = useSelector(state => state.academy.subscription);
    const [loading, setLoading] = useState(user.hasOwnProperty('name') && props.location.pathname !== `/academy/login` )
    const dispatch = useDispatch();

    useEffect((e) => {
        if (user.hasOwnProperty('name') && props.location.pathname !== `/academy/login` ) {
            fetchSubscriptionPlan();
        }
    }, []);

    const fetchSubscriptionPlan = () => {
        $.ajax({
            // url: `${API}/payments/subscription/user/2`,
            url: `${API}/payments/subscription/user/${user.user_id}`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {
                setLoading(false)
            }.bind(this),
            success: function (res) {
                dispatch({type: SUBSCRIPTION_LOADED, payload: res});
                setLoading(false);
            }.bind(this)
        })
    }

    return (
       <div className='wrapper'>
           {
               loading ? <Loading /> :
                   <React.Fragment>
                       <nav id="sidebar" className="sidebar sidebar-sticky">
                           <div className="sidebar-content ">
                               <Link className="sidebar-brand" to={'/academy'}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-box align-middle">
                                       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                       <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                       <line x1="12" y1="22.08" x2="12" y2="12" />
                                   </svg>
                                   <span className="align-middle">TutorSoma Academy</span>
                               </Link>

                               <ul className="sidebar-nav">
                                   {/*<li className="sidebar-header">*/}
                                   {/*    Pages*/}
                                   {/*</li>*/}
                                   <li className="sidebar-item">
                                       <Link className="sidebar-link" to={'/academy'}>
                                           {/*<i className='fa fa-eye' />*/}
                                           <span className="align-middle">Most Viewed</span>
                                       </Link>
                                   </li>
                                   <li className="sidebar-item">
                                       <Link className="sidebar-link" to={'/academy'}>
                                           {/*<i className='fa fa-eye' />*/}
                                           <span className="align-middle">Featured</span>
                                       </Link>
                                   </li>
                                   <li className="sidebar-item">
                                       <Link className="sidebar-link" to={'/academy'}>
                                           {/*<i className='fa fa-eye' />*/}
                                           <span className="align-middle">History</span>
                                       </Link>
                                   </li>
                                   <li className="sidebar-header">
                                       Categories
                                   </li>
                               </ul>

                           </div>
                       </nav>
                       <div className='main'>
                           <nav className="navbar navbar-expand navbar-light bg-white">
                               <a className="sidebar-toggle d-flex mr-2">
                                   <i className="hamburger align-self-center" />
                               </a>

                               <form className="form-inline d-none d-sm-inline-block">
                                   <input className="form-control form-control-no-border mr-sm-2" type="text"
                                          placeholder="Search Videos..." aria-label="Search" />
                               </form>

                               {/*<div className="navbar-collapse collapse">*/}
                               {/*    <ul className="navbar-nav ml-auto">*/}
                               {/*        <li className="nav-item dropdown">*/}
                               {/*            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"*/}
                               {/*               data-toggle="dropdown">*/}
                               {/*                <div className="position-relative">*/}
                               {/*                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                               {/*                         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"*/}
                               {/*                         stroke-linecap="round" stroke-linejoin="round"*/}
                               {/*                         className="feather feather-message-circle align-middle">*/}
                               {/*                        <path*/}
                               {/*                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>*/}
                               {/*                    </svg>*/}
                               {/*                    <span className="indicator">4</span>*/}
                               {/*                </div>*/}
                               {/*            </a>*/}
                               {/*        </li>*/}

                               {/*    </ul>*/}
                               {/*</div>*/}
                           </nav>
                           <main className='content'>
                               <div className='container-fluid p-0'>
                                   <Switch>
                                       <Route exact={true} path={props.match.url}
                                              render={(props) => <Home {...props} />}/>
                                       <Route exact={true} path={`${props.match.url}/payment`}
                                              render={(props) => <Payment {...props} />}/>
                                       <Route exact={true} path={`${props.match.url}/:video/:title`}
                                              render={(props) =>
                                                  // user.hasOwnProperty('id') ?
                                                      // subscription.hasOwnProperty('id') ?
                                                          <Player {...props} user={user}/>
                                                          // : props.history.push({
                                                          //     pathname: `/academy/payment`,
                                                          //     state: {
                                                          //         next: props.location.pathname
                                                          //     },
                                                          // })
                                                      // : props.history.push({
                                                      //     pathname: `/academy/login`,
                                                      //     state: {
                                                      //         next: props.location.pathname
                                                      //     },
                                                      // })
                                              }/>
                                   </Switch>
                               </div>
                           </main>
                       </div>
                   </React.Fragment>
           }
       </div>
    )
}
