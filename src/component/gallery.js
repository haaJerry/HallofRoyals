import React from 'react';
import "../styles.scss";
import logo from "../img/logo.png";
import twitter from "../img/twitterlogo.png";
import discord from "../img/discordlogo.png";
import shape1 from "../img/shape-1.220225ab.png";
import shape2 from "../img/shape-2.98e0bfc5.png";
import shape3 from "../img/shape-3.7d9085a0.png";
import Footer from './footer';
import Boot from './boot';

const Gallery = () => {
    return (
        <div className="position-relative gallery-wrapper" id='gallery'>

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

            <img src={shape1} alt="shape-1" className="shape-1" />
            <img src={shape2} alt="shape-2" className='shape-2' />
            <img src={shape3} alt="shape-3" className='shape-3' />


            <div className="container">
                <section className="glassy-wrapper x-section mt-120">
                    <h2 className="section-title">View Your Royal NFT</h2>
                    <div className="mt-20">
                        <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center">
                            <input type="text" className="form-control" placeholder="Enter NFT ID" />
                            <button className="p-button p-component btn btn-primary btn-cap justify-content-center align-items-center"
                                type="submit" >
                                <span className="p-button-label">Reveal</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="glassy-wrapper x-section mt-60">
                    <h2 className="section-title">Royal Gallery</h2>
                    <h4 class="text-center sub-title mt-10"> Sneak Peek of some Royals </h4>
                    <div>
                        <h4 class="text-center mt-40 sub-title">Legendary Royals</h4>
                        <div class="row mt-20">
                            <div class="col-sm-6 col-md-3 showcase-x">
                                <img src="/gallery/1.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Bob Marley</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/2.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Brenda Fassie</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/3.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Steve Jobs</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/4.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Kobe Bryant</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h4 class="text-center mt-40 sub-title">Legendary Royals</h4>
                        <div class="row mt-20">
                            <div class="col-sm-6 col-md-3 showcase-x">
                                <img src="/gallery/1.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Bob Marley</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/2.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Brenda Fassie</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/3.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Steve Jobs</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/4.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Kobe Bryant</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h4 class="text-center mt-40 sub-title">Legendary Royals</h4>
                        <div class="row mt-20">
                            <div class="col-sm-6 col-md-3 showcase-x">
                                <img src="/gallery/1.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Bob Marley</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/2.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Brenda Fassie</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/3.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Steve Jobs</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/4.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Kobe Bryant</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-center mt-40 sub-title">Legendary Royals</h4>
                        <div class="row mt-20">
                            <div class="col-sm-6 col-md-3 showcase-x">
                                <img src="/gallery/1.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Bob Marley</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/2.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Brenda Fassie</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/3.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Steve Jobs</h5></div>
                            <div class="col-sm-6 col-md-3 showcase-x"><img src="/gallery/4.png" alt="" />
                                <h5 class="text-center gallery-name mt-10">Kobe Bryant</h5>
                            </div>
                        </div></div>

                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery