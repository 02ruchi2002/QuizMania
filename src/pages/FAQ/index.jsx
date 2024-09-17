import React from "react";
import './style.css'

const questions = [
    {
        question: " What is this quiz app about?",
        answer: "This quiz app is designed to help users test their knowledge on various topics through multiple-choice questions (MCQs). It provides instant feedback on answers and helps track progress over time."
    },
    {
        question: " How do I start a quiz?",
        answer: "To start a quiz, simply select a category or topic from the available options on the home screen. Then, click on the 'Start Quiz' button to begin."
    },

    {
        question: " How do I select an answer?",
        answer: "For each question, you will see a list of possible answers. Click or tap on the option you believe is correct. Once you select an answer, you can either confirm it or proceed to the next question based on the app’s flow."
    },
    {
        question: " Can I change my answer after selecting it?",
        answer: "Yes, you can change your answer before submitting it or moving to the next question. Once you submit the answer, it cannot be changed."
    },
    {
        question: " How are the scores calculated?",
        answer: "Each correct answer will give you points. Your final score will be displayed at the end of the quiz along with the number of correct and incorrect answers. Some quizzes may have bonus points for faster answers."
    },
    {
        question: " Is there a time limit for each question?",
        answer: "Some quizzes may have a time limit for each question to increase the challenge. If there's a time limit, it will be displayed on the screen while you're taking the quiz."
    },
    {
        question: " Can I review my answers after the quiz?",
        answer: "Yes, after completing the quiz, you will have the option to review your answers and see which ones you got right or wrong, along with explanations for the correct answers."
    },
    {
        question: " Can I pause and resume a quiz?",
        answer: "In most cases, quizzes must be completed in one sitting. However, some quizzes may allow you to pause and resume later, depending on the app settings."
    },
    {
        question: " How do I track my performance?",
        answer: 'Your performance, including scores from past quizzes, can be tracked in the "Progress" or "Profile" section of the app. Here, you can view your best scores, average scores, and improvement over time.'
    },
    {
        question: "Can I take the same quiz more than once?",
        answer: "Yes, you can retake quizzes as many times as you want to improve your score or reinforce your learning. However, your previous score may be overwritten if you choose to retake a quiz."
    },
    {
        question: " Are there different difficulty levels?",
        answer: "Yes, quizzes may have different difficulty levels such as beginner, intermediate, and advanced. You can choose the level that best suits your knowledge or challenge yourself with a harder level."
    },
    {
        question: " Can I suggest questions for the quiz?",
        answer: "Yes! Some versions of the app may allow users to submit their own questions or suggest improvements to existing questions. Check the app’s feedback section for more details."
    },
    {
        question: " Is there a leaderboard?",
        answer: "Yes, there may be a leaderboard where you can see how you rank compared to other users. Scores are often updated in real-time, and you can aim for the top spot!"
    },
    {
        question: " Do I need an account to use the app?",
        answer: "You can use the app without creating an account for general quizzes. However, creating an account will allow you to save your progress, track performance, and compete on leaderboards."
    },
    {
        question: " How can I reset my progress?",
        answer: "To reset your progress, go to the app settings and select the option to clear your quiz history. Be cautious, as this will erase all your scores and data."
    }
]

const Faq = () => {
    return (
        <div className="faq-container">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            {
            questions.map((item,index)=>(<div className="faq-question">
                 <h3> <span>{index+1}.</span> {item.question}</h3>
                  <p>{item.answer}</p>
            </div>))
           }

          
        </div>
    )
}

export default Faq