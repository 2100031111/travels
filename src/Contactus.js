import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className='classcontainer'>
    <div className='navbar'>
     <img src='Images/image.png'></img>
     <h4>TravelBloom</h4>
     <div className='nav'>
     <a href='/'>Home</a> 
     <a href='/Aboutus'>About Us</a>
     <a href='/ContactUs'>Contact Us</a>
     </div>
      <h2 className="contact-title">CONTACT US</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;