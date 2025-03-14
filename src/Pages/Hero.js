import React from 'react'

import './CSS/hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='main-element'>
                <div className='main-text'>
                    Designs
                </div>
                <div className='sub-text'>
                    Made By Pritesh
                </div>
                <button className='hero-button'>
                    CONTACT
                </button>
                <div className='scroll-down'>
                    <text>Scroll Down</text>
                </div>
            </div>
        </div>
    )
}

export default Hero