import { useState } from "react";
import "./topbar.css";
import { vert_line } from "../assets";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navVariants ={
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 }
  }
}

export default function Topbar() {
    const [showNav, setShowNav] = useState(false);
    const toggleNavItems = () => {
        setShowNav(!showNav);
    }
  return (
    <>
        <header className="header">
            
            <a href="#" className="header__logo">ger<span>&iacute;</span>cht</a>

            <nav className={`header__nav ${showNav && 'active'}`}>
                
                <motion.ul className="header__nav-items"
                variants={ navVariants }
                initial ="hidden"
                animate="visible"
                >
                  
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="Pages">Pages</NavLink>
                      </li>
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="/">Contact Us</NavLink>
                      </li>
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="blog">Blog</NavLink>
                      </li>
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="/">Landing</NavLink>
                      </li>
                </motion.ul>
               
                <motion.ul className="header__nav-items2"
                variants={ navVariants }
                initial ="hidden"
                animate="visible"
                >
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Log in / Register</a></li>
                    <li className="header__nav-item"><img className="line" src={vert_line} alt="" /></li>
                    <li className="header__nav-item"><a className="header__nav-link" href="#">Book Table</a></li>   
                                 
                </motion.ul>

         
            </nav>
                    <svg
            className='header__nav-menu'
            onClick={ toggleNavItems }
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
              fill="white"
            />
          </svg>
        </header>

       

        
    </>
  )
}
