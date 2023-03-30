import React, { useEffect, useState } from 'react';
import BlogBookMarked from '../Home/BlogBookMarked/BlogBookMarked';
import Navbar from '../Navbar/Navbar';

const FetchMainComponent = () => {

    const [blogs,setBlogs] = useState([])

    const [bookMartked,setBookMarked] = useState([])

    useEffect(()=>{
    fetch('api.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])


  const handleBookMarked = (blog,id) =>{
 
  
  }


    return (
        <div className='MainSection'>

            <Navbar></Navbar>
            <BlogBookMarked handleBookMarked={handleBookMarked} blogs={blogs}></BlogBookMarked>
            
        </div>
    );
};

export default FetchMainComponent;