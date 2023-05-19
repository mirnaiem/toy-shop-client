import React from 'react';

const MyToy = ({toy,index,handleDelete}) => {
 const {
 seller_name,
  name,
 category,
  price,
  
  quantity,
  
  }=toy;
  console.log(toy)

 return (
  <tr className='font-bold text-sky-500 capitalize'>
  <th>{index+1}</th> 
  <td >{seller_name?seller_name:"no name provide"}</td> 
  <td>{category}</td> 
  <td>{name}</td> 
  <td>{quantity}</td> 
  <td>{price}</td> 
  <td className='flex gap-4'>
   <button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>View Details</button>
   <button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'> Edit</button>
   <button onClick={handleDelete} className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>x</button>
  </td>
</tr>
 );
};

export default MyToy;