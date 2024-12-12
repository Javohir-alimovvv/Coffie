import React, { useState } from 'react'
import "./Header.scss"
import Logo from "../../assets/images/Logo.png"
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom"
import { IoMenu, IoClose } from "react-icons/io5";
import Sidebar from '../sidebar/Sidebar';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className="header__big">
        <div className="container__big">
          <nav className="header">
            <ul className='header__left__content'>
              <li className='header__left__content__item'>
                <NavLink><span>Home</span></NavLink>
              </li>
              <li className='header__left__content__item'>
                <NavLink><span>About</span></NavLink>
              </li>
              <li className='header__left__content__item'>
                <NavLink><span>Menu</span></NavLink>
              </li>
              <li className='header__left__content__item'>
                <NavLink><span>Reservation</span></NavLink>
              </li>
            </ul>
            <Link to={"/"} className='header__center__content'>
              <img className='header__center__content__img' src={Logo} alt="" />
            </Link>
            <ul className='header__right__content'>
              <li className='header__right__content__item'>
                <NavLink><span>Pages</span></NavLink>
              </li>
              <li className='header__right__content__item'>
                <NavLink><span>Shop</span></NavLink>
              </li>
              <li className='header__right__content__item'>
                <NavLink><span>Contact</span></NavLink>
              </li>
              <li className='header__right__content__item__icons'>
                <NavLink><span><FiSearch /></span></NavLink>
              </li>
              <li className='header__right__content__item__icons'>
                <NavLink><span><FiShoppingBag /></span></NavLink>
              </li>
            </ul>
            <button onClick={toggleSidebar} className='header__saidbar__btn'>
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </nav>
        </div>
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

    </>
  )
}

export default Header