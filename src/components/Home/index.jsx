import React from "react";
//import { Container } from "./style";
// import { Input } from "../Generic/Input";
import  Carousel  from "../Carousel";
// import HouseCard from "../HouseCard";
// import CategoryCard from "../CategoryCard"
import Category from "../Category"
import { Container } from "./style";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from '../Recent';
import Banner from '../Banner';



export const Home=()=>{
    return(<Container>
        <Carousel/>
       <Recommended/>
       <Why/>
       {/* <HouseCard></HouseCard> */}
       <Category/>
       <Banner/>
       <Recent/>
     
       {/* <CategoryCard/> */}
        </Container>
    )
};
export default Home;