import React from 'react';
import './servicesStyling.css'

const Services = () => {
    return (
        <>
            <div className='service-contents' id='services'>
                <div className='service-intro'>Our Services</div>
                <div className='service-wrapper'>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Rock Chip Repair</h3>
                        <p className='card-text'>Repair and filling of paint chips and the removal of minor scratches</p>
                    </div>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Bumper Repair</h3>
                        <p className='card-text'>Repair and repaint bumper like new! Includes primer, wet sand, custom industry color match and layers of clear coat</p>
                    </div>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Wheel Repair and Repaint</h3>
                        <p className='card-text'>Repair and resurface wheel from damage due to: curbed wheels, dings, and other marks from road debris</p>
                    </div>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Plastic Bumper Welding</h3>
                        <p className='card-text'>Repair and repaint any cracks. Stronger than epoxy. Includes primer, wet sand, custom industry standard color match and layers of clear coat</p>
                    </div>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Insurance Bids</h3>
                        <p className='card-text'>We do insurance jobs and review jobs on a case by case basis. Stop by for an estimate</p>
                    </div>
                    <div className='service-card'>
                        <div className='service-icons'></div>
                        <h3 className='card-headline'>Spot Blend Paint</h3>
                        <p className='card-text'>Repair of small portions of panels: bumpers, doors, hoods, fenders, quarter panels, roof, mirrors, trim</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services