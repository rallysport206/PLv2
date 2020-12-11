import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './sliderStyling.css';
import * from '../../sliderImg';

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

function importAll(r) {
    let images = {};
    r.keys().map((item,index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jp?g)$/));

const Slider = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${img})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Slide 5</span>
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
