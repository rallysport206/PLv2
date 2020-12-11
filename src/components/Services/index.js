import React from 'react';
import './servicesStyling.css'
import bids from '../../images/bids.svg'
import repair from '../../images/repair.svg'
import car5 from '../../images/car5.svg'
import car6 from '../../images/car6.svg'
import car7 from '../../images/car7.svg'
import car8 from '../../images/car8.svg'

const Services = () => {
    return (
        <>
            <div className='service-contents' id='services'>
                <div className='service-intro'>Our Services</div>
                <div className='service-wrapper'>
                    <div className='service-card'>
                        <img src={car5} alt='car' className='service-icons'></img>
                        <h3 className='card-headline'>Rock Chip Repair</h3>
                        <p className='card-text'>Repair and filling of paint chips and the removal of minor scratches</p>
                    </div>
                    <div className='service-card'>
                        <img src={repair} alt='cars in front of buildings' className='service-icons'></img>
                        <h3 className='card-headline'>Bumper Repair</h3>
                        <p className='card-text'>Repair and repaint bumper like new! Includes primer, wet sand, custom industry color match and layers of clear coat</p>
                    </div>
                    <div className='service-card'>
                        <img src={car6} alt='car' className='service-icons'></img>
                        <h3 className='card-headline'>Wheel Repair and Repaint</h3>
                        <p className='card-text'>Repair and resurface wheel from damage due to: curbed wheels, dings, and other marks from road debris</p>
                    </div>
                    <div className='service-card'>
                        <img src={car7} alt='car' className='service-icons'></img>
                        <h3 className='card-headline'>Plastic Bumper Welding</h3>
                        <p className='card-text'>Repair and repaint any cracks. Stronger than epoxy. Includes primer, wet sand, custom industry standard color match and layers of clear coat</p>
                    </div>
                    <div className='service-card'>
                        <img src={bids} alt='cars with bids' className='service-icons'/>
                        <h3 className='card-headline'>Insurance Bids</h3>
                        <p className='card-text'>We do insurance jobs and review jobs on a case by case basis. Stop by for an estimate</p>
                    </div>
                    <div className='service-card'>
                        <img src={car8} alt='car' className='service-icons'></img>
                        <h3 className='card-headline'>Spot Blend Paint</h3>
                        <p className='card-text'>Repair of small portions of panels: bumpers, doors, hoods, fenders, quarter panels, roof, mirrors, trim</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services