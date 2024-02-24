import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';
const Home = () => {
    const nav=useNavigate();
    const navpag=()=>{
        nav('/selectplaces')
    }
    useEffect(()=>{
        AOS.init({duration:3000})
      },[])
  return (
       <div className='room'>
        <div className='header'>
            <div className='img'  data-aos="fade-up">
                <img src='https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=600' alt='manoj' className='manoj'/>
            </div>
            <div className='matter' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <p>
                 Find the Best Great Hotels for You on hotelfav Browse Reviews & Photos. Take Advantage of Low Rates on Hundreds of Thousands of Top-Rated Properties.
                 Book Now! Real Customer Reviews. Enjoy Your Home Comforts. See It on the Map.Find the Best Great Hotels for You on Hotels.com. Browse Reviews & Photos. Take Advantage of Low Rates on Hundreds of Thousands of Top-Rated Properties. Book Now! Real Customer Reviews. 
                 Enjoy Your Home Comforts. See It on the Map.
                </p>
                <button className="book" onClick={navpag}>BOOK HOTEL</button>
            </div>
        </div>
        </div>
  )
}

export default Home