import React, { useEffect, useState } from 'react';
import BlogBookMarked from '../Home/BlogBookMarked/BlogBookMarked';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionsAndAnswer from '../QuestionAndAnswer/QuestionsAndAnswer';

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
        toast.success('Bookmarked!', {
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

        toast.error('Already Bookmarked', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        const remaining = bookMartked.filter(pd => pd.id !== id)
        newBookMarked = [...remaining,exist]
        
    }

    setBookMarked(newBookMarked)
    setIsBookMarked(true)
 
  }

  const handleReadTime = (blog) =>{
    toast.info('Mark as read', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    let newBookMarked = []
    newBookMarked = [...readTime , blog]
    setReadTime(newBookMarked)
   
  }


    return (
        <div className='MainSection'>

            <Navbar></Navbar>
            <BlogBookMarked isBookMarked={isBookMarked} readTime={readTime} handleReadTime={handleReadTime} bookMartkedBlog={bookMartked} handleBookMarked={handleBookMarked} blogs={blogs}></BlogBookMarked>
            <QuestionsAndAnswer></QuestionsAndAnswer>
            
        </div>
    );
};

export default FetchMainComponent;