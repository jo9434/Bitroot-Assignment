import React from "react";
import './Login.css';

export default function Login() {
    return (
        <div className="loginpage" style={{textAlign:"center", height:"45.6vh", width:"60vh", borderRadius:"2.5vh", marginLeft:"28rem", marginTop:"6.2rem"}}>
            <button className="btnclose fa-solid fa-xmark"></button>
            {/* If you want the brand name also to be present with login the use this by uncommenting, even in the css and remove this text, else remove the code
            <h2 className="heading"><u>Book2Save</u><br />Login</h2>*/}
            <h2 className="heading">Login</h2>
            <hr className="col-bar" />
            <form className="loginform">
                <input className="txtbox" type="text" name="uname" id="uname" placeholder="Enter Username..." />
                <br /><br />
                <input className="txtbox" type="password" name="pwd" id="pwd" placeholder="Enter Password..." />
                <br />
                <button className="bttn btn btn-dark" type="submit">login</button>&nbsp;&nbsp;&nbsp;<button className="bttn btn btn-dark">sign up</button>
                {/* If sign up button is clicked, it will redirect to register component else it will be login component */}
                <a className="rdrFgtPwd" href="#">forget username/password?</a> {/* It will redirect to the forget Password Component */}
            </form>
        </div>
    );
}