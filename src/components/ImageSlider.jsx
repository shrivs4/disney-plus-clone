import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/assets/images/slider-badging.jpg" alt="slider-badging" />
      </Wrap>
      <Wrap>
        <img src="/assets/images/slider-badag.jpg" alt="slider-badag" />
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgba(150,158,171);
        }
    }

    li.slick-active button::before{
        color:white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index:1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        height:100%;
        width:100%;
        border-radius:4px;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;
        
        &:hover{
          border: 4px solid rgba(249,249,249,0.8);
        }
    }
`
