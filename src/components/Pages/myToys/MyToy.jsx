import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const MyToy = ({toy,index,handleDelete}) => {
  UseTitle("MyToys")
 const {
 seller_name,
  name,
 category,
  price,
  _id,
  quantity,
  
  }=toy;
  

 return (
  
  <tr className='font-bold text-sky-500 capitalize'>
  <th>{index+1}</th> 
  <td >{seller_name?seller_name:"no name provide"}</td> 
  <td>{category}</td> 
  <td>{name}</td> 
  <td>{quantity}</td> 
  <td>${price}</td> 
  <td className='flex gap-4'>
   <Link to={`/details/${_id}`}><button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>View Details</button></Link>
  <Link to={`/update/${_id}`}> <button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>Update</button></Link>
   <button onClick={()=>handleDelete(_id)} className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>X</button>
  </td>
</tr>
 );
};

export default MyToy;