import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Toy = ({toy,index}) => {
const {user}=useContext(AuthContext)
const navigate=useNavigate()
const handleViewDetails=id=>{
  if(user){
navigate(`/details/${_id}`)
  }
  else{
    Swal.fire({
      title: 'You Have To Login First',
    })
   
    navigate(`/details/${_id}`)
  }
}
 const {seller_name, 
  name,
 category,
  price,
  _id,
  quantity,
  
  }=toy
 return (
  <tr className='font-bold  capitalize'>
        <th>{index+1}</th> 
        <td >{seller_name?seller_name:'No name provide'}</td> 
        <td className='text-[#253237]'>{category}</td> 
        <td className='text-[#404e65]'>{name}</td> 
        <td className='text-[#ff3300]'>{quantity}</td> 
        <td className='text-[#d72378]'>${price}</td> 
        <td><button onClick={()=>handleViewDetails(_id)} className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>View Details</button></td>
      </tr>
 );
};

export default Toy;