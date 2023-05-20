import React from 'react';

const BlogPost = () => {
 return (
  <div>
   <h2 className='text-center text-3xl md:text-5xl font-bold text-[#393939] my-5'>Blog Post</h2>
   <div className="divider  mx-auto w-1/5"></div>
   <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default BlogPost;