import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {API} from "../common/constants";
import Loading from "../common/loading";
import {convertToSlug} from "../common/constants/functions";
import {HOME_VIDEOS_UPDATED} from "../common/constants/academy";
import {useDispatch, useSelector} from "react-redux";

export default function (props) {
    const dispatch = useDispatch();

    const videos = useSelector(state => state.academy.homeVideos);
    const [loading, setLoading] = useState(!videos || videos.length <= 0);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');

    useEffect((e) => {
        if (!videos || videos.length <= 0)
            fetchVideos();
    }, [])

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
                    <React.Fragment>
                        <h1 className="h3 mb-3">Farm Kenya Academy ..</h1>
                        <div className='row'>
                            {
                                videos.map(el => {
                                    return (
                                        <div className='col-md-3'>
                                            <div className="card">
                                                <Link to={`/academy/${el.id}/${convertToSlug(el.title)}`}>
                                                    <img className="card-img-top" src={el.platform === 'youtube' ? `https://img.youtube.com/vi/${el.videoURL}/default.jpg` : "https://img.youtube.com/vi/M4pf76QFY1s/default.jpg"} alt="Unsplash" />
                                                </Link>
                                                <div className="card-header">
                                                    <h5 className="card-title mb-0">{el.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
            }
        </React.Fragment>
    )
}