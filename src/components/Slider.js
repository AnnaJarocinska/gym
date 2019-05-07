import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import S1M from '../trainersPictures/S1M.jpg';
import S2M from '../trainersPictures/S2M.jpg';
import S3M from '../trainersPictures/S3M.jpg';
import S5M from '../trainersPictures/S5M.jpg';

import './Slider.css'

const Slider = () => {
  return ( 
  <div className="slider">
    <Carousel>
  <Carousel.Item>
    <div className="slide">
    <img
      className="d-block w-100 "
      src={S1M}
      alt="First"
    />
    </div>
    <Carousel.Caption>
      <p>Tylko u nas! <span className="rock">ostry</span> wycisk i <span className="rock">ostre</span> granie! </p>
      <p> Karnet open już za 100zł! </p>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="slide">
    <img
      className="d-block w-100"
      src={S2M}
      alt="second"
    />
</div>
    <Carousel.Caption>
      <p>Chcesz dbać o formę ale podpisywać umowę na lata niekoniecznie?</p>
      <p>Przyjdź do nas i ćwicz bez zobowiązań! </p>
      <Button variant="danger">Sprawdź</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="slide">
    <img
      className="d-block w-100"
      src={S3M}
      alt="Third"
    />
    </div>

    <Carousel.Caption>
      <p>Masz dość ćwiczeń w rytmie disco?</p>
      <p>Przyjdź do nas! Tu mocy dodaje <span className="rock">rock</span>!</p>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="slide">
    <img
      className="d-block w-100"
      src={S5M}
      alt="Fourth"
    />
    </div>
    <Carousel.Caption>
      <p>Chcesz ćwiczyć na okrągło?</p>
      <p>U nas możesz- siłownia czynna 24h!</p>
      <Button variant="danger">Sprawdź</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   );
}
 
export default Slider;

