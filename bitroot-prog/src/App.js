import React from 'react';
import Navbar from './Nav/Nav';
import Home from './Home/Home';
import './App.css';

export default function App() {
  return (
    <section className='main'>
      <div className='sub-nav'>
        <img className='brandlogo' src="https://avatars.githubusercontent.com/u/63720760?s=100&v=4" alt='Bitroot Logo' />
        <h2 className='brandname' style={{textTransform:"capitalize", fontSize:"5.2vh", fontWeight:"280", letterSpacing:"0.2vh", marginLeft:"8.8vh", marginTop:"-6vh"}}>bitroot</h2>
        <Navbar />
        <Home />
      </div>
    </section>
  );
}
{ /* App Component Ends here */}