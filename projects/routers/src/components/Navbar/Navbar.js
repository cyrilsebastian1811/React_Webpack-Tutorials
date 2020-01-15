import React, {useEffect} from 'react';
import $ from "jquery";
// import M, { ComponentBase } from 'materialize-css';
import {About, Home, Contact} from "../";
import {NavLink, withRouter} from "react-router-dom";

let componentDidMount = function() {
  console.log('mounted');
}

let handleMouseOver = function(props) {
  props.history.push('/home');
};

const Navbar = (props) => {
  useEffect(componentDidMount, []);
  return (
    <nav className="#d81b60 pink darken-1" onMouseOver={_ => handleMouseOver(props)}>
      <div className="nav-wrapper container">
        <NavLink to="/" className="brand-logo">Logo</NavLink>
        <ul id="nav-mobile" className="right">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
