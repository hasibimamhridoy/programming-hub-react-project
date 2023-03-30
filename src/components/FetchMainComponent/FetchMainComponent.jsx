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

    let newBookMarked = []

    const exist = bookMartked.find(pd => pd.id == id)

    if(!exist){

        newBookMarked = [...bookMartked , blog]

    }
    else{

        alert('Already Added')
        const remaining = bookMartked.filter(pd => pd.id !== id)
        newBookMarked = [...remaining,exist]

    }

    setBookMarked(newBookMarked)
 
  }




    return (
        <div className='MainSection'>

            <Navbar></Navbar>
            <BlogBookMarked bookMartkedBlog={bookMartked} handleBookMarked={handleBookMarked} blogs={blogs}></BlogBookMarked>
            
        </div>
    );
};

export default FetchMainComponent;