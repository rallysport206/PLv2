import React from 'react';
import Video from '../../videos/video.mp4';
import './heroStyling.css';

const HeroSection = () => {
    return (
        <div className='hero-section__content'>
            <div className='hero-section__background'id='hero'>
                <video className='hero-section__video' autoPlay loop muted src={Video} type='video/mp4' />
            </div>
            <div className='content'>
                <h1 className='hero-section__title'>Paint Logic</h1>
                <p className='hero-section__header'>Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
            </div>
        </div>
    )
}

export default HeroSection
