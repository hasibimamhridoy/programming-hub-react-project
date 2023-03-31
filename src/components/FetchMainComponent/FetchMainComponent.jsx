import React, { useEffect, useState } from 'react';
import BlogBookMarked from '../Home/BlogBookMarked/BlogBookMarked';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FetchMainComponent = () => {

    const [blogs,setBlogs] = useState([])
    const [bookMartked,setBookMarked] = useState([])
    const [readTime,setReadTime] = useState([])

    const [isBookMarked,setIsBookMarked] = useState(false)

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
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
    else{

        alert('Already Added')
        const remaining = bookMartked.filter(pd => pd.id !== id)
        newBookMarked = [...remaining,exist]

    }

    setBookMarked(newBookMarked)
    setIsBookMarked(true)
 
  }


  const handleReadTime = (blog) =>{
    
    let newBookMarked = []
    newBookMarked = [...readTime , blog]
    setReadTime(newBookMarked)
   
  }


    return (
        <div className='MainSection'>

            <Navbar></Navbar>
            <BlogBookMarked isBookMarked={isBookMarked} readTime={readTime} handleReadTime={handleReadTime} bookMartkedBlog={bookMartked} handleBookMarked={handleBookMarked} blogs={blogs}></BlogBookMarked>
            
        </div>
    );
};

export default FetchMainComponent;