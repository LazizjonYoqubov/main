import React,{useEffect} from "react";
import { Container } from "./style";
 import HouseCard from '../HouseCard';
import { useState } from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import useRequest from "../../hooks/useRequest";
const {REACT_APP_BASE_URL:url}=process.env;


export const Properties=()=>{
  const [data,setData]=useState([])
  const {search}=useLocation();
  const navigate = useNavigate()
  const request = useRequest();

 
  console.log(url);
  useEffect(()=>{
    // fetch(`${'http://localhost:8081/api/v1/houses/list'}${search}`)
    // .then((res)=> res.json())
    // .then((res)=>{
    //   setData(res?.data || []);
    // })
    request({url:`/houses/list${search}`})
  },[search]);
  const onSelect=(id)=>{
    navigate(`/proporties/${id}`)
  };
  return <Container>
    {data.map((value)=>{
        return <HouseCard onClick={()=>onSelect(value.id)} key={value.id} data={value}/>;
      })
    }
  </Container>
};


export default Properties