import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext)
 
  const handleLogOut = () => {
    logOutUser()
  }
  const navMenu = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/alltoys">All Toys</Link></li>
    {user && <><li><Link to="/mytoys">My Toys</Link></li>
      <li><Link to="/addtoys">Add Toys</Link></li></>}
    <li><Link to="/blogs">Blog</Link></li>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {navMenu}
          </ul>
        </div>
        <Link to='/'>
          <img className='w-full h-full md:h-[120px]' src="https://i.ibb.co/cYDjzkg/Toys.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end md:gap-4">
        {
          user ? <>
            {user && user.photoURL ? (
              <img className="rounded-full w-10" title={user?.displayName} src={user?.photoURL} />
            ) : (
              <span title={user?.displayName} className="text-lg font-bold">{user?.displayName}</span>
            )}
            <button onClick={handleLogOut} className="btn">LogOut</button>
          </> :
            <div>
              <Link to="/login"><button className="btn me-4">Login</button></Link>
              <Link to="/register"><button className="btn">Sign Up</button></Link>
            </div>
        }

      </div>
    </div>
  );
};

export default NavBar;