import React from 'react'

import './CSS/hero.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            <div className='hero-links'>
                <LinkedInIcon fontSize='large'/>
                <GitHubIcon fontSize='large'/>
            </div>
        </div>
    )
}

export default Hero