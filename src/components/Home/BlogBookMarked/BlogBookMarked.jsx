import React from "react";
import Blog from "../Blog/Blog";
import BookMarked from "../BookMarked/BookMarked";

const BlogBookMarked = ({blogs,handleBookMarked,handleReadTime,bookMartkedBlog,readTime,isBookMarked}) => {
  return (
    <div className="blog-bookMartked-Container p-3 lg:flex lg:flex-row flex-col lg:mt-5">
      
      <div className="blogContainer lg:ml-16 lg:w-[75%] w-full">
        <Blog isBookMarked={isBookMarked} handleBookMarked={handleBookMarked}  handleReadTime={handleReadTime} blogs={blogs}></Blog>
      </div>

      <div className="bg-gray-100 mt-1 lg:mr-[2.5rem] lg:ml-3 blogContainer lg:w-[25%] h-fit rounded-lg w-full flex flex-col items-center">
        <BookMarked readTime={readTime}  bookMartkedBlog={bookMartkedBlog} ></BookMarked>
      </div>

    </div>
  );
};

export default BlogBookMarked;
