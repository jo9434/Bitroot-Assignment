import React, { Component } from "react";
import './Register.css';
import '../../master.css';

export default class Register extends Component {
    render() {
        return (
            <div className="regpage border-dark bg-white text-dark" style={{textAlign:"center", height:"66vh", width:"60vh", borderRadius:"2.5vh", marginLeft:"28rem", marginTop:"2.35rem"}}>
                <button className="btnclose fa-solid fa-xmark"></button>
                {/* If you want the brand name also to be present with register the use this by uncommenting, even in the css and remove this text, else remove the code
                <h2 className="heading"><u>Book2Save</u><br />Register</h2>*/}
                <h2 className="heading">Register</h2>
                <hr className="col-bar" />
                <form className="registerform">
                    <input className="txtbox" type="text" name="name" id="name" placeholder="Enter Name..." />
                    <br /><br />
                    <input className="txtbox" type="text" name="email" id="email" placeholder="Enter Email..." />
                    <br /><br />
                    <input className="txtbox" type="text" name="phoneno" id="phoneno" placeholder="Enter Phone No..." />
                    <br /><br />
                    <input className="txtbox" type="text" name="uname" id="uname" placeholder="Enter New Username..." />
                    <br /><br />
                    <input className="txtbox" type="password" name="pwd" id="pwd" placeholder="Enter New Password..." />
                    <br />
                    <button className="bttn1 btn btn-dark" type="submit">register</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className="bttn2 btn btn-dark">login</button>
                </form>
            </div>
        );
    }
}