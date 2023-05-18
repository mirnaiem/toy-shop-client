import React from 'react';
import NavBar from '../../shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';

const Main = () => {
 return (
  <div>
   <NavBar></NavBar>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default Main;