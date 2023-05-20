import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';



const Home = () => {
 return (
  <div className=''>
   <Banner></Banner>
   <Gallery></Gallery>
  <Category></Category>
  </div>
 );
};

export default Home;