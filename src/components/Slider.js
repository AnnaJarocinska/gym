import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import S1M from '../trainersPictures/S1M.jpg';
import S2M from '../trainersPictures/S2M.jpg';
import S3M from '../trainersPictures/S3M.jpg';

const Slider = () => {
  return ( 
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={S1M}
      alt="First"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={S2M}
      alt="second"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={S3M}
      alt="Third"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   );
}
 
export default Slider;

