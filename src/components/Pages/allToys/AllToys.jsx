import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy/Toy';

const AllToys = () => {
 const loadedToys=useLoaderData()
 return (
  <div>
   <h2 className='text-4xl text-center font-bold my-10 text-gray-600'> You Will Find All The Added <span className='text-[#ff3300] text-5xl'>Toys</span> Here!!</h2>
   <table className="table w-full">
   <thead>
      <tr>
        <th></th> 
        <th >Seller Name</th> 
        <th>Category</th> 
        <th>Toy Name</th> 
        <th>Quantity</th> 
        <th>Price</th> 
        <th></th>
      </tr>
    </thead> 
    
    <tbody>
    
     {loadedToys.map((toy,index)=><Toy 
    index={index}
    key={toy._id}
    toy={toy}
    ></Toy>)}
      
      
    </tbody>
   
    
    
  </table>
  </div>
 );
};

export default AllToys;