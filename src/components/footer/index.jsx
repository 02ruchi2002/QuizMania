
import './style.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {

    return (

        <div className="footer-container">
            <div id='footer'>
                <div className='f-category'>
                    <h2 className='f-heading'>Follow Me</h2>
                    <ul className='f-list'>
                        <li>
                            <FaLinkedin className='linkedin-icon' />
                            <Link target='_blank' to='https://www.linkedin.com/feed/'>
                                LinkedIn</Link>
                        </li>
                        <li>
                            <FaGithub className='github-icon' />
                            <Link target='_blank' to='https://github.com/02ruchi2002'>
                                Github</Link>
                        </li>
                        <li>
                            <FaInstagramSquare className='insta-icon' />
                            <Link>Instagram</Link>
                        </li>
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