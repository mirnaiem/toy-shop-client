import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({toy,index}) => {
 console.log(toy)
 const {seller_name, 
  name,
 category,
  price,
  _id,
  quantity,
  
  }=toy
 return (
  <tr className='font-bold text-sky-700 capitalize'>
        <th>{index+1}</th> 
        <td >{seller_name?seller_name:'No name provide'}</td> 
        <td>{category}</td> 
        <td>{name}</td> 
        <td>{quantity}</td> 
        <td>{price}</td> 
        <td><Link to={`/details/${_id}`}><button className='bg-cyan-600 py-2 px-3 rounded-lg text-white mt-2'>View Details</button></Link></td>
      </tr>
 );
};

export default Toy;