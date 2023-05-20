import React from 'react';
import NavBar from '../../shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';

const Main = () => {
 return (
  <div>
   <NavBar></NavBar>
   <div className='min-h-screen'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
 );
};

export default Main;