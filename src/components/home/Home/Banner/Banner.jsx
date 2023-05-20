import React from 'react';

const Banner = () => {
  
 return (
  
   <div className="carousel md:w-full md:h-[600px]">
  <div id="slide1"  className="carousel-item  relative w-full">
  <img src="https://img.freepik.com/premium-photo/cute-little-indian-boy-playing-with-toy-crane-wearing-yellow-construction-hat-hard-hat-childhood-education-concept-isolated-green-chalkboard_466689-15489.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" className="md:w-full  rounded-lg" />
  <div className="absolute flex rounded-lg  bg-gradient-to-r from-[#483320] to-[rgba(21, 21, 21, 0) 100%)] w-3/5  h-full items-center  gap-4 ">
     <div className='text-white w-2/3 space-y-8 ms-10 md:ms-24'>
      <h2 className='text-xl md:text-6xl'>Discover the Joy of Building!! <br /> <span className='text-lime-300 text-sm md:text-3xl font-serif'>With ToysTruction</span></h2>
     </div>
    </div>
      
      
    <div className="absolute  flex justify-between transform -translate-y-1/2 md:left-5 left-2 right-2 md:right-5 top-1/2">
      <a href="#slide4" className="md:btn text-white md:btn-circle">❮</a> 
      <a href="#slide2" className="md:btn text-white md:btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" className="w-full rounded-lg" />
  <div className="absolute flex rounded-lg  bg-gradient-to-r from-[#483320] to-[rgba(21, 21, 21, 0) 100%)] w-3/5  h-full items-center  gap-4 ">
     <div className='text-white w-2/3 space-y-8 ms-10 md:ms-24'>
      <h2 className='text-xl md:text-6xl'> Unleash Your Child's Imagination with Construction Toys!! <br /> <span className='text-lime-300 text-sm md:text-3xl font-serif'>With ToysTruction</span></h2>
     </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-2 right-2 md:right-5 top-1/2">
      <a href="#slide1" className="md:btn text-white md:btn-circle">❮</a> 
      <a href="#slide3" className="md:btn text-white md:btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/boy-plays-builder-room_73683-328.jpg?w=1060" className="w-full rounded-lg" />
    <div className="absolute flex rounded-lg  bg-gradient-to-r from-[#483320] to-[rgba(21, 21, 21, 0) 100%)] w-3/5  h-full items-center  gap-4 ">
     <div className='text-white w-2/3 space-y-8 ms-10 md:ms-24'>
      <h2 className='text-xl md:text-6xl'>Constructing Dreams!! <br /> <span className='text-lime-300 text-sm md:text-3xl font-serif'>With ToysTruction</span></h2>
     </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-2 right-2 md:right-5 top-1/2">
      <a href="#slide2" className="md:btn text-white md:btn-circle">❮</a> 
      <a href="#slide4" className="md:btn text-white md:btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/industrial-construction-concepts-with-miniature-workers_35034-52.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" className="w-full rounded-lg" />
    <div className="absolute flex rounded-lg   bg-gradient-to-r from-[#483320] to-[rgba(21, 21, 21, 0) 100%)] w-3/5  h-full items-center  gap-4 ">
     <div className='text-white w-2/3 space-y-8 ms-10 md:ms-24'>
      <h2 className='text-xl md:text-6xl'>Construction Toys for Endless Play!! <br /> <span className='text-lime-300 text-sm md:text-3xl font-serif'>With ToysTruction</span></h2>
     </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-2 right-2 md:right-5 top-1/2">
      <a href="#slide3" className="md:btn text-white md:btn-circle">❮</a> 
      <a href="#slide1" className="md:btn text-white md:btn-circle">❯</a>
    </div>
  </div>
</div>
  
 );
};

export default Banner; 