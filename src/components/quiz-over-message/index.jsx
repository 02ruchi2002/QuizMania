import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StartBtnContext } from "../../App";

const Message = ({marks,data}) => {

    const startBtn = useContext(StartBtnContext)

    const handleBack = () => {
        startBtn(false)
    }

    const handleBackToHome = () => {
        startBtn(false)
    }

    return(
        <div className="quiz-over-container">
        <h1 className="msg">Your response have been submited successfully</h1>
        <br />
        <h1> Your score <span className="score">{marks} / {data.length}</span> </h1>
        <div className="redirect">
            <Link to='/quiz' onClick={handleBack}><button>Back</button></Link>
            <Link to='/'><button onClick={handleBackToHome}>Back To Home</button></Link>
        </div>
        </div>
    )
}
export default Message