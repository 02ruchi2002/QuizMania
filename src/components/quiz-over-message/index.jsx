import React from "react";
import './style.css'
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StartBtnContext } from "../../App";
import { useNavigate } from "react-router-dom";
import {router} from '../../routes/routes.js'

const Message = ({marks,data}) => {

    const startBtn = useContext(StartBtnContext)

    const navigate = useNavigate()

    const {type} = useParams()

    const handleResult = () => {
         navigate(`/quiz/${type}/score`)
        startBtn(false)
    }

    const handleBackToHome = () => {
        navigate('/')
        startBtn(false)
    }

    return(
        <div className="quiz-over-container">
        <h1 className="msg">Your response have been submited successfully</h1>
        <br />
        <h1> Your score <span className="score">{marks} / {data.length}</span> </h1>
        <div className="redirect">
            <button onClick={handleResult}>Check your score</button>
            <button onClick={handleBackToHome}>Back To Home</button>
        </div>
        </div>
    )
}
export default Message