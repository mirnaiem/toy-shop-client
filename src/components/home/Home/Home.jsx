import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';
import PopularToy from '../PopularToy/PopularToy';
import BlogPost from './BlogPost/BlogPost';
import UseTitle from '../../Hooks/UseTitle';



const Home = () => {
 UseTitle("Home")
 return (
  <div className=''>
   <Banner></Banner>
   <Gallery></Gallery>
  <Category></Category>
  <PopularToy></PopularToy>
  <BlogPost></BlogPost>
  </div>
 );
};

export default Home;