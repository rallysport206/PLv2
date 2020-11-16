import React from 'react';
import './servicesStyling.css'

const Services = () => {
    return (
        <>
            <div className='service-contents'>
                <div className='service-intro'>Our Services</div>
                <div className='service-wrapper'>
                    <div className='service-card'>
                        <div className='card-headline'>Rock Chip Repair</div>
                        <div className='card-text'>Repair and filling of paint chips and the removal of minor scratches</div>
                    </div>
                    <div className='service-card'>
                        <div className='card-headline'>Bumper Repair</div>
                        <div className='card-text'>Repair and repaint bumper like new! Includes primer, wet sand, custom industry color match and layers of clear coat</div>
                    </div>
                    <div className='service-card'>
                        <div className='card-headline'>Wheel Repair and Repaint</div>
                        <div className='card-text'>Repair and resurface wheel from damage due to: curbed wheels, dings, and other marks from road debris</div>
                    </div>
                </div>
                <div className='service-wrapper'>
                    <div className='service-card'>
                        <div className='card-headline'>Plastic Bumper Welding</div>
                        <div className='card-text'>Repair and repaint any cracks. Stronger than epoxy. Includes primer, wet sand, custom industry standard color match and layers of clear coat</div>
                    </div>
                    <div className='service-card'>
                        <div className='card-headline'>Insurance Bids</div>
                        <div className='card-text'>We do insurance jobs and review jobs on a case by case basis. Stop by for an estimate</div>
                    </div>
                    <div className='service-card'>
                        <div className='card-headline'>Spot Blend Paint</div>
                        <div className='card-text'>Repair of small portions of panels: bumpers, doors, hoods, fenders, quarter panels, roof, mirrors, trim</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services