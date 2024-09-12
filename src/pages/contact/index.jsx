import React from 'react'
import './style.css'

function Contact() {
  return (
    <div class="contact-container">
        <h1 className='contact'>Contact Us</h1>
        <form action="#" method="post">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required/>

            <label for="phone">Your phone number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default Contact;