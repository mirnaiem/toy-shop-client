import React, { useState } from 'react';

const Gal = () => {
 const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
   'https://img.freepik.com/free-photo/closeup-shot-toy-train-wooden-bridge_181624-22068.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/premium-photo/architect-home-designer-builder-table-wood-home-modle-with-drawing-tools-with-construction-heavy-machine-wood-table_40313-395.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/premium-photo/children-s-lego-set-different-colors-children-s-game_71599-315.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/free-photo/flat-lay-composition-toys_23-2148144841.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/free-photo/building-blocks-wooden-background-colorful-wooden-building-blocks_1205-1629.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/premium-photo/dump-truck-toy-downloading-colorful-blocks_470606-546.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
    'https://img.freepik.com/free-photo/risk-protection-eliminating-risk-business-life-concept_185193-110333.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais',
   ]




 return (
  <div className='my-5'>
  <h2 className='text-center text-5xl font-bold text-[#393939]'>Toys Gallery</h2>
  <div className="divider mx-auto w-1/5"></div>
  <div className='flex flex-col md:flex-row gap-4 mt-5'>
    {images.map((imageUrl, index) => (
      <div
        key={index}
        className='relative'
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`w-[250px] h-[250px] rounded-lg ${hoveredImage === index ? 'transition-opacity duration-5000' : ''}`}
          src={hoveredImage === index ? imageUrl :  'https://img.freepik.com/free-photo/risk-protection-eliminating-risk-business-life-concept_185193-110333.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais'}
          alt=""
        />
        {hoveredImage === index && (
          <div className='absolute inset-0 flex justify-center items-center'>
            <img
              className='w-[250px] h-[250px] rounded-lg'
              src='https://img.freepik.com/premium-photo/architect-home-designer-builder-table-wood-home-modle-with-drawing-tools-with-construction-heavy-machine-wood-table_40313-395.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais'
              alt=""
            />
          </div>
        )}
      </div>
    ))}
  </div>
  {/* ... remaining JSX */}
</div>
);
 
};

export default Gal;