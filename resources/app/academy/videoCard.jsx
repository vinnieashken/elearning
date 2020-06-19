import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {convertToSlug} from "../common/constants/functions";
import {API} from "../common/constants";
import {HOME_VIDEOS_UPDATED} from "../common/constants/academy";

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
                    <div className="card">
                        <Link to={{pathname: `/academy/${video.id}/${convertToSlug(video.title)}`,
                        state: {
                            video: video,
                            videoData: videoData
                        }}}>
                            <img className="card-img-top" src={videoData.hasOwnProperty('thumbnail') ? videoData.thumbnail : "https://img.youtube.com/vi/M4pf76QFY1s/default.jpg"} alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">{video.title}</h5>
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}
