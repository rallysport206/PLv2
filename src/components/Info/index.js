import React from 'react';
import './infoStyling.css';


const Info = () => {
    return(
        <>
            <div className='info-section__container'>
                <div className='info-section__wrapper'>
                    <img className='info-section__photo' src='https://freesvg.org/img/sylwetka-polski_fiat_125.png' alt='car' />
                    <div className='info-section__content'>
                        <p className="info-section__topline">Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
                        <h2 className='info-section__headline'>Providing paint and minor body repairs at a lower cost than a body shop with the same high quality and attention to detail. Services include: paint repair from door dings, bumper scuffs, rock chip/road debris removal, curbed wheel repair, insurance claims, and more!</h2>
                        <p className='info-section__subtitle'>Guaranteed Quick Service – Free Estimates – Most Repairs Take One Day!</p>
                    </div>
                </div>
            </div>
        </>    
    )
};

export default Info;