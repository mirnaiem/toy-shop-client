import React from 'react';

const Toy = ({toy,index}) => {
 console.log(toy)
 const {seller_name, 
  name,
 category,
  price,
  
  quantity,
  
  }=toy
 return (
  <tr className='font-bold text-sky-500 capitalize'>
        <th>{index+1}</th> 
        <td >{seller_name?seller_name:'No name provide'}</td> 
        <td>{category}</td> 
        <td>{name}</td> 
        <td>{quantity}</td> 
        <td>{price}</td> 
        <td><button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>View Details</button></td>
      </tr>
 );
};

export default Toy;