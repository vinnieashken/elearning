import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import ReactDOM from "react-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Row(props) {
    const [data, setData] = useState('');

    useEffect((e) => {
        console.log(props);
    }, []);
    const removeComponent = (e) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(`option-${props.rowKey}`).parentNode);
    };

    return (
        <div id={`option-${props.rowKey}`}>
            <div className='row'>
                <div className='form-group col-md-10'>
                    <label>Option</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={props.option.hasOwnProperty('option') ? props.option.option : ''}
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            let thisOption = props.option;
                            thisOption['key'] = props.rowKey;
                            thisOption['option'] = data;
                            props.updateOptions(thisOption)
                        } }
                    />
                </div>
                <div className='col-md-2'>
                    <button type='button' className='mt-5 float-right btn btn-sm btn-rounded btn-success' onClick={removeComponent.bind(this)}>Delete Option</button>
                </div>
            </div>
        </div>
    )
}

export default function (props) {
    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [rowKey, setRowKey] = useState(1);
    const [question, setQuestion] = useState({});
    const [questionData, setQuestionData] = useState('');
    const [options, setOptions] = useState({});

    useEffect((e) => {
        $( "[id^='option-']" ).remove();
        setQuestion(props.question);
        if (props.question.hasOwnProperty('options') && props.question.options.length > 1) {
            for (let i = 1; i< props.question.options.length; i++) {
                addRow(props.question.options[i]);
            }
        }
    }, [props.question]);

    const addRow = (option) => {
        var element = document.createElement('div');
        const key = rowKey+1 ;
        const keyToUse = `${option.hasOwnProperty('id')}`;
        const allOptions = options;
        allOptions[key] = option;
        ReactDOM.render(<Row key={key} rowKey={key} option={option} updateOptions={updateOptions}/>, element);
        $('#options').append(element);
        setRowKey(key);
        console.log(options);
        setOptions(allOptions)
    };

    const updateOptions = (option) => {
        const allOptions = options;
        allOptions[option.key] = option;
        console.log(allOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {moduleid: question.moduleId};
        data["questions"] = [
            {
                "question": questionData,
                "options": ["A) Him","B) Her","C) You","D) Them"],
                "answer":"A) Him"
            }
        ];
        debugger;
        // setMessage(false);
        // setProcessing(true);
        // var formData = new FormData($('form#options')[0]);
        // if (question.hasOwnProperty('id'))
        //     formData.append('id', question.id);
        // $.ajax({
        //     url: `${API}/institution/modules/questions/${question.hasOwnProperty('id') ? 'edit' : 'add'}`,
        //     method: 'post',
        //     processData: false,
        //     contentType: false,
        //     data:formData,
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     },
        //     error: function (xhr, status, error) {
        //         var response = JSON.parse(xhr['responseText'])['message'];
        //         setProcessing(false);
        //         setMessage(true);
        //         setMessageType('alert alert-danger');
        //         setResponse(response);
        //         $("html, body").animate({scrollTop: 0}, 200);
        //     }.bind(this),
        //     success: function (res) {
        //         setProcessing(false);
        //         setMessage(true);
        //         setMessageType('alert alert-success');
        //         setResponse(`Module updated successfully.`);
        //
        //     }.bind(this)
        // })
    };

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
                                                            data={question.hasOwnProperty('question') ? question.question : ''}
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
                                                <div className='row'>
                                                    <div className='form-group col-md-10'>
                                                        <label>Option </label>
                                                        <CKEditor
                                                            editor={ ClassicEditor }
                                                            data={question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0].option : ''}
                                                            onInit={ editor => {
                                                                // You can store the "editor" and use when it is needed.
                                                                console.log( 'Editor is ready to use!', editor );
                                                            } }
                                                            onChange={ ( event, editor ) => {
                                                                const data = editor.getData();
                                                            } }
                                                        />
                                                    </div>
                                                    <div className='col-md-2'>
                                                        <button type='button' className='mt-5 float-right btn btn-sm btn-rounded btn-success' onClick={addRow.bind(this, {})}>Add Option</button>
                                                    </div>
                                                </div>
                                                <div id='options' />
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
