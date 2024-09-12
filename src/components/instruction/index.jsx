import React from "react";
import './style.css'

const Instruction = ({ startQuiz,showMesg }) => {

    const handleStart = () => {
        startQuiz(true)
        showMesg(false)
    }
    return (
        <div className="instruction-container">
           <div className="action">
            <h1>Quiz Instructions</h1>
            <button onClick={handleStart}>Start Quiz</button>
           </div>

            <br />
            <h3>1. Overview:</h3>
            <ul className="instruction-list">
                <li>Objective: Test your general knowledge across various topics.</li>
                <li>Time Limit: You have 15 minutes to complete the quiz.</li>
                <li>Total Questions: There are 20 multiple-choice questions.</li>
                <li>Quiz Format: All questions are multiple-choice. Select the best answer for each question.</li>
            </ul>
         
            <h3>2. Rules:</h3>
            <ul className="instruction-list">
                <li>Single Attempt: You have one attempt to complete the quiz.</li>
                <li>No Backtracking: Once you answer a question, you cannot go back to change your answer.</li>
                <li>Scoring: Each correct answer earns 1 point. There is no penalty for incorrect answers.</li>
            </ul>
          
            <h3>3. Navigation:</h3>
            <ul className="instruction-list">
                <li>Next/Previous Buttons: Click 'Next' to proceed to the next question.</li>
                <li>Submit Button: After completing all questions, click 'Submit' to finalize your answers.</li>
                <li>Timer: The timer at the top of the screen will show the remaining time.</li>
            </ul>
          
            <h3>4. Technical Requirements:</h3>
            <ul className="instruction-list">
                <li>Stable Internet Connection: Ensure you have a reliable connection throughout the quiz.</li>
                <li>Device Compatibility: The quiz can be taken on desktops, laptops, tablets, and smartphones.
                </li>
            </ul>
          
            <h3>5. Integrity:</h3>
            <ul className="instruction-list">
                <li>No Cheating: Complete the quiz independently without external help.</li>
            </ul>
         
            <h3>6. Results:</h3>

            <ul className="instruction-list">
                <li>Immediate Feedback: Your score will be displayed immediately after submitting the quiz.</li>
                <li>Retakes: No retakes are allowed for this quiz.</li>
            </ul>
         
            <h3>7. Support:</h3>
            <ul className="instruction-list">
                <li>Need Help? If you encounter any issues, contact support at support@example.com.</li>
            </ul>
            <br />
            <h1 className="wish">Good Luck!</h1>
        </div>
    )
}

export default Instruction