import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const BlogPost = () => {
 useEffect(()=>{
  Aos.init({
   duration:2000
  })
},[])
 return (
  <div className='my-16'>
   <h2 className='text-center text-3xl md:text-4xl font-bold text-[#393939] my-5'>Blog Post</h2>
   <div className="divider  mx-auto w-1/5"></div>
   <div className='grid  grid-cols-1 md:grid-cols-2 gap-6 '>
  
   <div data-aos="fade-up"  className=" flex flex-col md:flex-row md:h-[300px] mx-auto w-[90%] md:w-full md:mx-0   rounded-xl  bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-xl md:rounded-none md:rounded-s-xl h-[300px] ' src="https://img.freepik.com/premium-photo/3d-illustration-kids-toys-multicolored-dump-truck-crane-white-isolated-background_116124-6716.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">"Master Builders: Creating Your Own Vehicle Toys"
</h2>
    <p>December 4, 2022</p>
    <p>Building vehicle toys is an engaging and creative hobby that sparks the imagination of both</p>
    <h2 className='font-bold text-red-600'>Read More...</h2>
    
  </div>
</div>
<div data-aos="fade-up" className=" flex flex-col md:flex-row md:h-[300px] mx-auto w-[90%] md:w-full md:mx-0   rounded-xl  bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-xl md:rounded-none md:rounded-s-xl h-[300px] ' src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">"Master Builders: Creating Your Own Vehicle Toys"
</h2>
    <p>December 4, 2022</p>
    <p>Building vehicle toys is an engaging and creative hobby that sparks the imagination of both</p>
    <h2 className='font-bold text-red-600'>Read More...</h2>
    
  </div>
</div>
<div data-aos="fade-up" className=" flex flex-col md:flex-row md:h-[300px] mx-auto w-[90%] md:w-full md:mx-0   rounded-xl  bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-xl md:rounded-none md:rounded-s-xl h-[300px] ' src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">"Master Builders: Creating Your Own Vehicle Toys"
</h2>
    <p>December 4, 2022</p>
    <p>Building vehicle toys is an engaging and creative hobby that sparks the imagination of both</p>
    <h2 className='font-bold text-red-600'>Read More...</h2>
    
  </div>
</div>
<div data-aos="fade-up" className=" flex flex-col md:flex-row md:h-[300px] mx-auto w-[90%] md:w-full md:mx-0   rounded-xl  bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-xl md:rounded-none md:rounded-s-xl h-[300px] ' src="https://img.freepik.com/premium-photo/dump-truck-toy-downloading-colorful-blocks_470606-546.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">"Master Builders: Creating Your Own Vehicle Toys"
</h2>
    <p>December 4, 2022</p>
    <p>Building vehicle toys is an engaging and creative hobby that sparks the imagination of both</p>
    <h2 className='font-bold text-red-600'>Read More...</h2>
    
  </div>
</div>
   </div>
  </div>
 );
};

export default BlogPost;