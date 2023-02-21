import { useState } from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

function NavBar() {
  

  return (
    <div className="navbar-name">
      <div className="container nav-bar">
        <div className="row row-navbar">
          <div className="col-3 img-navbar">
            <img
              src="http://flixgo.volkovdesign.com/main/img/logo.svg"
              alt=""
              className="logo-flixgo"
            />
          </div>
          <div className="col-2">
            {/* <li class="nav-item dropdown"> */}
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              HOME
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Home slideshow bg
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home static bg
                </a>
              </li>
            </ul>
            {/* </li> */}
          </div>
          <div className="col-2">
            {/* <li class="nav-item dropdown"> */}
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CATALOG
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Catalog Grid
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Catalog List
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Details Movie
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Details TV Series
                </a>
              </li>
            </ul>
            {/* </li> */}
          </div>
          <div className="col-2">
            <span>PRICING PLAN</span>
          </div>
          <div className="col-1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="col-2">
            <button className="btn-navbar" ><Link to="/login">LOG OUT</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
