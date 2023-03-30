import React from "react";
import Blog from "../Blog/Blog";
import BookMarked from "../BookMarked/BookMarked";

const BlogBookMarked = ({blogs,handleBookMarked}) => {
  return (
    <div className="blog-bookMartked-Container lg:flex lg:flex-row flex-col lg:mt-5">
      
      <div className="blogContainer lg:ml-16 lg:w-[65%] w-full">
        <Blog handleBookMarked={handleBookMarked} blogs={blogs}></Blog>
      </div>

      <div className="blogContainer lg:w-[35%] w-full flex flex-col items-center">
        <BookMarked></BookMarked>
      </div>

    </div>
  );
};

export default BlogBookMarked;
