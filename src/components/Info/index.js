import React from 'react';
import './infoStyling.css';


const Info = ({lightBg, id, imgStart, headline, lightText, darkText, description, img, alt, 
topLine
}) => {
    return(
        <div className='info-container' lightBg={lightBg} id={id}>
            <div className='info-wrapper'>
                <div className='info-row' imgStart={imgStart}>
                    <div className='column1'>
                    <div className='text-wrapper'>
                        <p className="topline">Offering premium quality paint restoration in the Seattle area for over 15 years!</p>
                        <h2>Providing paint and minor body repairs at a lower cost than a body shop with the same high quality and attention to detail. Services include: paint repair from door dings, bumper scuffs, rock chip/road debris removal, curbed wheel repair, insurance claims, and more!</h2>
                        <p className='subtitle' darkText={darkText}>Guaranteed Quick Service – Free Estimates – Most Repairs Take One Day!</p>
                    </div>
                    </div>
                    <div className='column2'>
                        <div className='img-wrap'>
                        <ing src='../../images/car.png' alt='Shop Front'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default Info;