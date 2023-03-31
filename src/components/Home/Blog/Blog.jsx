import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blogs,handleBookMarked,handleReadTime,isBookMarked }) => {
  
  return (
    <div className="space-y-5">
      {blogs.map((blog) => {
        const { authName, blogCover ,id,readTime,blogTitle,publishDateAgo,publishDate,blogTag,authImg} = blog;
        return (
          <div key={blog.id} className="card-body p-1 rounded-lg ">
            <div className="coverContainer w-full h-80">
              <img
                className="w-full h-full rounded-md"
                src={blogCover}
                alt=""
              />
            </div>
            <div className="authInformationContainer lg:flex lg:flex-row flex flex-col lg:justify-between lg:items-center">
              <div className="flex items-center gap-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={authImg}
                  alt=""
                />
                <div>
                  <h1 className="text-lg">{authName}</h1>
                  <span className="text-sm">{publishDate} </span>
                  <span className="text-sm">({publishDateAgo} days ago)</span>
                  {/* //Mobile responsive */}
                  <div  className="read lg:hidden">
                    <span className="text-sm">{readTime} min read</span>
                    <span className="cursor-pointer ml-4">
                    <FontAwesomeIcon onClick={()=>handleBookMarked(blog,id)} icon={faBookmark} />
                    </span>
                  </div>
                </div>
              </div>

              <div   className="read lg:block hidden">
                <span>{readTime} min read</span>
                <span className="cursor-pointer mx-4">
                <FontAwesomeIcon onClick={()=>handleBookMarked(blog,id)} icon={faBookmark} />
                </span>
              </div>
            </div>

            <div className=" lg:w-[70%]">
              <h1 className="text-lg lg:text-3xl">
                {blogTitle}
              </h1>
            </div>

            <div className="hashTag space-x-4">
              <span>{blogTag}</span>
            </div>

            <div className="markAsRead ">
              <h1  className="font-semiboldbold underline text-[#6047EC]">
                <span className="cursor-pointer" onClick={()=>{handleReadTime(blog)}}> Mark as read </span>
              </h1>
            </div>
            <hr />
          </div>
        );
      })}

    </div>
  );
};

export default Blog;
