import React from "react";
import './MessageBox.css'
import '../../master.css';

export default function MessageBox() {
    return(
        <div className="msgboxpage border-dark bg-white text dark" style={{textAlign:"center", height:"22.8vh", width:"60vh", borderRadius:"2.5vh", marginLeft:"28rem", marginTop:"10rem"}}>
            <button className="btnclose fa-solid fa-xmark"></button>
            <h4 className="heading"><i className="drawCircle fa-solid fa-info" /> Message Box</h4>
            <hr className="col-bar" />
            <form className="msgbox">
                {/* On Click change username button, it redirects to change username component and On Click change password button, it redirects to change password component.
                Try to add a alert tone when this component loads if possible... */}
                <button className="btnStyle">change username</button>&nbsp;&nbsp;<button className="btnStyle">change password</button>
            </form>
        </div>
    );
}