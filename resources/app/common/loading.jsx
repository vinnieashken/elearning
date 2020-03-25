import React from 'react';
import {ClipLoader} from "react-spinners";

export default function Loading() {
    return (
        <div className="text-center">
            <ClipLoader color={'#cf2027'}/>
        </div>
    );
}
