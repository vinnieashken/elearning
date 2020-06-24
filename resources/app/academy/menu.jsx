import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import {useDispatch, useSelector} from "react-redux";
import {API, ENV, LOADING_SUBSCRIPTION, PUBLIC_URL, SUBSCRIPTION_LOADED} from "../common/constants";
import { fetchSubscription } from "../common/actions/academy";
import {HOME_VIDEOS_UPDATED, SUBSCRIPTION_UPDATED} from "../common/constants/academy";
import {ClipLoader} from "react-spinners";

const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading
});

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading
});

const Payment = Loadable({
    loader: () => import('./payment'),
    loading: Loading
});

const Subscribe = Loadable({
    loader: () => import('./subscribe'),
    loading: Loading
})

const Player = Loadable({
    loader: () => import('./player'),
    loading: Loading
});

const List = Loadable({
    loader: () => import('./list'),
    loading: Loading
});

export default function (props) {
    const dispatch = useDispatch();

    const [user, setUser] = useState(localStorage.hasOwnProperty('ac_user') ? JSON.parse(localStorage.getItem('ac_user')) : {});
    const subscription = useSelector(state => state.academy.subscription);
    const [loading, setLoading] = useState(true )
    const [loadingS, setLoadingS] = useState(true)

    useEffect((e) => {
        fetchVideos();
        if (user.hasOwnProperty('id') && props.location.pathname !== `/academy/login` ) {
            fetchSubscriptionPlan();
        } else setLoadingS(false);
    }, []);

    const fetchSubscriptionPlan = () => {
        $.ajax({
            url: `${API}/academy/subscription/active`,
            method: 'get',
            data: {
                user_id: user.id
            },
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {
                setLoadingS(false)
            }.bind(this),
            success: function (res) {
                dispatch({type: SUBSCRIPTION_UPDATED, payload: res});
                setLoadingS(false);
            }.bind(this)
        })
    }

    const fetchVideos = () => {
        $.ajax({
            url: `${API}/academy/video`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {
                setLoading(false)
            }.bind(this),
            success: function (res) {
                dispatch({type: HOME_VIDEOS_UPDATED, payload: res})
                setLoading(false)
            }.bind(this)
        })
    }

    const toggleSidebar = (e) => {
        $('#mySidenav').toggleClass('toggled');
    };


    return (
        <React.Fragment>
            <div id="mySidenav" className="sidenav">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-light bg-light py-4 flex-column">
                    <a href="#" className="closebtn" onClick={toggleSidebar} >&times;</a>
                    <Link className="navbar-brand text-dark" to={'/academy'}>
                        <img src={`${PUBLIC_URL}/static/academy/assets/images/videosite/logo2.png`} className="img-left img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-action="offcanvas-open"
                            data-target="#navbar_main"
                            aria-controls="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-align-justify" /></span>
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbar_main">
                        <ul className="nav flex-column navbar-nav">
                            <li className="nav-item mt-4">
                                <Link className="nav-link active text-dark border-formart" to={`/academy/category/latest`}>
                                    <h6><strong>LATEST</strong></h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark border-formart" to={`/academy/category/trending`}>
                                    <h6><strong>TRENDING</strong></h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark border-formart" to={`/academy/category/featured`}>
                                    <h6><strong>FEATURED</strong></h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark border-formart" to={`/academy/signin`}>
                                    <h6><strong>LOGOUT</strong></h6>
                                </Link>
                            </li>
                            <li className="nav-item mt-5">
                                <a href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
                                   target="_blank"
                                   className="nav-link d-lg-none bg-green text-white button-design">SUBSCRIBE</a>
                                <a href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
                                   target="_blank"
                                   className="btn btn-sm bg-green text-white d-none d-lg-inline-flex button-design">SUBSCRIBE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://instagram.com/webpixelsofficial/"
                                   target="_blank"><i className="fab fa-instagram text-success"></i><span
                                    className="ml-2 text-green">Instagram</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://web.facebook.com/webpixels"
                                   target="_blank"><i
                                    className="fab fa-facebook text-success"></i><span
                                    className="ml-2 text-dark">Facebook</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://dribbble.com/webpixels"
                                   target="_blank"><i
                                    className="fab fa-linkedin text-success"></i><span
                                    className="ml-2 text-dark">Linkedin</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://github.com/webpixels"
                                   target="_blank"><i
                                    className="fab fa-twitter text-success"></i><span
                                    className="ml-2 text-dark">Twitter</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id='main'>
                {
                    loading ? <Loading /> :
                        <React.Fragment>
                            <span  className="menu-bar" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true" /> MENU</span>
                            <section className="search-area d-block bg-dark pt-4">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-12">
                                            <div className="mx-3 form-group">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <svg
                                                    className="svg-inline--fa fa-search fa-w-16" aria-hidden="true"
                                                    focusable="false" data-prefix="fas" data-icon="search" role="img"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                    data-fa-i2svg="">
                                                    <path fill="currentColor"
                                                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                                </svg>
                                                    </span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Search ..."
                                                           aria-label="Search keyword" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                loadingS ? <Loading /> :
                                    <Switch>
                                        <Route exact={true}
                                               path={props.match.url}
                                               render={(props) => <Home {...props} />}/>
                                        <Route exact={true}
                                               path={`${props.match.url}/signin`}
                                               render={(props) => <Login {...props} setUser={setUser} />}/>
                                        <Route exact={true}
                                               path={`${props.match.url}/subscribe`}
                                               render={(props) => <Subscribe {...props} />}/>
                                        <Route exact={true}
                                               path={`${props.match.url}/category/:category`}
                                               render={(props) => <List {...props} />}/>
                                        <Route exact={true}  path={`${props.match.url}/:video/:slug`}
                                               render={(props) =>
                                                   user.hasOwnProperty('id') ?
                                                       subscription.hasOwnProperty('id') ?
                                                           <Player {...props} />
                                                           : props.history.push({
                                                               pathname: `/academy/subscribe`,
                                                               state: {
                                                                   next: props.location.pathname
                                                               },
                                                           })
                                                       : props.history.push({
                                                           pathname: `/academy/signin`,
                                                           state: {
                                                               next: props.location.pathname
                                                           },
                                                       })
                                               }/>
                                        {/*<Route exact={true}*/}
                                        {/*       path={`${props.match.url}/:video/:slug`}*/}
                                        {/*       render={(props) => <Player {...props} />}/>*/}

                                    </Switch>
                            }
                            {/*<div className='container-fluid'>*/}
                            {/*    <div className='row'>*/}
                            {/*        <div className='p-0 col-12 col-md-10'>*/}
                            {/*            <main className='main'>*/}
                            {/*                <section className="search-area d-block bg-dark pt-4">*/}
                            {/*                    <div className="container">*/}
                            {/*                        <div className="row">*/}
                            {/*                            <div className="col-12 col-md-12">*/}
                            {/*                                <div className="mx-3 form-group">*/}
                            {/*                                    <div className="input-group mb-4">*/}
                            {/*                                        <div className="input-group-prepend">*/}
                            {/*                                         <span className="input-group-text">*/}
                            {/*                                             <i className="fas fa-search" /></span>*/}
                            {/*                                        </div>*/}
                            {/*                                        <input type="text" className="form-control"*/}
                            {/*                                               placeholder="Search ..." aria-label="Search keyword"*/}
                            {/*                                               aria-describedby="basic-addon1" />*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </section>*/}
                            {/*                {*/}
                            {/*                    loadingS ? <Loading /> :*/}
                            {/*                        <Switch>*/}
                            {/*                            <Route exact={true}*/}
                            {/*                                   path={props.match.url}*/}
                            {/*                                   render={(props) => <Home {...props} />}/>*/}
                            {/*                            <Route exact={true}*/}
                            {/*                                   path={`${props.match.url}/signin`}*/}
                            {/*                                   render={(props) => <Login {...props} setUser={setUser} />}/>*/}
                            {/*                            <Route exact={true}*/}
                            {/*                                   path={`${props.match.url}/subscribe`}*/}
                            {/*                                   render={(props) => <Subscribe {...props} />}/>*/}
                            {/*                            <Route exact={true}*/}
                            {/*                                   path={`${props.match.url}/category/:category`}*/}
                            {/*                                   render={(props) => <List {...props} />}/>*/}
                            {/*                            <Route exact={true}  path={`${props.match.url}/:video/:slug`}*/}
                            {/*                                   render={(props) =>*/}
                            {/*                                       user.hasOwnProperty('id') ?*/}
                            {/*                                           subscription.hasOwnProperty('id') ?*/}
                            {/*                                               <Player {...props} />*/}
                            {/*                                               : props.history.push({*/}
                            {/*                                                   pathname: `/academy/subscribe`,*/}
                            {/*                                                   state: {*/}
                            {/*                                                       next: props.location.pathname*/}
                            {/*                                                   },*/}
                            {/*                                               })*/}
                            {/*                                           : props.history.push({*/}
                            {/*                                               pathname: `/academy/signin`,*/}
                            {/*                                               state: {*/}
                            {/*                                                   next: props.location.pathname*/}
                            {/*                                               },*/}
                            {/*                                           })*/}
                            {/*                                   }/>*/}
                            {/*                            /!*<Route exact={true}*!/*/}
                            {/*                            /!*       path={`${props.match.url}/:video/:slug`}*!/*/}
                            {/*                            /!*       render={(props) => <Player {...props} />}/>*!/*/}

                            {/*                        </Switch>*/}
                            {/*                }*/}
                            {/*            </main>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}
