import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {API, LOADING_SUBSCRIPTION, SUBSCRIPTION_LOADED} from "../common/constants";

export default function (props) {

    useEffect((e) => {
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

            }.bind(this),
            success: function (res) {
                console.log(res);

            }.bind(this)
        })
    }
    return (
        <React.Fragment>
            <h1 className="h3 mb-3">Featured Videos</h1>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="h3 mb-3">Newest Videos</h1>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <Link to={`/academy/v6un45/player`}>
                            <img className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg" alt="Unsplash" />
                        </Link>
                        <div className="card-header">
                            <h5 className="card-title mb-0">How to improve indigenous chicken - Farm Kenya</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
