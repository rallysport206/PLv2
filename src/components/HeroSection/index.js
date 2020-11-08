import React from 'react';
import Video from '../../videos/video.mp4';
import './heroStyling.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className='background'>
                <video autoPlay loop muted src={Video} type='video/mp4' />
            </div>
            <div className='content'>
                <h1>Paint Logic</h1>
                <p>Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
            </div>
        </div>
    )
}

export default HeroSection
