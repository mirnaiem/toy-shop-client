import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
 const {user,loading}=useContext(AuthContext);
 const location=useLocation()
 if(loading){
  return <div className='text-center mt-5'><p className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</p></div>}
  
  if(user){
   return children
  }
 return (
  <Navigate state={{from:location}} to='/login' replace></Navigate>
 );
};

export default PrivateRoute;