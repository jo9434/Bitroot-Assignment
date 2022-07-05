import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ForgetPassword from "./components/MessageBox/ForgetPassword/ForgetPassword";
import ForgetUsername from "./components/MessageBox/ForgetUsername/ForgetUsername";
import MessageBox from "./components/MessageBox/MessageBox";
import PageNotFound from "./components/Page-Not-Found/PageNotFound";
import Contact from "./components/Contact/Contact";
import './App.css';
import './master.css';

export default function App() {
  return (
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
        <ForgetUsername />
        {/*
        <Login />
        <Contact />
        <Register />
        <About />
        <Home />
        <MessageBox />
        <ForgetPassword />
        <PageNotFound />
        <ForgetUsername /> */}
      </div>
    </section>
  );
}
/* App.js Ends Here */