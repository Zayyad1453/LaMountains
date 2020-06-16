import React, { Component } from 'react';
import Slider from "react-slick";

import img1 from '../images/carousel1.jpg';
import img2 from '../images/carousel2.jpg';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

      <div className="carousel-container p-5 w-100">

        <div className="col-md-12">
          <div className="container">
            <Slider {...settings}>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img1} />
              </div>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img2} />
              </div>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img1} />
              </div>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img2} />
              </div>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img1} />
              </div>
              <div>
                <img className="img-responsive w-75 mx-auto" src={img2} />
              </div>
            </Slider>
          </div>
        </div>
      </div>


    );
  }
}

export default Carousel;
