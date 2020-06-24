import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {convertToSlug} from "../common/constants/functions";
import {API, PUBLIC_URL} from "../common/constants";

export default function (props) {
    const [loading, setLoading] = useState(true)
    const [video, setVideo] = useState({});
    const [videoData, setVideoData] = useState({});

    useEffect(e => {
        setVideo(props.video);
        setLoading(false);
        fetchVideoData(props.video.videoURL);
    }, [props.video]);

    const fetchVideoData = (id) => {
        $.ajax({
            url: `${API}/academy/rumble/search`,
            data: {
                video_id: id
            },
            method: 'get',
            dataType: 'json',
            error: function (xhr, status, error) {
            }.bind(this),
            success: function (res) {
                setVideoData(res)
            }.bind(this)
        })
    }

    return (
        <React.Fragment>
            {
                loading ? '' :
                    <div className="card border-0">
                        <button type="button" className="btn btn-danger btn-icon-only rounded-circle round-design"
                        onClick={e => {
                            props.history.push({
                                pathname: `/academy/${video.id}/${convertToSlug(video.title)}`,
                                state: {
                                    video: video,
                                    videoData: videoData
                                },
                            });
                        }}>
                            <span className="btn-inner--icon">
                                <i className="fas fa-play" />
                            </span>
                        </button>
                        <Link to={{pathname: `/academy/${video.id}/${convertToSlug(video.title)}`,
                            state: {
                                video: video,
                                videoData: videoData
                            }}}>

                            <img src={videoData.hasOwnProperty('thumbnail') ? videoData.thumbnail : `${PUBLIC_URL}/static/academy/assets/images/lazy.jpg`}
                                 alt={video.title} className="card-img-top" />
                        </Link>
                        <div className="card-body text-left">
                            <h4 className="heading h6 mb-1">
                                <span className="d-block font-weight-800">{video.title}</span>
                            </h4>
                            <div className="d-block">
                                <small className="text-muted">Views 19.1K</small>
                                <small className="text-muted float-right">2 months Ago</small>
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

            }
        </React.Fragment>
    )
}
