import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>
          <div className='maindiv'>
            <div className='contentdiv'>
              <div className='socialIcons'>
                <h6 style={{textDecoration:"underline", textUnderlineOffset:"0.4vh", textTransform:"capitalize", textAlign:"left", paddingLeft:"3vh", paddingTop:"2vh"}}>social links</h6>
                <a id='fb' class="fa-brands fa-facebook-square" href='https://facebook.com' />
                <a id='insta' class="fa-brands fa-instagram-square" href='https://instagram.com'/>
                <a id='twtr' class="fa-brands fa-twitter-square" href='https://twitter.com' />
                <a id='mail' class="fa-solid fa-envelope" href='https://gmail.com'></a>
              </div>

              <div className='footerlinks'>
                <div className='link1'>
                  <ul className='list1'>
                    <h6 style={{textDecoration:"underline", textUnderlineOffset:"0.4vh", textTransform:"capitalize", textAlign:"left", marginTop:"-4.5vh", marginLeft:"4vh"}}>useful links</h6>
                    <li className="sublist1 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>trains</a></li>
                    <li className="sublist2 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>bus</a></li>
                    <li className="sublist3 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>flight</a></li>
                    <li className="sublist4 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>ferries</a></li>
                  </ul>
                </div>
                <div className='link2'>
                  <ul className='list2'>
                  <h6 style={{textDecoration:"underline", textUnderlineOffset:"0.4vh", textTransform:"capitalize", textAlign:"left", marginTop: "-25.2vh", marginLeft:"35vh"}}>quick links</h6>
                    <li className="sublist5 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>login</a></li>
                    <li className="sublist6 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>sign up</a></li>
                    <li className="sublist7 fa-solid fa-chevron-right"> <a href='#' style={{color:"black", textUnderlineOffset:"0.4vh"}}>contact us</a></li>
                  </ul>
                </div>
              </div>

              <div className='newsletter-bar'>
                {/*<h6 style={{textDecoration:"underline", textUnderlineOffset:"0.4vh", textTransform:"capitalize", textAlign:"left", marginTop: "-4.5vh", marginLeft:"100vh"}}>newsletter</h6>*/}
                <button className='btnSend btn btn-danger'><i className='iconSend fa-solid fa-paper-plane' /><input className='send-bar text-white' type='text' placeholder='Sign Up for Newsletter...' aria-placeholder='Sign Up for Newsletter...'></input></button>
              </div>

              <div className='search-div'>
                {/*<h6 style={{textDecoration:"underline", textUnderlineOffset:"0.4vh", textTransform:"capitalize", textAlign:"left", marginTop: "-4.5vh", marginLeft:"100vh"}}>search</h6>*/}
                <button className='btnSearch btn btn-warning'><i className='iconSearch fa-solid fa-magnifying-glass' /><input className='search-bar' type='text' placeholder='Search...'></input></button>
              </div>

              <div className='branddiv'>
                &copy; 2016-2019 <b>F2MT</b>. All Rights Reserved.</div>
                <div className='subdiv' style={{textTransform:"capitalize"}}>created by <a className='link' href="https://f2mt.com/index.php">f2mt</a></div>
              </div>
            </div>
        </div>
    )
  }
}
