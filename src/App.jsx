import React, { useState } from 'react';
import logo from './logo.svg';
import "./App.css";

function App() {
  var [toogle,setToogle]= useState(true)
  var [button,setButton]=useState(true)
  const images = [
    {img:"./assets/images/image1.jpg",id:1},
      {img:"./assets/images/image2.jpg",id:2},
    {img:"./assets/images/image3.jpg",id:3},
    {img:"./assets/images/image4.jpg",id:4},
    {img:"./assets/images/image5.jpg",id:5},
    {img:"./assets/images/image6.jpg",id:6},
    {img:"./assets/images/image7.jpg",id:7},
    {img:"./assets/images/image8.jpg",id:8},
    {img:"./assets/images/image9.jpg",id:9},
    {img:"./assets/images/image10.jpg",id:10},
    {img:"./assets/images/image11.jpg",id:11},
    {img:"./assets/images/image12.jpg",id:12},
    {img:"./assets/images/image13.jpg",id:13},
    {img:"./assets/images/image14.jpg",id:14},
    {img:"./assets/images/image15.jpg",id:15},
    {img:"./assets/images/image16.jpg",id:16},
    {img:"./assets/images/image17.jpg",id:17},
    {img:"./assets/images/image18.jpg",id:18},
    {img:"./assets/images/image19.jpg",id:19},
    {img:"./assets/images/image20.jpg",id:20},
    

  ];
   
   function abc(){
     setToogle(!toogle)
     setButton(!button)
   }
   function button2D(){
    setToogle(!toogle)
    setButton(!button)
   }
   
   
   
   return (
    <div>
    <nav>
      {/* <button onClick={abc}>change</button> */}
      {toogle?<button onClick={button2D}>3D</button>:<button onClick={abc}>2D</button>}
      {button?<div className='body'>
         <div className='slider'>
      
      {
         images && images.map((item,index)=>{
          return <span style={{"--i":`${item.id}`}} key={index+1}>
            <img src={item.img} alt="" />
          </span>
         }
          
        )
      }
  
    </div>
    </div>:<div className='d-flex flex-wrap'>
      {
         images && images.map((car,i)=>{
          return <div  key={i+1}>
            <img src={car.img} width="320px" height="320px" alt="" />
          </div>
         }
          
        )
      }
  
  </div>
    }
      
  
</nav>

    </div>
  );
}

export default App;
