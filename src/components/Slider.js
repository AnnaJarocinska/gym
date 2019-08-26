import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import S1M from '../Pictures/S1M.jpg';
import S2M from '../Pictures/S2M.jpg';
import S3M from '../Pictures/S3M.jpg';
import S5M from '../Pictures/S5M.jpg';
import Player from '../components/Player';
import '../style/Slider.css';
import '../style/Playlist.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlaylistActive: false,
    }
  }


  showPlaylist = (e) => {
    if (!this.state.showPlaylistActive)
      this.setState(prevState => ({
        showPlaylistActive: !prevState.showPlaylistActive
      }))
  };

  render() {

    const play = this.state.showPlaylistActive ? <Player></Player> : null

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
                  <p className="sliderTitle1">Tylko u nas! <span className="rock">ostry</span> wycisk i <span className="rock">ostre</span> granie! </p>
                  <p className="sliderTitle2"> Karnet open już za 100zł! </p>
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
                  <p className="sliderTitle1">Chcesz dbać o formę bez umowy?</p>
                  <p className="sliderTitle2">Przyjdź do nas i ćwicz bez zobowiązań! </p>
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
                  <p className="sliderTitle1"> Masz dość ćwiczeń w rytmie disco?</p>
                  <p className="sliderTitle2"> Przyjdź do nas! Tu mocy dodaje <span className="rock">rock</span>!</p>
                </div>
                <Button variant="danger" onClick={this.showPlaylist.bind(this)}>Sprawdź co teraz gramy!</Button>

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
                  <p className="sliderTitle1"> Chcesz ćwiczyć na okrągło?</p>
                  <p className="sliderTitle2">U nas możesz- siłownia czynna 24h!</p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
        {play}
      </div>
    );
  }
}
export default Slider;

