import React from 'react';
import img from '../../images/car2.png';
import './estimateStyling.css';



const Info = () => {
    return(
        <>
            <div className='estimate-section__container' id='about'>
                <div className='estimate-section__wrapper'>
                    <img src={img} alt='car' className='estimate-section__photo' />
                    <div className='estimate-section__content'>
                        <h3 className='estimate-section__headline'>Free Estimates</h3>
                        <p className='estimate-section__subtitle'>- Repair estimates are always free! </p>
                        <h3 className='estimate-section__headline'>Quality Repairs</h3>
                        <p className='estimate-section__subtitle'>- Cutting-edge repairs and restoration techniques!</p>
                        <h3 className='estimate-section__headline'>Guaranteed Quick Service</h3>
                        <p className='estimate-section__subtitle'>- Most repairs take one day!</p>
                    </div>
                </div>
            </div>
        </>    
    )
};

export default Info;