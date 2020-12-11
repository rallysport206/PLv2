import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './sliderStyling.css';
import car1 from '../../sliderImg/sl1.png';
import car2 from '../../sliderImg/sl2.jpg';
import car3 from '../../sliderImg/sl3.jpg';
import car4 from '../../sliderImg/sl4.jpg';
import car5 from '../../sliderImg/sl5.jpg';


const slideImages = [
//   {img},
  './sliderImg/sl2.jpg',
  './sliderImg/sl3.jpg',
  './sliderImg/sl4.jpg',
  './sliderImg/sl5.jpg',
  './sliderImg/sl6.jpg',
  './sliderImg/sl7.jpg',
  './sliderImg/sl8.jpg',
  './sliderImg/sl9.jpg',
  './sliderImg/sl10.jpg',
  './sliderImg/sl11.jpg'
];

// function importAll(r) {
//     let images = {};
//     r.keys().map((item,index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./images', false, /\.(png|jp?g)$/));

const Slider = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${car1})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${car2})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${car3})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${car4})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${car5})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Slide 6</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <span>Slide 7</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slider;
