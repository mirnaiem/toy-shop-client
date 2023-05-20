import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PopularToy = () => {
  const [carouselContent, setCarouselContent] = useState([
       
   <img className='md:p-4 md:w-full w-3/5 rounded-3xl' src="https://img.freepik.com/free-photo/high-angle-colorful-toys-floor_23-2149311330.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/premium-photo/toy-cars-collided-accident-crash-toy-road_130040-1842.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/free-photo/building-blocks-wooden-background-colorful-wooden-building-blocks_1205-1634.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/free-photo/plastic-building-blocks-toys_1205-1661.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/premium-photo/colorful-plastic-toys-wooden-board_103740-310.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />,
   <img className='md:p-4 md:w-full w-4/5 rounded-3xl' src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselContent.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselContent.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='my-20'>
      <h2 className='text-center text-3xl md:text-4xl font-bold text-[#393939] my-5'>Popular Toy</h2>
      <div className="divider mx-auto w-1/5"></div>
      <Slider {...settings}>
        {carouselContent.map((content, index) => (
          <div  key={index}>
            <div className='flex justify-center '>{content}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularToy;
