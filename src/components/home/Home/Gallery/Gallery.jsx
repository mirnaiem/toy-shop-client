import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Gallery = () => {
 useEffect(()=>{
  Aos.init({
   duration:2000
  })
},[])
 return (
  <div className='my-5'>
   <h2 className='text-center text-5xl font-bold text-[#393939]'>Toys Gallery</h2>
   <div className="divider  mx-auto w-1/5"></div> 
   <div className='flex flex-col w-full items-center  md:flex-row gap-4 mt-5'>
    <img data-aos="fade-up" className=' w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/closeup-shot-toy-train-wooden-bridge_181624-22068.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className=' w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/architect-home-designer-builder-table-wood-home-modle-with-drawing-tools-with-construction-heavy-machine-wood-table_40313-395.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/children-s-lego-set-different-colors-children-s-game_71599-315.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/flat-lay-composition-toys_23-2148144841.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/building-blocks-wooden-background-colorful-wooden-building-blocks_1205-1629.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
   </div>
   <div className='flex flex-col w-full items-center justify-center  md:flex-row gap-4 mt-5'>
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/dump-truck-toy-downloading-colorful-blocks_470606-546.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/risk-protection-eliminating-risk-business-life-concept_185193-110333.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/miniature-people-gardening-with-clean-energy-resources-consumption-biological-farming-eco-energy-house-concept_29654-1074.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/yellow-toy-truck-yard_181624-28412.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />

   </div>
   <div className='flex flex-col w-full items-center justify-center  md:flex-row gap-4 mt-5'>
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/free-photo/kids-spelled-word-with-plastic-blocks-background_53876-71308.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/lego-diorama-construction-extortion-employee_23628-33.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    <img data-aos="fade-up" className='w-[250px] h-[250px] rounded-lg' src="https://img.freepik.com/premium-photo/door-vehicle-keys-red-car-model-block-house_696657-10804.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
   

   </div>
  </div>
 );
};

export default Gallery;