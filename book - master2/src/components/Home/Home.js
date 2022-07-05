import React from "react";

export default function Home() {
    return(
        <section className='main'>
            <div className='navbar-comp'>
                <h2 className='appname'>Book2Save</h2>
                <nav className='navbar'>
                {/* Move the active class to navLogin to see the effect of the active component but
                that will be done with the implementation of a click on the login and about and contact routes
                on the click it will redirect to the new route and set the active class for that selected route*/}
                <li className='navHome active'>home</li>
                <li className='navLogin'>login</li>
                <li className='navAbout'>about</li>
                <li className='navContact'>contact us</li>
                </nav>
            </div>
            <div style={{marginTop:"2vh", marginLeft:"4vh", fontFamily:"Dosis"}}>
                <br />
                {/*
                <Login />
                <br />
                <Register />
                <About />
                <Home /> */}
            </div>
        </section>
    );
}