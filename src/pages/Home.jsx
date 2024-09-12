import React, { useEffect, useState } from "react";
import MediaCard from "../components/Card";
import { Box } from "@mui/material";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
    //   .then(json => setData(json))
      .then(json => setData(json))

// wrong method showing undefined
    // fetch('https://fakestoreapi.com/products')
    // .then((res)=>{res.json()})
    // .then((json)=>{console.log(json)})

  }, []);
  return (
    <>
      <h1>Home page</h1>
      {/* <MediaCard/> */}
      <Box sx={{display: `flex`,justifyContent: `space-around`,flexWrap: `wrap`,gap: `10px`, margin: `10px`,padding: `10px`,height: `300px`}}>

{data?data.map((item)=>{
  return(
    <Box key={item.id}>
        <MediaCard 
        title={item.title}
        category={item.category}
        description={item.description}
        price={item.price}
        image={item.image}        
        />
    </Box >
   )
  }      
)
:`else`}
</Box>


</>
  )
}


export default Home;
