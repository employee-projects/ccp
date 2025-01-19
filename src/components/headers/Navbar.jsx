// import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ hidePortfolio = false }) => {
  return (
    <nav className="td-main-menu-content">
      <ul>
        {/* <li className="has-dropdown">
          <Link to="/" className="text-white"> Home</Link>
          <ul className="td-submenu submenu ">
            <li>
              <Link to="/">Main Home</Link>
            </li>
            <li>
              <Link to="/home2">Business Home</Link>
            </li>
            <li>
              <Link to="/home3">Advisory Home</Link>
            </li>
            <li>
              <Link to="/home4">Business Strategy</Link>
            </li>
            <li>
              <Link to="/home5">Insurance Home</Link>
            </li>
          </ul>
        </li> */}

        <li className="has-dropdown">
          <a href="#" className="text-white">About Us</a>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/about">Overview</Link>
            </li>
            <li>
              <Link to="/portfolio">History</Link>
            </li>
            <li>
              <Link to="/portfolio-details">Life At Crystal</Link>
            </li>
            <li>
              <Link to="/team">Leadership</Link>
            </li>
            <li>
              <Link to="/team-details">Manufacturing</Link>
            </li>
            <li>
              <Link to="/faq">Chairman Journey</Link>
            </li>
          </ul>
        </li>

        <li className="has-dropdown">
          <Link to="/blog" className="text-white">Our Business</Link>
          {/* <ul className="td-submenu submenu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul> */}
        </li>
  {/* <ul className="td-submenu submenu">
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/service-details">Service Details</Link>
            </li>
          </ul> */}
        <li className="has-dropdown">
          <Link to="/service" className="text-white">R & D</Link>
        
        </li>

        {/* {hidePortfolio ? null : (
          <li className="has-dropdown ">
            <Link to="/portfolio" className="text-white">Sustainability</Link>
            <ul className="td-submenu submenu">
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Portfolio Details</Link>
              </li>
            </ul>
          </li>
        )} */}
        <li className="text-white">
          <Link to="/contact">Sustainability</Link>
        </li>
        <li className="text-white">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
