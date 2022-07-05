import React from "react";
import '../ForgetPassword/ForgetPassword.css';
import '../../../master.css';

export default function ForgetPassword() {
    return(
        <div className="fgtpwdpage border-dark bg-white text dark" style={{textAlign:"center", height:"42vh", width:"60vh", borderRadius:"2.5vh", marginLeft:"28rem", marginTop:"6rem"}}>
            <button className="btnclose fa-solid fa-xmark"></button>
            {/* If you want the brand name also to be present with login the use this by uncommenting, even in the css and remove this text, else remove the code
            <h2 className="heading"><u>Book2Save</u><br />Update Username</h2>*/}
            <h2 className="heading">Update Password</h2>
            <hr className="col-bar" />
            <form className="fgtpwdform">
                <input className="txtbox" type="text" name="type-uname" id="type-uname" placeholder="Enter New Username..." />
                <br /><br />
                <input className="txtbox" type="text" name="retype-uname" id="retype-uname" placeholder="Re-Enter New Username..." />
                <br /><br />
                {/* If change password button is clicked, it will update the password and redirect to login page */}
                <button className="btnStyle" type="submit">change password</button>
            </form>
        </div>
    );
}