import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const FetchMainComponent = () => {
    
    
    useEffect(()=>{
    fetch('api.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
    return (
        <div className='MainSection'>

            <Navbar></Navbar>
            
        </div>
    );
};

export default FetchMainComponent;