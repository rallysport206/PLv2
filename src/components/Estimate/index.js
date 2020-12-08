import React from 'react';
import img from '../../images/feature3.png';
import './estimateStyling.css';

const Info = () => {
    return(
        <>
            <div className='estimate-section__container' id='about'>
                <div className='estimate-section__wrapper'>
                    <img src={img} alt='car' className='estimate-section__photo' />
                    <div className='estimate-section__content'>
                        <p className="estimate-section__topline">Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
                        <h2 className='estimate-section__headline'>Providing paint and minor body repairs at a lower cost than a body shop with the same high quality and attention to detail. Services include: paint repair from door dings, bumper scuffs, rock chip/road debris removal, curbed wheel repair, insurance claims, and more!</h2>
                        <p className='estimate-section__subtitle'>Guaranteed Quick Service – Free Estimates – Most Repairs Take One Day!</p>
                    </div>
                </div>
            </div>
        </>    
    )
};

export default Info;