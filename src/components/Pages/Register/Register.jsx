import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import UseTitle from '../../Hooks/UseTitle';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    UseTitle("Register")
    const navigate = useNavigate()

    const { user, createUser, logWithGoogle } = useContext(AuthContext)

    // Google login -------------

    const handleGoogleLog = () => {
        logWithGoogle()
            .then(result => {
                const googleUser = result.user;

            })
            .catch(error => console.log(error))
    }

    // register with email and password---------------

    
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                setError('')
                setSuccess('User has been created successfully')
                form.reset()
                navigate('/')
                console.log(createdUser)
            })
            .catch(error => {
                setError(error.message)
                setSuccess('')
            })

    }
    return (
        <div className="text-center mb-16">

            <h1 className="text-5xl font-bold text-cyan-500">Register!</h1>



            <div className="  p-4 w-1/3 mx-auto rounded-lg shadow-2xl bg-base-100">
                <form onSubmit={handleRegister}>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-0 bg-cyan-600">Register</button>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="divider"></div>

                            <div className="flex mt-4 w-full border gap-x-2">
                                <button onClick={handleGoogleLog}
                                    type="button"
                                    className="flex items-center  justify-center w-full p-2 border border-cyan-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-cyan-700"
                                >
                                    <FaGoogle className="w-5 me-4 h-5 fill-current text-cyan-600"></FaGoogle> Sign up With Google
                                </button>


                            </div>

                        </div>
                    </div>
                </form>
                <h2 className='text-center text-red-600'>{error}</h2>
                <h2 className='text-center text-green-600'>{success}</h2>
                <h2 className='py-3'>Already  have an account? Please <Link className='text-purple-700 underline' to="/login">LogIn</Link></h2>
            </div>
        </div>
    );
};

export default Register;