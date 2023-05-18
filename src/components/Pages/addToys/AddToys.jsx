import React from 'react';

const AddToys = () => {
 return (
  <div>
   <div className="bg-[url('https://img.freepik.com/free-photo/halloween-fluffy-toys_23-2147925616.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais')] h-[300px]   bg-cover bg-no-repeat rounded-lg bg-bottom flex items-center justify-center">
 
   <h2 className=' text-4xl w-2/5 text-center text-gray-400 font-bold capitalize '>Unlock Your Child's Imagination and engineering skills with building and construction toys.</h2>
   <img className='h-[200px] w-[300px] rounded-full' src="https://img.freepik.com/free-photo/father-daughter-playing-educational-games-together_155003-1009.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />
   </div>
  <h2 className='text-center my-10  font-serif  text-4xl'>Add Your Favorite <span className='text-orange-500'>Toy</span> </h2>
        
      <form className='w-full'>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input type="text" name='picture' placeholder="picture url of toy" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder='name of the toy' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller name</span>
          </label>
          <input type="text" defaultValue={'seller name'}  className="input input-bordered" />
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
          <input type="text" name='category' placeholder='category name' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder='price' className="input input-bordered" />
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="rating" name='rating' placeholder="rating" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='quantity' placeholder='available quantity' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='details' placeholder='description' className="input input-bordered" />
          
        </div>
       </div>
        <div className="form-control w-4/5 mx-auto mt-6">
          
          <input className="btn bg-cyan-600 border-0 btn-block" type="submit" value="Add Toys" />
        </div>
      </form>
    
     
    </div>
 );
};

export default AddToys;