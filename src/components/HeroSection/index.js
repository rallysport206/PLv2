import React from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer, 
    HeroBackground,
    HeroVideo,
    HeroContent,
    HeroCompany,
    CompanyP
} from './HeroElements';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBackground>
                    <HeroVideo autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBackground>
                <HeroContent>
                    <HeroCompany>Paint Logic</HeroCompany>
                    <CompanyP>Offering premium quality paint restoration in the Seattle area for over 15 years!</CompanyP>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
