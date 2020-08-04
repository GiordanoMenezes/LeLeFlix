import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color: ${props => props.color};
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin:16px 16px;
  transition: transform 0.3s;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;


const Slider = ({ children,categorycolor }) => (
  <Container color={categorycolor}>
    <SlickSlider {...{
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: "linear",
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 