import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loading from "../common/loading";
import {API} from "../common/constants";

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [video, setVideo] = useState({});

    useEffect((e) => {
        fetchVideo();
    }, [])

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
                setLoading(false)
            }.bind(this)
        })
    }

    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    <React.Fragment>
                        <h1 className="h3 mb-3">{video.longtitle}</h1>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className="card">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item"
                                                src="https://rumble.com/embed/v6un45/?pub=tith" />
                                    </div>
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">{video.title}</h5>
                                        <span className="card-text mb-0" dangerouslySetInnerHTML={ {__html: video.description} } />

                                    </div>
                                </div>
                            </div>
                            {/*<div className='col-md-4'>*/}
                            {/*    <div className="card"><a href="/academy/2000191096/test-rumble-video"><img*/}
                            {/*        className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg"*/}
                            {/*        alt="Unsplash" /></a>*/}
                            {/*        <div className="card-header"><h5 className="card-title mb-0">Test Rumble Video</h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="card"><a href="/academy/2000191096/test-rumble-video"><img*/}
                            {/*        className="card-img-top" src="https://img.youtube.com/vi/M4pf76QFY1s/default.jpg"*/}
                            {/*        alt="Unsplash" /></a>*/}
                            {/*        <div className="card-header"><h5 className="card-title mb-0">Test Rumble Video</h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
