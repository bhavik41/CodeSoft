import React, { useState } from 'react';
import './navbar.css';
import { MdTravelExplore, MdOutlineLogout } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const location = useLocation();

  const navigate = useNavigate()



  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  const removeNav = () => {
    setActive('navBar');
  }

  const logOut = () => {
    // localStorage.removeItem()
    // setTimeout(() => navigate('/'), redirectTimeout);
    navigate("/signin")

  }

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdTravelExplore className='icon' />Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className="cart-btn btn">
              <a href="#"><BsCart2 className='icon' /></a>
            </button>
            <button className="btn">
              <Link
                to={location.pathname === '/signin' ? '/signup' : '/signin'} // Use location.pathname for accurate check
              >
                {location.pathname === '/signin' ? 'Sign Up' : 'signin'}
              </Link>
            </button>
            {location.pathname !== '/signin' && location.pathname !== '/signup' && (
              <button onClick={logOut} className="logout-btn btn" style={{ borderRadius: '50px' }}>
                <Link to="/signin">
                  <MdOutlineLogout className='icon' />
                </Link>
              </button>
            )}


          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar;
