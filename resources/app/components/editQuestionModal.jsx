import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import Loading from "../common/loading";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const handleSubmit = (e) => {
    e.preventDefault();
    debugger
};

export default function (props) {
    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [question, setQuestion] = useState({});
    const [questionData, setQuestionData] = useState('')

    useEffect((e) => {
        setQuestion(props.question)
        console.log(props);
    }, [props.question])

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        setMessageType('alert alert-success');
        setResponse("Exam details have been updated successfully.");
        setComplete(true)
    }

    return (
        <div className="modal fade" id="questionModal" tabIndex="-1" role="dialog"
             aria-labelledby="questionModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    {
                        loading ? <div className="text-center" style={{marginTop: '50px'}}>
                                <ClipLoader color={'#cf2027'}/>
                            </div> :
                            <form onSubmit={handleSubmit} >
                                {
                                    message ?
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className="text-center mt-2">
                                                    <div className={messageType} role="alert">
                                                        <div className="alert-message">
                                                            {response}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : ''
                                }
                                {
                                    complete ? '' :
                                    <div className="card">
                                        <div className='card-header'>
                                            <h5>{question.module}</h5>
                                        </div>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='form-group col-md-12'>
                                                    <label>Question</label>
                                                    <CKEditor
                                                        editor={ ClassicEditor }
                                                        data={question.question}
                                                        onInit={ editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log( 'Editor is ready to use!', editor );
                                                        } }
                                                        onChange={ ( event, editor ) => {
                                                            const data = editor.getData();
                                                            setQuestionData(data)
                                                        } }
                                                    />
                                                </div>
                                            </div>
                                            {
                                                question.hasOwnProperty('options') ?
                                                        question.options.map((el, index) => {
                                                            return (
                                                                <div className='row'>
                                                                    <div className='form-group col-md-12'>
                                                                        <label>Option {index + 1}</label>
                                                                        <CKEditor
                                                                            editor={ ClassicEditor }
                                                                            data={el.option}
                                                                            onInit={ editor => {
                                                                                // You can store the "editor" and use when it is needed.
                                                                                console.log( 'Editor is ready to use!', editor );
                                                                            } }
                                                                            onChange={ ( event, editor ) => {
                                                                                const data = editor.getData();
                                                                            } }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )
                                                        }) : ''
                                            }
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <button type="submit" className="btn btn-sm btn-success btn-rounded float-right">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </form>
                    }
                </div>
            </div>
        </div>
    )
}
