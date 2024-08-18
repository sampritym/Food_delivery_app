import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import axios from 'axios';
import './Home.css'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'



export default function Home() {

const[foodItems,setFoodItems]=useState([]);
 const[foodCategory,setFoodCategory]=useState([]);

useEffect(() => {
  
  const apiUrl = 'http://localhost:3000/api/food'; 

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setFoodItems(response.data[0]);
      setFoodCategory(response.data[1]);
 
     
    } catch (error) {
      console.error('Error fetching data:', error);
    
    }
  };

  fetchData();
}, []);


  return (
    <div>
        <div className='nav'><Navbar/></div>
       <Carousel/>
       <div className='card-align'> 
  {foodCategory.map((data)=>{
    return(
      <div key={data._id}>
        <div className='category-container'>{data.CategoryName}</div>
        <hr/>
        <div className='card-row'>
          {foodItems.filter((item)=>item.CategoryName===data.CategoryName)
            .map(filterItems=>{return(
              <div key={filterItems._id}>
                <Card className="card"
                  foodItems={filterItems}
                 
    
                  />
              </div>
            )}
          )}
        </div>
      </div>
    )
  })}
</div>
         <div className='footer'><Footer/></div>
    </div>
  )
}
