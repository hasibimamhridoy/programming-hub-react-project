import React from "react";

const BookMarked = ({ bookMartkedBlog, readTime }) => {
  let readTimeCount = 0;
  for (const blog of readTime) {
    readTimeCount = readTimeCount + blog.readTime;
  }

  return (
    <div className="lg:p-3">
      <div className="mb-5 spentTime mt-5 bg-[#6047ec49] px-7 py-3 rounded-lg text-[#6047EC] font-bold">
        <h1>Spent time on read: {readTimeCount} min</h1>
      </div>

      <div className="bg-gray-100 rounded-lg ">
        <h1 className="text-left ml-[0.20rem] mb-5 font-semibold">Bookmarked Blogs: {bookMartkedBlog.length}</h1>
      {bookMartkedBlog.map((blog) => {
        return (
          <div key={blog.id}>
            <div className="title mt-5 px-7 py-3 bg-white mb-5 rounded-lg text-black font-semibold">
              <h1>{blog.blogTitle}</h1>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default BookMarked;
