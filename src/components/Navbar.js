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
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
        </ul>
        </Nav>
        // </>
      );
}