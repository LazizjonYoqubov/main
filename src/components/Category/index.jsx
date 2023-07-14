

// import React, { useEffect, useRef, useState } from "react";
// import {  Container } from "./style";
// // import {  Carousel } from "antd";
// import CategoryCard from "../CategoryCard";
// import Slider from "react-slick";

// const {REACT_APP_BASE_URL:url}=process.env;

// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "20px",
//   slidesToShow: 4,
//   speed: 500
// };
 




// export const GenCarousel = () => {
//   const [data,setData] = useState([])
 

 


//   useEffect(()=>{
//     fetch(`${url}/houses/list`)
//     .then((res)=> res.json())
//     .then((res)=>{
//       setData(res?.data || []);
//     })
//   },[]);
//   return (


//     <Container>
//     <Slider {...settings}>
//         {
//           data.map((value)=>{
//             return   <CategoryCard/>;

//           })
//         }
     
//       </Slider>
//     </Container>
//   );
// };

// export default GenCarousel;







import React, { useEffect, useState } from 'react';
import { Container,Content } from './style';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../CategoryCard';

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '25px',
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};

export const GenCarousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  console.log(data);
  return (
    <Container>
       <Content>
        <h1 className='title'>Category</h1>
        <div className='info'>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;