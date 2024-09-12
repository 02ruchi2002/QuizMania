import React from 'react'
import './style.css';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='f-category'>
            <h2 className='f-heading'>Follow Me</h2>
            <ul className='f-list'>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Github</li>
            </ul>
        </div>
        <div className='f-category'>
            <h2 className='f-heading'>Website</h2>
            <ul className='f-list'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
            </ul>
        </div>
        
    </div> 
  )
}

export default Footer