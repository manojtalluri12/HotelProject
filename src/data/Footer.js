import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {  BsFacebook } from "react-icons/bs";

import { BsBrowserChrome } from "react-icons/bs";

import './facebook.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='re'>
        <div className='social'>
           <div className='phone'>
            <p><BsFillTelephoneFill/></p>
            <p>6305414841</p>
           </div>
           <div className='mail'>
            <p><AiOutlineMail/></p>
            <p>hotel@gmail.com</p>
           </div>
           <div className='website'>
           <p><BsBrowserChrome/></p>
            <p>hotelfav.netlify.app</p>
           </div>
           </div>
           <div className='tei'>
           <div className='twitter'>
           <p><AiOutlineTwitter/></p>
           </div>
           <div className='facebook'>
           <p><BsFacebook/></p>
           </div>
           <div className='inst'>
           <p><AiOutlineInstagram/></p>
           </div>
           </div>
        </div>
        <div className='nexts'>
            <p className='para'>Copyright © 2022–2023 FavHotel All rights reserved By Manoj Kumar Talluri.</p>
        </div>
    </div>
  )
}

export default Footer