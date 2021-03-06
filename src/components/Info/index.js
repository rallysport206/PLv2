import React from 'react';
import img from '../../images/feature3.png';
import './infoStyling.css';

const Info = () => {
    return(
        <>
            <div className='info-section__container' id='about'>
                <div className='info-section__wrapper'>
                    <img src={img} alt='car' className='info-section__photo' />
                    <div className='info-section__content'>
                        <p className="info-section__topline">Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
                        <h2 className='info-section__headline'>Providing paint and minor body repairs at a lower cost than a body shop with the same high quality and attention to detail. Services include: paint repair from door dings, bumper scuffs, rock chip/road debris removal, curbed wheel repair, insurance claims, and more!</h2>
                    </div>
                </div>
            </div>
        </>    
    )
};

export default Info;