import React, { useState } from "react";
import Card from "../../components/atoms/card";
import './style.css'
import progammingIllustration from '../../assests/images/programming.svg'
import feedbackIllustration from '../../assests/images/feedback.svg'
// import { Questions } from "../../constant/data";

const topics = ["Html","Css","Javascript","React","Java","Angular","Jquery","Git","Shell-Scripting","Python","Next.js","Vue.js", "Django","Golang","Springboot","Tailwind-css","Scss" ,"Ruby"]

const Dashboard = () => {
    // const [topics,setTopics] = useState(Questions)
    return(
        <>
        <div className="card-list">
            <Card title={'Total Quizes'} count={100}/>
            <Card title={'Total Participants'} count={100}/>
            <Card title={'Quiz Attemps'} count={100}/>
        </div>
        <div className="middle-content">
            <div>
                <h1 className="m-heading">Discover, Learn, Compete!</h1>
                <div className="m-para">
                Our quiz app offers a dynamic way to expand your knowledge while having
                fun. Explore quizzes in categories that interest you, learn new facts, 
                and compete with friends or top players on the leaderboard. It's more 
                than just a quiz—it's an adventure in learning!
                </div>
            </div>
            <div className="programming-illus">
                <img src={progammingIllustration} alt=""/>
            </div>
       
        </div>
        <div className="middle-content">
            <div className="programming-illus">
                <img src={feedbackIllustration} alt=""/>
            </div>
            <div>
                <h1 className="m-heading">Instant Feedback, Endless Fun</h1>
                <div className="m-para">
                With each quiz, get immediate feedback and track your progress. 
                Play, learn, and improve your knowledge every day!
                </div>
            </div>
       
        </div>
        <div className="end-content">
                <h1 className="m-heading">Topics Covered</h1>
                <div className="m-para">
                   {
                    topics.map((item,index)=>(
                      <div className="topic">{item}</div>
                    ))
                   }
            </div>
        </div>
        </>
    )
}

export default Dashboard