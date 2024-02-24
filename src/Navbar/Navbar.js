import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./nav.css"
import { GiHamburgerMenu} from "react-icons/gi";
import { ImCross} from "react-icons/im";

const Navbar = () => {
    const navga=()=>{
        setfa(!fas)
    }

    const navg=()=>{
        setfa(!fas)
    }
    const[fas,setfa]=useState(false);
    const hambur=()=>{
        setfa(!fas)
        
    }
  return (
        <div className='navbar'>
            <div className='media'>
            <div className='sidetitle'>
                <Link className='title' to="/">Favourite Hotel</Link>
            </div>
            <div className='fa'>
                {fas ? <ImCross size={25} onClick={hambur}/>:<GiHamburgerMenu size={25} onClick={hambur}/> }
            </div>
            </div>
            <div className={fas?"links":"lin"}>
               <NavLink to="/" onClick={navga}>Home</NavLink>
               <NavLink to="/aboutus" onClick={navg}>About us</NavLink>
            </div>
        </div>
  )
}

export default Navbar