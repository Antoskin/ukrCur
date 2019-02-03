import React from 'react'
import { Link } from "react-router-dom";

const SideNav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/find" className="nav-link">Change date</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideNav;
