import React from 'react'
import Home from '../Home/Home'
import Review from '../Home/Review'
import More from '../Home/More'
import Places from '../places/Places'
//import Footer from '../data/Footer'
//import Sample from '../Aboutus/Sample'
//import Asap from '../Aboutus/Asap'
const Homepage = () => {
  return (
    <div>
      <Home/>
      <Review/>
      <More/>
      <Places/>
    </div>
  )
}

export default Homepage