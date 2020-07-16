import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {API, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {convertToSlug} from "../common/constants/functions";
import {HOME_VIDEOS_UPDATED} from "../common/constants/academy";
import {useDispatch, useSelector} from "react-redux";
import VideoCard from './videoCard';

export default function (props) {
    const dispatch = useDispatch();

    const videos = useSelector(state => state.academy.homeVideos);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');

    useEffect((e) => {
        // if (!videos || videos.length <= 0)
        //     fetchVideos();
    }, [])


    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    <React.Fragment>
                        <section className="spotlight bg-cover bg-size--cover"
                                 style={{backgroundImage: `url('${PUBLIC_URL}/static/academy/assets/images/backgrounds/img-1.jpg')`, height: '330px', width: '100%'}}>
                            <span className="mask bg-dark alpha-2" />
                            <div className="spotlight-holder py-sm">
                                <div className="container d-flex align-items-center">
                                    <div
                                        className="row cols-xs-space cols-sm-space cols-md-space align-items-center justify-content-around">
                                        <div className=" mt-5 col-lg-8 text-left">
                                            <p className="heading h1 text-white strong-400">
                                                {videos.length > 2 ? videos[2].title : 'What is making wheat Farming boom in Kenya?'}
                                            </p>

                                            {
                                                videos.length > 2 ?
                                                    <Link to={{pathname: `/academy/${videos[2].id}/${convertToSlug(videos[2].title)}`,
                                                        state: {
                                                            video: videos[2],
                                                            // videoData: videoData
                                                        }}} className="btn bg-green mt-4">
                                                        <h5><strong className="text-white"> Learn more</strong></h5>
                                                    </Link> : ''
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-secondary pt-4">
                            <div className="container">
                                <div className="owl-stage-outer">
                                    <div className="row d-flex my-2">
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success text-uppercase badge-xlg"><strong>Agriculture</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Livestock</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Crop</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"><strong>Pig Farming</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Farming in Nakuru</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Bee keeping</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"><strong>Farm Market</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Rice Farming</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Farm Machinery</strong></span>
                                        <span
                                            className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Poultry</strong></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice" data-delimiter="1">
                            <div className="container">
                                <div className="mb-4 text-left">
                                    <h2 className="heading h2 font-weight-800 border-title">Featured Videos</h2>
                                </div>

                                <div className="row cols-xs-space cols-sm-space cols-md-space">
                                    {
                                        videos.map(el => {
                                            return (
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <VideoCard {...props} video={el}/>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </section>
                        {/*<h1 className="h3 mb-3">Farm Kenya Academy ..</h1>*/}
                        {/*<div className='row'>*/}

                        {/*</div>*/}
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
