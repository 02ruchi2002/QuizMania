import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div id='footer'>
                <div className='f-category'>
                    <h2 className='f-heading'>Follow Me</h2>
                    <ul className='f-list'>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='f-category'>
                    <h2 className='f-heading'>Website</h2>
                    <ul className='f-list'>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border"></div>
            <div className="copy-rights">
                Copyright © 2024 QuizMania |  All rights reserved
            </div>

        </div>
    )
}

export default Footer