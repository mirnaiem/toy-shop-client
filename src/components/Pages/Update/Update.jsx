import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
 const loadedToy=useLoaderData()
 const {price,_id,quantity,details}=loadedToy;

 const handleUpdate=event=>{
  event.preventDefault()
  const form = event.target;
  const price=form.price.value;
  const quantity= form.quantity.value;
  const details=form.details.value;
  const updateData={price,quantity,details};
  
  fetch(`https://assignment-11-server-alpha-six.vercel.app/mytoys/${_id}`,{
   method:'PUT',
   headers:{
    'content-type':'application/json'
   },
   body: JSON.stringify(updateData)
  })
  .then(res=>res.json())
  .then(data=>{
   if(data.modifiedCount>0){
    Swal.fire({
     title: 'success!',
     text: 'Toy has been updated successfully',
     icon: 'success',
     confirmButtonText: 'ok'
   })
   }
   console.log(data)})
 }
 return (
  <div  className='my-10'>
   <h2 className='text-center my-10  font-serif  text-4xl'>Update Your <span className='text-[#ff3300]'>Toy</span> </h2>
    <form onSubmit={handleUpdate} className='w-1/2 mx-auto'>
       
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' defaultValue={price} placeholder='price' className="input input-bordered" />
          
        </div>
       
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='quantity' defaultValue={quantity} placeholder='available quantity' className="input input-bordered" />
          
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='details' defaultValue={details} placeholder='description' className="input input-bordered" />
          
        </div>
       </div>
        <div className="form-control w-4/5 mx-auto mt-6">
          
          <input className="btn bg-cyan-600 border-0 btn-block" type="submit" value="Update Toy" />
        </div>
      </form>
  </div>
 );
};

export default Update;