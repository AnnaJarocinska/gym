import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import S1M from '../Pictures/S1M.jpg';
import S2M from '../Pictures/S2M.jpg';
import S3M from '../Pictures/S3M.jpg';
import S5M from '../Pictures/S5M.jpg';

import './Slider.css'

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <div className="slide first">
            <div className="sliderImage">
              <img
                className="d-block w-100"
                src={S1M}
                alt="First"
              />
            </div>
            <Carousel.Caption>
              <div className="carouselCaption">
                <h1>Tylko u nas! <span className="rock">ostry</span> wycisk i <span className="rock">ostre</span> granie! </h1>
                <h2> Karnet open już za 100zł! </h2>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide second">
            <div className="sliderImage">
              <img
                className="d-block w-100"
                src={S2M}
                alt="second"
              />
            </div>
            <Carousel.Caption>
              <div className="carouselCaption">
                <h1>Chcesz dbać o formę bez umowy?</h1>
                <h2>Przyjdź do nas i ćwicz bez zobowiązań! </h2>
              </div>
              <Link to="/Offer"><Button variant="danger">Sprawdź</Button></Link>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>

          <div className="slide third">
            <div className="sliderImage">
              <img
                className="d-block w-100"
                src={S3M}
                alt="Third"
              />
            </div>

            <Carousel.Caption>
              <div className="carouselCaption">
                <h1>Masz dość ćwiczeń w rytmie disco?</h1>
                <h2>Przyjdź do nas! Tu mocy dodaje <span className="rock">rock</span>!</h2>
              </div>
              <Link to="/Playlist"><Button variant="danger">Sprawdź co teraz gramy!</Button></Link>

            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide fourth">
            <div className="sliderImage">
              <img
                className="d-block w-100"
                src={S5M}
                alt="Fourth"
              />
            </div>
            <Carousel.Caption>
              <div className="carouselCaption">
                <h1>Chcesz ćwiczyć na okrągło?</h1>
                <h2>U nas możesz- siłownia czynna 24h!</h2>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

