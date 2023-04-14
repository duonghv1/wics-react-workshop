// src/components/Navbar.js

import React from "react";
import './Navbar.css'
import { Nav, NavLink } from './NavbarElements';

export default function Navbar() {
    return (
        //<>
        <Nav>
        <ul>
            <li>
              <NavLink to="/home" activeStyle>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeStyle>Projects</NavLink>
            </li>
        </ul>
        </Nav>
        // </>
      );
}