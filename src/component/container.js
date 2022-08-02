import React from 'react'
import twitter from "../img/twitterlogo.png"

const Container = () => {
    return (
        <div className='container header-hero-content'>
            <div className='d-flex'>
                <div className='col-md-9'>
                    <h1>Hall Of Royals</h1>
                    <p> Inspired by the Bronze heads of the ancient Benin
                        Kingdom which were cast in honor of Kings and
                        Queens
                    </p>
                    <ul className='mt-15 nav-anchors d-md-none'>
                        <li className='d-inline-block'>
                            <a><img src={twitter} alt="" /></a>
                        </li>
                        <li className='d-inline-block'>
                            <a><img src={twitter} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Container;