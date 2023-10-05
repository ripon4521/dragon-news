import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from "../../assets/user.png"

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
     
     
     </>
        
   
    return (
        <div className='text-4xl font-popins'>
           <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
   
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div class="navbar-end">
  <div className="w-10 mr-2 rounded-full">
    <img src={user} />
  </div>
    <Link class="btn">LogIn</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;