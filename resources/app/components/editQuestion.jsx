import React, { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import {API, APPNAME, ENV} from "../common/constants";
import ReactDOM from "react-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import {PUBLIC_URL} from "../common/constants";

function Row(props) {
    const [data, setData] = useState('');

    useEffect((e) => {
        // console.log(props);
    }, []);
    const removeComponent = (e) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(`option-${props.rowKey}`).parentNode);
    };

    return (
        <div id={`option-${props.rowKey}`}>
            <div className='row'>
                <div className='form-group col-md-10'>
                    <label>Option</label>
                    <textarea name='option' id={`ta-${props.rowKey}`} className='form-control'
                              defaultValue={props.option.hasOwnProperty('option') ? props.option.option : ''}
                              onChange={ (e) => {
                                  let thisOption = props.option;
                                  thisOption['option'] = $(`#ta-${props.rowKey}`)[0].value;
                                  props.updateOptions({key: props.rowKey, data: thisOption})
                              } }
                    />

                    {/*<CKEditor*/}
                    {/*    editor={ ClassicEditor }*/}
                    {/*    data={props.option.hasOwnProperty('option') ? props.option.option : ''}*/}
                    {/*    onInit={ editor => {*/}
                    {/*        // You can store the "editor" and use when it is needed.*/}
                    {/*        console.log( 'Editor is ready to use!', editor );*/}
                    {/*    } }*/}
                    {/*    onChange={ ( event, editor ) => {*/}
                    {/*        let thisOption = props.option;*/}
                    {/*        thisOption['option'] = editor.getData();*/}
                    {/*        props.updateOptions({key: props.rowKey, data: thisOption})*/}
                    {/*    } }*/}
                    {/*/>*/}
                </div>
                <div className='col-md-2'>
                    <button type='button' className='mt-5 float-right btn btn-sm btn-rounded btn-success' onClick={removeComponent.bind(this)}>Delete Option</button>
                </div>
            </div>
        </div>
    )
}

