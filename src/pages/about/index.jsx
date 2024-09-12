import React from 'react'
import aboutIllustration from '../../assests/images/about.svg'
import './style.css';

const offers = [
'Wide range of quiz topics from general knowledge to niche subjects.',
'Multiple difficulty levels to suit all players.',
'Instant feedback on each answer to enhance your learning.',
'Competitive leaderboard to challenge your friends and yourself.',
'Regularly updated questions to keep the quizzes fresh and exciting.'
]

function About() {
  return (
    <div class="about-container">
        {/* <h1>About Us</h1> */}
        <div className='a-tagline'>
            <div>
                {/* <h2>Welcome to our Quiz App!</h2> */}
                <p> We're passionate about making learning fun and interactive. Our app is designed to challenge your knowledge across various topics and help you improve your skills through engaging quizzes.</p>
            </div>
            <img src={aboutIllustration} alt=''/>
        </div>
        <h2>Our Mission</h2>
        <p>Our mission is to make learning accessible, enjoyable, and effective. Whether you're a student, a trivia enthusiast, or just looking to sharpen your mind, our quiz app is the perfect platform for you!</p>
        <br />
        <h2>What We Offer</h2>
        <div className='offers'>
        { offers.map((item, idx) => (
            <div className='offer' key={idx}>
               <div>{item}</div>
            </div>
        ))}
        </div>
        <br />
        <h2>Join the Fun!</h2>
        <p>Start playing now and discover just how much fun learning can be! Whether you're testing your knowledge or simply playing for fun, our app is designed for everyone. </p>
        <br />
    </div>
  )
}

export default About