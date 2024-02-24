import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Rev from './Rev';
import Re from './Re';
import R from './R'
import './revie.css'
function Review  () {
  return (
    <Carousel className='carousel'>
        <div className='more'>
        <h1 className='heds'>Review</h1>
        <h5 className='hes'></h5>
        </div>
      <Carousel.Item>
       <Re/>
      </Carousel.Item>
      <Carousel.Item>
        <R/>
      </Carousel.Item>
      <Carousel.Item>
        <Rev/>
      </Carousel.Item>
      <Carousel.Item>
       <Re/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Review;