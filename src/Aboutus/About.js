import React from 'react'
import './about.css'
import Form from './Form'
import {  useNavigate } from 'react-router-dom'
const About = () => {
  const data=[
    {
      id:"1",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHlXTQJQXtclB_4TriJUzlwXyeFY9sUG0BQ&usqp=CAU",
    },
    {
      id:"2",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQae8yzEVrJuRXRoNLcnwBlL-TokqlgYJgYFA&usqp=CAU",
    },
    {
      id:"3",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOhuidzf5Vqq2S-kkKdw_K9NNB44zosgLVw&usqp=CAU",
    }
  ]
  const nav=useNavigate();
  const room=()=>{
    
    nav('/selectplaces')
  }
  return (
    <div className='fullab'>
      <div className='riglef'>
        <div className='fullleft'>
          <div className='leftsides'>
            <div className='Imges'>
              <img src='https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg' alt='pics' className='manojkumar'/>
            </div>
            <div className='cities'>
              {
                data.map((eachitem)=>{
                  const{id,name,img}=eachitem
                  return(
                    <div key={id} className='idsss'>
                      <div >
                        <img onClick={room} src={img} alt='jhk' className='picss'/>
                      </div>
                    </div>
                  )
                })

              }

            </div>
          </div>
        </div>
        <div className='rightside'>
         
          <div className='paragra'>
            <p className='paragra'> Find the Best Great Hotels for You on hotelfav Browse Reviews & Photos. Take Advantage of Low Rates on Hundreds of Thousands of Top-Rated Properties.
                 Book Now! Real Customer Reviews. Enjoy Your Home Comforts. See It on the Map.Find the Best Great Hotels for You on Hotels.com. Browse Reviews & Photos. Take Advantage of Low Rates on Hundreds of Thousands of Top-Rated Properties. Book Now! Real Customer Reviews. 
                 Enjoy Your Home Comforts. See It on the Map.</p>
          </div>
        </div>
      </div>
      <div className='contactus'>
        <div className='cont'>
          <h1 className='cons'>Contact us</h1>
        </div>
         <div className='forms'>
          <Form/>
         </div>
      </div>
    </div>
  )
}

export default About