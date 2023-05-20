import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';
import { ready } from 'localforage';




const MyToys = () => {
const [myToys,setMyToys]=useState([])
const {user}=useContext(AuthContext)

 const url=`https://assignment-11-server-alpha-six.vercel.app/mytoys?email=${user?.email}`
 useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
   setMyToys(data)
   })
 },[user])
const handleDelete=id=>{
 Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
})
.then((result) => {
 if (result.isConfirmed) {
   fetch(`https://assignment-11-server-alpha-six.vercel.app/mytoys/${id}`,{
  method:'DELETE'
 })
 .then(res=>res.json())
 .then(data=>{
  if(data.deletedCount>0){
   Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
  )
 const remainingToys=myToys.filter(delToy=>delToy._id !== id);

 setMyToys(remainingToys)

  }
 })
 }
})

}
const handleSortByPrice = () => {
  const sortedToys = [...myToys].sort((a, b) => a.price - b.price);
  
  setMyToys(sortedToys);
};
const handleSortByDescendingPrice = () => {
  const sortedToys = [...myToys].sort((a, b) => b.price - a.price);
  setMyToys(sortedToys);
};
 return (
  <div className='my-16'>
     <h2 className="text-4xl text-center font-bold mb-8  text-gray-600">
        My Added{' '}
        <span className="text-[#ff3300] text-5xl">Toys</span> Information!!
      </h2>
      <div className="dropdown mb-4">
      <button className="btn dropdown-toggle">
        Sort By
      </button>
      <ul className="menu dropdown-content">
        <li>
          <button className="btn border-none bg-slate-950 text-white rounded-lg" onClick={handleSortByPrice}>
            Ascending
          </button>
        </li>
        <li>
          <button className="btn text-white border-none bg-slate-950 rounded-lg " onClick={handleSortByDescendingPrice}>
            Descending
          </button>
        </li>
      </ul>
    </div>

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
    
   {
    
   myToys.map((toy,index)=>
    <MyToy
    key={toy._id}
    toy={toy}
    index={index}
    handleDelete={handleDelete}
    ></MyToy>

   )}
      
    </tbody>
   
    
    
  </table>
  </div>
 );
};

export default MyToys;