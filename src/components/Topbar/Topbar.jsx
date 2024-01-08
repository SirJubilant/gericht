import "./topbar.css";
import { vert_line } from "../assets";
import { motion } from "framer-motion";

import React from 'react'

export default function Topbar() {
  return (
    <>
        <header className="header">
            
            <a href="#" className="header__logo">gericht</a>

            <nav className="header__nav">
                
                <ul className="header__nav-items">
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Home</a></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Pages</a></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Contact Us</a></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Blog</a></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Landing</a></li>
                </ul>
               
                <ul className="header__nav-items2">
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Log in / Register</a></li>
                    <li className="header__nav-item"><img src={vert_line} alt="" /></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Book Table</a></li>   
                                 
                </ul>
            </nav>
        </header>

       

        
    </>
  )
}
