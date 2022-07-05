import React from "react";
import './Contact.css';
import '../../master.css';

export default function Contact() {
    return(
        <div className="cnctpage border-dark bg-white text dark" style={{textAlign:"center", height:"62vh", width:"60vh", borderRadius:"2.5vh", marginLeft:"28rem", marginTop:"2.72rem"}}>
            <button className="btnclose fa-solid fa-xmark"></button>
            {/* If you want the brand name also to be present with register the use this by uncommenting, even in the css and remove this text, else remove the code
            <h2 className="heading"><u>Book2Save</u><br />Register</h2>*/}
            <h2 className="heading">Contact Form</h2>
            <hr className="col-bar" />
            <form className="registerform">
                <input className="txtbox" type="text" name="name" id="name" placeholder="Enter Name..." />
                <br /><br />
                <input className="txtbox" type="text" name="email" id="email" placeholder="Enter Email..." />
                <br /><br />
                <input className="txtbox" type="tel" size="12" minLength="10" maxLength="20" name="phoneno" id="phoneno" placeholder="Enter Phone No..." />
                <span id="message"></span>
                <br /><br />
                <textarea className="txtboxarea" type="text" name="message" id="message" placeholder="Enter Message..." maxLength="40" />
                <br />
                <button className="bttn btn btn-dark " type="submit"><i class="fa-solid fa-paper-plane" />&nbsp;&nbsp;send message</button>
            </form>
        </div>
    );
}