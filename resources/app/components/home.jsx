import React from 'react';

export default function (props) {
    return (
        <React.Fragment>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5 className="h3 font-weight-400 mb-0 text-white">Moning, {props.user.name}!</h5>
                        <span className="text-sm text-white opacity-8">Have a nice day!</span>
                    </div>
                </div>
            </div>
            <div className="row">
            </div>
        </React.Fragment>
    )
}
