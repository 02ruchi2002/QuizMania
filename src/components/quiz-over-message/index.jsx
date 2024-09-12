import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Message = ({marks}) => {

    return(
        <div className="quiz-over-container">
        <h1 className="msg">Your response have been submited successfully</h1>
        <br />
        <h1> Your score <span className="score">{marks} / 10</span> </h1>
        <div className="redirect">
            <Link to='/quiz'><button>Back</button></Link>
            <Link to='/'><button>Back To Home</button></Link>
        </div>
        </div>
    )
}
export default Message