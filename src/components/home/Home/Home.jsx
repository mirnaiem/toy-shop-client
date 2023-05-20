import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';
import PopularToy from '../PopularToy/PopularToy';



const Home = () => {
 return (
  <div className=''>
   <Banner></Banner>
   <Gallery></Gallery>
  <Category></Category>
  <PopularToy></PopularToy>
  </div>
 );
};

export default Home;