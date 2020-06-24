import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loading from "../common/loading";
import {API, ENV, PUBLIC_URL} from "../common/constants";
import {useSelector} from "react-redux";
import VideoCard from "./videoCard";
import VideoCardHorizontal from "./videoCardHorizontal";
import {convertToSlug} from "../common/constants/functions";

export default function (props) {
    const oldState = typeof props.history.location.state !== 'undefined' ? props.history.location.state : {};

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const videos = useSelector(state => state.academy.homeVideos);
    const [video, setVideo] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('video') ? oldState.video : {});
    const [videoData, setVideoData] = useState(typeof oldState !== "undefined" && oldState.hasOwnProperty('videoData') ? oldState.videoData : {});


    useEffect((e) => {
        setLoading(true)
        if ($(".slice").offset())
            $('html, body').animate({
                scrollTop: $(".slice").offset().top
            }, 500);
        const newVideoData = (props.history.location.state && props.history.location.state.hasOwnProperty('videoData')) ? props.history.location.state.videoData : {};
        setVideoData(newVideoData)
        setVideo((props.history.location.state && props.history.location.state.hasOwnProperty('video')) ? props.history.location.state.video : {})
        if (newVideoData.hasOwnProperty('embed'))
            setLoading(false);
        else {
            fetchVideo();
        }
    }, [props.match.params.video])

    const fetchVideo = () => {
        $.ajax({
            url: `${API}/academy/video/${props.match.params.video}`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {

            }.bind(this),
            success: function (res) {
                setVideo(res);
                $.ajax({
                    url: `${API}/academy/rumble/search`,
                    data: {
                        video_id: res.videoURL
                    },
                    method: 'get',
                    dataType: 'json',
                    error: function (xhr, status, error) {
                        setLoading(false)
                    }.bind(this),
                    success: function (res) {
                        setLoading(false)
                        setVideoData(res)
                    }.bind(this)
                })
            }.bind(this)
        })
    }

    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    <React.Fragment>
                        {/*<section className="bg-secondary pt-4">*/}
                        {/*    <div className="container">*/}
                        {/*        <div className="owl-stage-outer">*/}
                        {/*            <div className="row d-flex my-2">*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success text-uppercase badge-xlg"><strong>Agriculture</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Livestock</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Crop</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"><strong>Pig Farming</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Farming in Nakuru</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Bee keeping</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase badge-xlg"><strong>Farm Market</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Rice Farming</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Farm Machinery</strong></span>*/}
                        {/*                <span*/}
                        {/*                    className="mb-2 ml-2 badge-xlg badge-pill badge-success  text-uppercase"><strong>Poultry</strong></span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        <section className="slice" data-delimiter="1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-8">
                                        <div className="card border-0">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe className="embed-responsive-item"
                                                        src={videoData.embed ? videoData.embed : `https://rumble.com/embed/${video.videoURL}/?pub=tith`}
                                                        allowFullScreen />
                                            </div>
                                            <div className="card-body text-left">
                                                <h2 className="heading h2 mb-1">
                                                    <span className="d-block font-weight-800">{video.longtitle}</span>
                                                </h2>
                                                <div className="d-block">
                                                    <small className="text-muted">Views 19.1K</small>
                                                    <small className="text-muted">2 months Ago</small>
                                                    <small className="text-muted"> | <i className="fa fa-thumbs-up" /> Like</small>
                                                </div>
                                                <p className="mt-2 text-success font-weight-800">
                                                    {
                                                        video.keywords.split(';').map(el => {
                                                            return (
                                                                <React.Fragment>
                                                                    <i className="far fa-arrow-alt-circle-right" />{` ${el} `}
                                                                </React.Fragment>
                                                            )
                                                        })
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="row">
                                            {
                                                videos.slice(0, 3).map(el => {
                                                    return (
                                                        <VideoCardHorizontal {...props} video={el} />
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>


                                </div>
                                <div className="row cols-xs-space cols-sm-space cols-md-space">
                                    {
                                        videos.slice(0, 16).map(el => {
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
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
