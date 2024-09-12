import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MediaCard from '../components/Card';
import axios from "axios"

const Single=() =>{



const[singleData,setSingleData]=useState(null)
const {id}=useParams();
useEffect(()=>{
  // fetch(https://fakestoreapi.com/products/{id})
  // .then(res=>res.json())
  // .then(json=>console.log(json))

  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
    console.log(res.singleData);
    setSingleData(res.singleData);
  })
},[])
//yahan loading q ho rhi hai yeh dekhna hai 

return (
    <div>
  {/* <h1>classic single</h1> */}
  {singleData?
  <MediaCard
  title={singleData.title}
  image={singleData.image}
  category={singleData.category}
  title={singleData.title}
  title={singleData.title}
  
  />
:`loading...`}
    </div>
  )
}

export default Single