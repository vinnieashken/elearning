import React from 'react';
import {ClipLoader} from "react-spinners";

export default function Loading() {
    return (
        <div className="text-center" style={{marginTop: '220px'}}>
            <ClipLoader/>
        </div>
    );
}
