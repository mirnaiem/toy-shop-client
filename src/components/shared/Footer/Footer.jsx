import React from 'react';

const Footer = () => {
 return (
  <footer className="footer p-10 mx-auto bg-base-200 text-base-content">
  <div>
    <img className='w-20 rounded-full ' src="https://i.ibb.co/cYDjzkg/Toys.png" alt="" />
    <p>ToysTruction.<br/>Providing reliable kids playing toys</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
 );
};

export default Footer;