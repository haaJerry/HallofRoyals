import React from 'react';
import "../styles.scss";
import shape18 from "../img/shape-18.3f566976.png";
import shape19 from "../img/shape-19.00c5664c.png";
import logoicon from "../img/logo-icon.png";



const Footer = () => {
    return (
        <footer class="x-glassy-wrapper mt-60 mb-30 position-relative pl-30 pr-30 pb-30 pt-100">
            <img src={shape18} alt="" className="shape-18" />
            <img src={shape19} alt="description" className="shape-19" />
            <div class="container x-container">
                <div className="row justify-content-center footer-nav">
                    <div className="col-md-4">
                        <h2>Project</h2>
                        <ul>
                            <li><a href='#Mint'><span class="clickable">Mint</span> </a> </li>
                            <li> <a href='#Story'><span class="clickable">Story </span> </a></li>
                            <li><a href='#Roadmap'> <span class="clickable">Roadmap </span></a></li>
                            <li><a href='#Team'><span class="clickable">Team </span></a> </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-md-flex flex-column justify-content-center align-items-center">
                        <h2>Socials</h2>
                        <ul>
                            <li><a href="https://discord.gg/hall-of-royals" target="_blank" rel="noreferrer">Discord</a></li>
                            <li><a href="https://twitter.com/HallofRoyals?s=09" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com/hall_of_royals?utm_medium=copy_link" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="//" target="_blank" rel="noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="mt-50 d-flex justify-content-center">
                <div class="d-flex align-items-center footer-logo">
                    <img src={logoicon} alt="" />
                    <h3>Hall Of Royals</h3>
                    <img src={logoicon}alt="" />
                </div>
            </div>
            <div class="mt-10 d-flex justify-content-center">
                <p>A royal hall of fame</p>
            </div>
            <div class="mt-40 d-flex justify-content-center">
                <p class="copyright">&copy; 2022 Hall Of Royals. All rights reserved</p>
            </div>
      
            
        </footer >
    )
}

export default Footer;