import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {API, LOADING_SUBSCRIPTION, SUBSCRIPTION_LOADED} from "../common/constants";
import Loading from "../common/loading";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [videos, setVideos] = useState([]);

    useEffect((e) => {
        fetchVideos();
    }, [])

    const fetchVideos = () => {
        $.ajax({
            url: `http://127.0.0.1:8000/api/academy/video`,
            // url: `${API}/academy/video`,
            method: 'get',
            headers: {
                'appkey': 'ELE-2020-XCZ3'
            },
            dataType: 'json',
            error: function (xhr, status, error) {

            }.bind(this),
            success: function (res) {
                setVideos(res);
                setLoading(false)
            }.bind(this)
        })
    }
    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    <React.Fragment>
                        <h1 className="h3 mb-3">Farm Kenya Academy</h1>
                        <div className='row'>
                            {
                                videos.map(el => {
                                    return (
                                        <div className='col-md-3'>
                                            <div className="card">
                                                <Link to={`/academy/${el.id}/player`}>
                                                    <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
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
