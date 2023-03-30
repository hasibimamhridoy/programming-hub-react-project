import React from 'react';

const BookMarked = ({bookMartkedBlog}) => {
    console.log(bookMartkedBlog);

    let readTime = 0
    for (const blog of bookMartkedBlog) {
        
        readTime = readTime + blog.readTime
    }

    return (
        <div>
            <div className="spentTime bg-[#6047ec49] px-7 py-3 rounded-lg text-[#6047EC] font-bold">
                <h1>Spent time on read: {readTime} min</h1>
            </div>

           {bookMartkedBlog.map(blog=>{
            return(

                <div key={blog.id}>
                    <h1>Name: {blog.authName} </h1>
                </div>
            )
           })}
        </div>
    );
};

export default BookMarked;