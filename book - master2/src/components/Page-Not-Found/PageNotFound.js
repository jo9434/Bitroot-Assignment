import React from "react";
import "./PageNotFound.css";
import "../../master.css";

export default function PageNotFound() {
    return(
        <section className="main">
            <div className="errmsgcard card bg-white">
                <button className="btnclose fa-solid fa-xmark" />
                {/*<p className="text-danger" style={{fontFamily:"'Courier New', Courier, monospace", fontSize: "24px", fontWeight: "540", marginLeft: "16vh", marginTop: "6vh", paddingTop: "3.5vh", marginBottom: "-2vh", textTransform: "capitalize"}}>error {{error404}}&nbsp;{{errorDesc}}</p>*/}
                <p className="errorMsg"><b className="black">sorry for the inconvience caused!</b><i className="black fa-solid fa-face-frown" style={{marginLeft:"1.2vh"}} /><hr style={{border: "2px solid black", opacity: "50%", marginTop: "1vh !important", marginBottom: "1vh !important", width: "75.8vh"}}/>dear user,<br /><br />great minds are working, to offer you a better service.<br />meanwhile, kindly login/register to use our app.</p><p className="errorMsg2">with regards,<br />&nbsp;-team b2S.</p>
                <a className="returnMainSection">return to login</a>
            </div>
        </section>
    );
}