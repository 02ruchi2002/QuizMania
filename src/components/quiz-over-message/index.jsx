import React from "react";
import './style.css'
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StartBtnContext } from "../../App";
import { useNavigate } from "react-router-dom";
import {router} from '../../routes/routes.js'

const Message = () => {

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
        <h1 className="msg">Test  has been submited successfully</h1>
        <br />
        <div className="redirect">
            <button onClick={handleResult}>Check your score</button>
            <button onClick={handleBackToHome}>Back To Home</button>
        </div>
        </div>
    )
}
export default Message