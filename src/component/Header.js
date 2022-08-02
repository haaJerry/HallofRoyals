import React, { useState } from 'react'

import Container from './container';
import "./header.scss";
import "../styles.scss";
import logo from "../img/logo.png";
import twitter from "../img/twitterlogo.png";
import discord from "../img/discordlogo.png";
import shape1 from "../img/shape-1.220225ab.png";
import shape2 from "../img/shape-2.98e0bfc5.png";
import shape3 from "../img/shape-3.7d9085a0.png";
import shape4 from "../img/shape-4.b1c9d318.png";
import shape5 from "../img/shape-5.6e284449.png";
import shape6 from "../img/shape-6.e251374a.png";
import shape7 from "../img/shape-7.4f651c96.png";
import shape8 from "../img/shape-8.png";
import shape9 from "../img/shape-9.png";
import shape10 from "../img/shape-10.png";
import shape11 from "../img/shape-11.png";
import shape12 from "../img/shape-12.png";
import shape13 from "../img/shape-13.png";


import Boot from './boot';









const Header = () => {

  return (
    <div id='home' className='header-area' >


      <div className="navbar-area">
        <div className='contanier'>
          <div className="d-flex justify-content-between justify-content-md-start">
            <a aria-current="page" href="/" className="router-link-active router-link-exact-active">
              <img
                src={logo}
                className="logo"
                alt="logo"
              />


            </a>

            <ul class="ml-md-200 nav-anchors">
              <li class="d-inline-block">
                <Boot />

              </li>

              <li class="d-none d-md-inline-block">
                <a
                  href="https://twitter.com/HallofRoyals?s=09"
                  target="_blank"
                  rel="noreferrer"
                ><img src={twitter} alt=""
                  /></a>
              </li>
              <li class="d-none d-md-inline-block">
                <a
                  href="https://discord.gg/hall-of-royals"
                  target="_blank"
                  rel="noreferrer"
                ><img src={discord} alt=""
                  /></a>
              </li>
            </ul>
          </div>
        </div>

      </div >

      <Container />
      <img src={shape1} alt="shape-1" className="shape-1" />
      <img src={shape2} alt="shape-2" className='shape-2' />
      <img src={shape3} alt="shape-3" className='shape-3' />
      <img src={shape4} alt="shape-4" className="d-none d-sm-block shape-4" />
      <img src={shape5} alt="shape-5" className='shape-5' />
      <img src={shape6} alt="shape-6" className='shape-6' />
      <img src={shape7} alt="shape-7" className='shape-7' />


      <img src={shape8} alt="shape-8" class="shape-8" />
      <img src={shape9} alt="shape-9" class="shape-9" />
      <img src={shape10} alt="shape-10" class="shape-10" />
      <img src={shape11} alt="shape-11" class="shape-11" />
      <img src={shape12} alt="shape-12" class="shape-12" />
      <img src={shape13} alt="shape-13" class="shape-13" />



    </div >
  )
}

export default Header;