import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';




const MyToys = () => {
const [myToys,setMyToys]=useState([])
const {user}=useContext(AuthContext)
 const url=`http://localhost:3000/mytoys?email=${user?.email}`
 useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
   setMyToys(data)
   console.log(data)})
 },[user])
const handleDelete=id=>{
 fetch(`http://localhost:3000/mytoys/${id}`,{
  method:'DELETE'
 })
 .then(res=>res.json())
 .then(data=>console.log(data))
}
 
 return (
  <div>
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