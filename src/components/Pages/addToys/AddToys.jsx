import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
const {user}=useContext(AuthContext)
  const handleAddToys=event=>{
    event.preventDefault()
    const form=event.target;
    const picture=form.picture.value;
    const name=form.name.value;
    const category=form.category.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const quantity=form.quantity.value;
    const details=form.details.value;

    const toy={
      picture,
      name,
      category,
      price,
      rating,
      quantity,
      details,
      seller_name:user.displayName,
      email:user.email
    }

    fetch('https://assignment-11-server-alpha-six.vercel.app/alltoys',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(toy)
      
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.insertedId){
      Swal.fire({
        title: 'success!',
        text: 'Toy has been added successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      form.reset()
    }
    })
    console.log(toy)
  }
 return (
  <div>
   <div className="bg-[url('https://img.freepik.com/free-photo/halloween-fluffy-toys_23-2147925616.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais')] h-[300px]   bg-cover bg-no-repeat rounded-lg bg-bottom flex items-center justify-center">
 
   <h2 className=' text-4xl w-2/5  text-gray-300 font-bold capitalize '>Unlock Your Child's Imagination and engineering skills.</h2>
   <img className='h-[200px] w-[300px] rounded-full' src="https://img.freepik.com/free-photo/father-daughter-playing-educational-games-together_155003-1009.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />
   </div>
  <h2 className='text-center my-10  font-serif  text-4xl'>Add Your Favorite <span className='text-[#ff3300]'>Toy</span> </h2>
        
      <form onSubmit={handleAddToys} className='w-full'>
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
          <input type="text" defaultValue={user?.displayName}  className="input input-bordered" />
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="input input-bordered" name="category" id="">
            <option value="Architectural Building Kits">Architectural Building Kits</option>
            <option value="Interlocking Building Toys">Interlocking Building Toys</option>
            <option value="Construction Vehicle Toys">Construction Vehicle Toys</option>
          </select>
         
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' defaultValue={'$'} placeholder='price' className="input input-bordered" />
          
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