export default function (props) {
    const oldState = props.location.state;
    const [question] = useState(oldState.hasOwnProperty('question') ? oldState.question : {});
    const [module] = useState(oldState.hasOwnProperty('module') ? oldState.module : {});

    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(question.hasOwnProperty('options') && question.options.length > 0);
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [rowKey, setRowKey] = useState(1);
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [questionData, setQuestionData] = useState((question.hasOwnProperty('question')) ? question.question : '');
    const [options, setOptions] = useState({});
    const [answerOptions, setAnswerOptions] = useState([]);

    useEffect((e) => {
        $( "[id^='option-']" ).remove();
        if (question.hasOwnProperty('options') && question.options.length > 0) {
            if (question.hasOwnProperty('answer')) {
                const answer = question.options.filter(el => {
                    return el.id === question.answer
                })
                if (answer.length > 0)
                    setCorrectAnswer({label: answer[0].option, value: question.answer})
            }
            const allOptions = options;
            allOptions[`id-${question.options[0].id}`] = question.options[0];
            setOptions(allOptions)
            if (question.options.length > 0)
                for (let i = 1; i< question.options.length; i++) {
                    addRow(question.options[i]);
                }
            setLoading(false)
        }
    }, [props.question]);

    const addRow = (option) => {
        var element = document.createElement('div');
        const key = rowKey+1 ;
        const keyToUse = `${option.hasOwnProperty('id') ? `id-${option.id}` : key}`;
        const allOptions = options;
        allOptions[keyToUse] = option;
        ReactDOM.render(<Row key={keyToUse} rowKey={keyToUse} option={option} updateOptions={updateOptions}/>, element);
        $('#options').append(element);
        setRowKey(key);
        var ansOptions = [];
        for (var items in options){
            ansOptions.push( options[items] );
        }
        setOptions(allOptions)
        setAnswerOptions(ansOptions)
    };

    const updateOptions = (option) => {
        const allOptions = options;
        allOptions[option['key']] = option['data'];
        var ansOptions = [];
        for (var items in options){
            ansOptions.push( options[items] );
        }
        setOptions(allOptions)
        setAnswerOptions(ansOptions)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!correctAnswer.value) {
            setProcessing(false);
            setMessage(true);
            setMessageType('alert alert-danger');
            setResponse("Please select the correct answer.");
        } else {
            setMessage(false);
            setProcessing(true);
            let data = {
                moduleid: module.id
            };
            data["questions"] = [
                question.hasOwnProperty('id') ?
                    {
                        "id": question.id,
                        "module_id": module.id,
                        "question": questionData,
                        "answer": correctAnswer.value,
                        "options":
                            answerOptions.map(el => {
                                const data = {
                                    "question_id": question.id,
                                    "option": el.option,
                                }
                                if (el.hasOwnProperty('id'))
                                    data['id'] = el.id
                                return data
                            })

                    } :
                    {
                        "question": questionData,
                        "options":
                            answerOptions.map(el => {
                                return el.option
                            }),
                        "answer": correctAnswer.value
                    }
            ];
            $.ajax({
                url: `${API}/institution/modules/questions/${question.hasOwnProperty('id') ? 'edit' : 'add'}`,
                method: 'post',
                headers: {
                    'appkey': 'ELE-2020-XCZ3'
                },
                data: data,
                error: function (xhr, status, error) {
                    var response = `Sorry an error has occurred. We are working on it. (${xhr.status})`;
                    try {
                        response = JSON.parse(xhr['responseText'])['message']
                    } catch (e) {
                    }
                    setProcessing(false);
                    setMessage(true);
                    setMessageType('alert alert-danger');
                    setResponse(response);
                    $("html, body").animate({scrollTop: 0}, 200);
                }.bind(this),
                success: function (res) {
                    props.history.push({
                        pathname: `/exams/exam/edit/${module.id}`,
                        state: {
                            message: true,
                            message_type: 'alert alert-success',
                            response: "Question updated successfully.",
                        }
                    })
                }.bind(this)
            })
        }
    };

    return (
        <React.Fragment>
            <div id="sliders">
                <div className="full-width">
                    <div className="carousel slide" id="light-slider">
                        <div id="carousel-area">
                            <div className="carousel slide" data-ride="carousel" id="carousel-slider">

                                <div className="carousel-inner smaller" role="listbox">
                                    <div className="carousel-item active">
                                        <img alt="" src={`${PUBLIC_URL}/static/new/img/rendered.png`} style={{height: '76px', objectFit: 'cover'}} />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="section-padding exam">
                <div className="container">
                    {
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
                                                <h5>{module.name}</h5>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='form-group col-md-12'>
                                                        <label>Question</label>
                                                        <CKEditor
                                                            editor={ ClassicEditor }
                                                            data={questionData}
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
                                                        <textarea name='option' id={question.hasOwnProperty('options') && question.options.length > 0 ? `id-${question.options[0].id}` : 'id-0'}
                                                                  className='form-control'
                                                                  defaultValue={question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0].option : ''}
                                                                  onChange={ (e) => {
                                                                      const id = question.hasOwnProperty('options') && question.options.length > 0 ? `id-${question.options[0].id}` : 'id-0';
                                                                      let thisOption = question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0] : {};
                                                                      thisOption['option'] = $(`#${id}`)[0].value;
                                                                      updateOptions({key: question.hasOwnProperty('options') && question.options.length > 0 ? `id-${question.options[0].id}` : 0, data: thisOption})
                                                                  } }
                                                        />
                                                        {/*<CKEditor*/}
                                                        {/*    editor={ ClassicEditor }*/}
                                                        {/*    data={question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0].option : ''}*/}
                                                        {/*    onInit={ editor => {*/}
                                                        {/*        // You can store the "editor" and use when it is needed.*/}
                                                        {/*        console.log( 'Editor is ready to use!', editor );*/}
                                                        {/*    } }*/}
                                                        {/*    onChange={ ( event, editor ) => {*/}
                                                        {/*        let thisOption = question.hasOwnProperty('options') && question.options.length > 0 ? question.options[0] : {};*/}
                                                        {/*        thisOption['option'] = editor.getData();*/}
                                                        {/*        updateOptions({key: question.hasOwnProperty('options') && question.options.length > 0 ? `id-${question.options[0].id}` : 0, data: thisOption})*/}
                                                        {/*    } }*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className='col-md-2'>
                                                        <button type='button' className='mt-5 float-right btn btn-sm btn-rounded btn-success' onClick={addRow.bind(this, {})}>Add Option</button>
                                                    </div>
                                                </div>
                                                <div id='options' />
                                                {
                                                    loading ?
                                                        <div className="text-center" style={{marginTop: '50px'}}>
                                                            <ClipLoader color={'#cf2027'}/>
                                                        </div>
                                                        : <React.Fragment>
                                                            <div className='row'>
                                                                <div className='form-group col-md-6'>
                                                                    <label>Correct Answer</label>
                                                                    <Select name="answerr"
                                                                            defaultValue={correctAnswer}
                                                                            onChange={setCorrectAnswer}
                                                                            options={
                                                                                answerOptions.map( el=> {
                                                                                    return {
                                                                                        "value": el.hasOwnProperty('id') ? el.id : el.option,
                                                                                        "label": el.option,
                                                                                    }
                                                                                })
                                                                            }
                                                                    />
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    {
                                                                        processing ? <ClipLoader /> :
                                                                            <button type="submit" className="btn btn-sm btn-success btn-rounded float-right">Save changes</button>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                            </div>
                                }
                            </form>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
