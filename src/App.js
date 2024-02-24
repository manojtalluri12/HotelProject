import React,{useState} from 'react'
//import Navbar from './Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import About from './Aboutus/About'
import Places from './places/Places'
import Navhyd from './India/Navhyd'
import Imges from './Imges/Imges'
import FinalForm from './Form/FinalForm'
import { NavLink,Link } from 'react-router-dom'
import { GiHamburgerMenu} from "react-icons/gi";
import { ImCross} from "react-icons/im";
import './nav.css'
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import Footer from './data/Footer'
function App () {
  const[dm,setdm]=useState(false);
  const darm=()=>{
    setdm(!dm)
}
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
    <div className={dm ?"class":"notclass"}>
     
      <div className='navbar'>
            <div className='media'>
            <div className='sidetitle'>
                <Link className='title' to="/" >Favourite Hotel</Link>
            </div>
            <div className='fa'>
                {fas ? <ImCross size={25} onClick={hambur}/>:<GiHamburgerMenu size={25} onClick={hambur}/> }
            </div>
            </div>
            <div className={fas?"links":"lin"}>
               <NavLink to="/" onClick={navga}>Home</NavLink>
               <NavLink to="/aboutus" onClick={navg}>About us</NavLink>
               <h1 onClick={navg}> {dm ? <p onClick={darm}><BsFillBrightnessHighFill size={25}/></p>:<h1 onClick={darm}>< BsFillMoonFill  size={25} /></h1>}</h1>
            </div>  
      </div>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/selectplaces' element={<Places/>}/>
        <Route path='/:id' element={<Navhyd/>}/>
        <Route path='/:id/:id' element={<Imges/>}/>
        <Route path='/:id/manoj' element={<FinalForm/>}/>
     </Routes>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default App