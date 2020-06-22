import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import {useDispatch, useSelector} from "react-redux";
import {API, LOADING_SUBSCRIPTION, PUBLIC_URL, SUBSCRIPTION_LOADED} from "../common/constants";
import {HOME_VIDEOS_UPDATED} from "../common/constants/academy";

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
    const dispatch = useDispatch();

    const [user, setUser] = useState(localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : {});
    const subscription = useSelector(state => state.academy.subscription);
    const [loading, setLoading] = useState(user.hasOwnProperty('name') && props.location.pathname !== `/academy/login` )

    useEffect((e) => {
        fetchVideos();
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
                // setLoading(false)
            }.bind(this),
            success: function (res) {
                dispatch({type: SUBSCRIPTION_LOADED, payload: res});
                // setLoading(false);
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

    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-2 bg-light">
                                <nav
                                    className="navbar navbar-expand-lg navbar-transparent navbar-light bg-light py-4 flex-column">
                                    <a className="navbar-brand text-dark" href="../">
                                        <img src={`${PUBLIC_URL}/static/academy/assets/images/videosite/logo.png`}
                                             className="img-left img-fluid" alt={'VOD'} />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-action="offcanvas-open"
                                            data-target="#navbar_main"
                                            aria-controls="navbar_main" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                       <span className="navbar-toggler-icon">
                                           <i className="fas fa-align-justify" />
                                       </span>
                                    </button>
                                    <div className="navbar-collapse offcanvas-collapse" id="navbar_main">
                                        <ul className="nav flex-column navbar-nav">
                                            <li className="nav-item mt-4">
                                                <a className="nav-link active text-dark border-formart" href="#">
                                                    <h6><strong>LATEST</strong></h6>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-dark border-formart" href="#">
                                                    <h6><strong>TRENDING</strong></h6>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link  text-dark border-formart" href="#">
                                                    <h6><strong>FEATURED</strong></h6>
                                                </a>
                                            </li>

                                            <li className="nav-item mt-5">
                                                <a href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
                                                   target="_blank"
                                                   className="nav-link d-lg-none bg-green text-white">SUBSCRIBE</a>
                                                <a href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
                                                   target="_blank"
                                                   className="btn btn-sm bg-green text-white d-none d-lg-inline-flex">SUBSCRIBE</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-icon"
                                                   href="https://instagram.com/webpixelsofficial/"
                                                   target="_blank"><i className="fab fa-instagram text-success" /><span
                                                    className="ml-2 text-green">Instagram</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-icon"
                                                   href="https://web.facebook.com/webpixels" target="_blank"><i
                                                    className="fab fa-facebook text-success" /><span
                                                    className="ml-2 text-dark">Facebook</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-icon"
                                                   href="https://dribbble.com/webpixels" target="_blank"><i
                                                    className="fab fa-linkedin text-success" /><span
                                                    className="ml-2 text-dark">Linkedin</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-icon" href="https://github.com/webpixels"
                                                   target="_blank">
                                                    <i className="fab fa-twitter text-success" /><span
                                                    className="ml-2 text-dark">Twitter</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className='p-0 col-12 col-md-10'>
                                <main className='main'>
                                    <section className="search-area d-block bg-dark pt-4">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-md-12">
                                                    <div className="mx-3 form-group">
                                                        <div className="input-group mb-4">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-search" /></span>
                                                            </div>
                                                            <input type="text" className="form-control"
                                                                   placeholder="Search ..." aria-label="Search keyword"
                                                                   aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                        <Switch>
                                            <Route exact={true} path={props.match.url}
                                                   render={(props) => <Home{...props} />}/>
                                            <Route exact={true} path={`${props.match.url}/:video/:slug`}
                                                   render={(props) => <Player {...props} setUser={setUser} />}/>
                                        </Switch>
                                </main>
                            </div>
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}
