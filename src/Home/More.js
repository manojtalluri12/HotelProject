import React,{useEffect} from 'react'

import Kno from './Kno'
import './revie.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const More = () => {
  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  return (
    <div className='f'>
        <div>
            <h1 className='faqq' data-aos="zoom-in">FAQ</h1>
        </div>
        <div className='car'>
        <div className='felx'>
        <div className='kno'>
           <Kno/>
        </div>
        </div>
        </div>
       
      
    </div>
  )
}

export default More