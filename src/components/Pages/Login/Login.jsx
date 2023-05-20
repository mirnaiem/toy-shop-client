import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
 const {user,loginUser,logWithGoogle}=useContext(AuthContext)
 const location=useLocation()
 const from=location.state?.from?.pathname || '/';
 const navigate=useNavigate()
const handleGoogleLog=()=>{
    logWithGoogle()
    .then(result=>{
        const googleUser=result.user;
        navigate(from,{replace:true})
        
    })
    .catch(error=>setError(error.message))
}
const handleLogin=event=>{
 event.preventDefault()
 const form=event.target;
 const email=form.email.value;
 const password=form.password.value;
 loginUser(email,password)
  .then(result=>{
   const loggedUser=result.user;
   navigate(from,{replace:true})
    setSuccess('Login successfully')
   
   form.reset()
   setError('')
   
  })
  .catch(error=>{
    setError(error.message)
     setSuccess('')
})
 
}
 return (
  <div className="text-center min-h-screen">

   <h1 className="text-5xl font-bold text-cyan-500">Login!</h1>



   <div className="  w-full max-w-sm mx-auto shadow-2xl bg-base-100">
   <form onSubmit={handleLogin}>
   <div className="card-body">
     <div className="form-control">
      <label className="label">
       <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
      <label className="label">
       <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
      <label className="label" >
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
     </div>
     <div className="form-control mt-6">
      <button className="btn border-0 bg-cyan-600">Login</button>
     </div>
     <div className="flex flex-col w-full">
      <div className="divider"></div>
      
      <div className="flex mt-4 w-full border gap-x-2">
                      <button 
                      onClick={handleGoogleLog}
                        type="button"
                        className="flex items-center  justify-center w-full p-2 border border-cyan-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-cyan-700"
                    >
                        <FaGoogle  className="w-5 h-5 fill-current text-cyan-600"></FaGoogle>
                    </button>
                </div>
        </div>
     </div>
   </form>
                    
        <h2 className='text-center text-red-600'>{error}</h2>           
        <h2 className='text-center text-green-600'>{success}</h2>           
                    

    <h2 className='py-3'>Don't have an account? Please <Link className='text-purple-700 underline' to="/register">Sign Up</Link></h2>
    </div>
   </div>
  

 );
};

export default Login;