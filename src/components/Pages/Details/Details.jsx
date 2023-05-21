import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const Details = () => {
 const loadedToy=useLoaderData()
 UseTitle("Details")
 
 const {picture, name, seller_name,email, price, rating, quantity,details}=loadedToy;
 return (
  <div className="hero min-h-screen shadow-xl my-10">
  <div className="hero-content flex-col lg:flex-row justify-evenly w-4/5 h-3/5 p-4 shadow-xl ">
    <img src={picture} className="w-2/5 rounded-lg " />
    <div>
      <h1 className="text-2xl capitalize">Name: <span className='text-lg font-bold text-[#ff3300]'>{name}</span></h1>
      <h1 className="text-2xl capitalize">Seller Name:<span className='text-lg text-gray-600 font-bold'>{seller_name}</span></h1>
      <h1 className="text-2xl">Seller Email: <span className='text-lg '>{email}</span></h1>
      <h1 className="text-2xl">Price: <span className='text-lg font-bold text-orange-500'>${price}</span></h1>
      <h1 className="text-2xl">Rating: <Rating
                    readonly
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar className='text-xl text-yellow-500'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                  /></h1>
      <h1 className="text-2xl">Quantity: <span className='text-lg text-orange-700'>{quantity}</span></h1>
      <h1 className="text-2xl">Description: <span className='text-lg '>{details}</span></h1>
      
      <button className="btn bg-cyan-600 border-none mt-4">Add To Cart</button>
    </div>
  </div>
</div>
 );
};

export default Details;