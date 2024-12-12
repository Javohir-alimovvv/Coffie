import React from 'react';
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div
          className="sidebar__row"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="sidebar__box">
        <ul className="sidebar__box__group">
          <li className="sidebar__box__group__text">
            <NavLink><span>Home</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>About</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>Menu</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>Reservation</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>Pages</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>Shop</span></NavLink>
          </li>
          <li className="sidebar__box__group__text">
            <NavLink><span>Contact</span></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
