import React, { useRef } from "react";
import { Arrow, Container, Img, Blur, Content } from "./style";
import {  Carousel } from "antd";
import img1 from "../../assets/im/unsplash_2gDwlIim3Uw.png";
import img2 from "../../assets/im/bb.png";





export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'right') slider.current.next();
    if (name === 'left') slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className='subChild'>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
      </Content>
      <Arrow data-name='left' onClick={onMove} left />
      <Arrow data-name='right' onClick={onMove} name='right' />
    </Container>
  );
};

export default GenCarousel;

