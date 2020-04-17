import React, { useEffect, useState } from 'react';
import {API, APPNAME, ENV, PUBLIC_URL} from "../common/constants";
import Loading from "../common/loading";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import ExamQuestionModal from './editQuestionModal';

export default function (props) {
    const [exam, setExam] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showAns, setShowAns] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState( '');
    const [response, setResponse] = useState('');
    const [question, setQuestion] = useState({});

    useEffect(() => {
        getExam();
    }, []);

    const getExam = () => {
        $.ajax({
            url: `${API}/questions/module/${props.match.params.exam}?userid=2`,
            method: 'GET',
            error: function (xhr, status, error) {
                var response = JSON.parse(xhr['responseText'])['message'];
                if (xhr.status === 405)
                    response = "Sorry an error has occurred. We are working on it. (405)";
                setLoading(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                setExam(res);
                setLoading(false);
            }.bind(this)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setMessage(false);
        let marks = 0;
        let answers = [];
        exam.questions.forEach((el) => {
            const ans = $(`input[name="${el.id}"]:checked`).val();
            if (parseInt(el.answer) === parseInt(ans)) {
                marks += 1;
            }
            answers.push({"questionid": el.id, "optionid": parseInt(ans)})
        });
        let data = {
            "moduleid": props.match.params.module,
            "userid": props.user.id,
            "answers": answers
        };
        marks = (marks / exam.length) * 100;
        $.ajax({
            url: `${API}/questions/module/user/answers`,
            data: data,
            method: 'POST',
            error: function (xhr, status, error) {
                var response = `Sorry an error has occurred. We are working on it. ${xhr.status}`;
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-danger');
                setResponse(response);
            }.bind(this),
            success: function (res) {
                const score = JSON.parse(res);
                setShowAns(true);
                setProcessing(false);
                setMessage(true);
                setMessageType('alert alert-success');
                setResponse(<h4>Congratulations, you have scored {score['Score']} / {score['Questions']}. <Link to={`${ENV}exams/modules`}>You can do another paper here</Link></h4>);
                $("html, body").animate({scrollTop: 0}, 200);
            }.bind(this)
        })
    };

    return (
        <React.Fragment>
            <div id="about" className="section-padding mt-md-5 exam">
                <div className="container mt-md-5">
                    {
                        loading ? <Loading/> :
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="section-title wow fadeInDown animated mt-5" data-wow-delay="0.3s">{`${exam.name}`}</h2>
                                    </div>
                                </div>
                                {
                                    <div className="row">
                                        <div className="col-md-4 mt-md-5" style={{display: 'none'}}>
                                            <div className="sticky-top pt-md-5">
                                                <div className="pt-5 mt-2 d-none d-md-block d-lg-block">
                                                </div>
                                                <table className="table mb-4">
                                                    <thead className="mb-3">
                                                    <tr>
                                                        <p>This Paper contains <font className="bold"> 100</font> Questions to be completed
                                                            within <font className="bold">1hr 20min</font></p>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row" className="">Start Time</th>
                                                        <td>10:00 am</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Time Taken</th>
                                                        <td>25 min</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Time Remaining</th>
                                                        <td>45 min</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Questions Attempted</th>
                                                        <td>10</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table mb-4">
                                                    <thead className="">
                                                    <tr>
                                                        <h5 className="text-center">Questions Progress <font class="donetxt">(Red
                                                            Attempted)</font></h5>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td className="done">2</td>
                                                        <td>3</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>6</td>
                                                        <td>7</td>
                                                        <td className="done">32</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td className="done">17</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {
                                            loading ? <Loading/> :
                                                <div className='col-md-12'>
                                                    <form onSubmit={handleSubmit}>
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
                                                            exam.questions.length > 0 ?
                                                                <React.Fragment>
                                                                    {
                                                                        exam.questions.map((el, index) => {
                                                                            const ansArray = userAnswers.filter(ans => {
                                                                                return el.id === ans.question_id;
                                                                            });
                                                                            const answer = ansArray.length > 0 ? ansArray[0] : {};
                                                                            return (
                                                                                <div className='row'>
                                                                                    <div className="col-md-12">
                                                                                        <div className="card examcard my-4 mt-md-0 w-100" >
                                                                                            <ul className="bg-white float-right" >
                                                                                                <li className="text-center p-1">
                                                                                                    <button type='button' className='mb-3 float-right btn btn-sm btn-rounded btn-success' data-toggle="modal" data-target="#questionModal" onClick={e=> {
                                                                                                        let question = el;
                                                                                                        question['module'] = exam.name;
                                                                                                        setQuestion(question);
                                                                                                    }}>
                                                                                                        Edit<br /><i className='fa fa-pencil' />
                                                                                                    </button>
                                                                                                   </li>
                                                                                            </ul>
                                                                                            <ul className="list-group list-group-flush">
                                                                                                <li className="list-group-item">

                                                                                                    <span dangerouslySetInnerHTML={ {__html: `<b>${index+1}</b>. ${el.question}`} } />
                                                                                                    {/*<font class="number">.</font> What is meant by the term binomial nomenclature?*/}

                                                                                                </li>
                                                                                                {
                                                                                                    el.options.map((ans) => {
                                                                                                        const isAns = parseInt(el.answer) === parseInt(ans.id);
                                                                                                        return (
                                                                                                            <React.Fragment>
                                                                                                                <li className={`list-group-item ml-4 ${isAns ? 'alert-success' : ''}`}>
                                                                                                                    <input type="radio" id={`${ans.id}`} required={true}
                                                                                                                           defaultChecked={isAns}
                                                                                                                           disabled={answer.hasOwnProperty('user_option')}
                                                                                                                           value={ans.id} name={el.id} />
                                                                                                                    <label htmlFor={`${ans.id}`} className={isAns ? 'answer' : ''}>
                                                                                                                        <span dangerouslySetInnerHTML={ {__html: `${ans.option}`} } />
                                                                                                                    </label>
                                                                                                                </li>
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }

                                                                    {
                                                                        processing ? <ClipLoader /> : showAns ? '' :
                                                                            <div className='row'>
                                                                                <div className="col-md-12">
                                                                                    <button type='submit' className="text-center float-right btn btn-success btn-rounded">Submit</button>
                                                                                </div>
                                                                            </div>
                                                                    }
                                                                </React.Fragment> : ''
                                                        }
                                                    </form>
                                                </div>
                                        }
                                    </div>
                                }
                            </React.Fragment>
                    }
                </div>
            </div>
            <ExamQuestionModal question={question} />
        </React.Fragment>
    )
}
