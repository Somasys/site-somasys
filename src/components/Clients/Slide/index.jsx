import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState, useEffect} from 'react';


const Slide = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          // arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          // arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: 'h-24',
          accessibility: true,
          dots: false,
          // arrows: false,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

const SampleArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`rounded-full block ${className}`}
      style={{ background: '#328381' }}
      onClick={onClick}
    />  
  )
}

export default Slide;
