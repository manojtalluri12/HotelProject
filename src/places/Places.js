import React, { useEffect, useState } from 'react'
import './place.css'
import { NavLink } from 'react-router-dom'
import Footer from '../data/Footer'
const Places = () => {
   const country=[
        {  
            name:"ALL"
     },
    {
        name:"USA"
   },
   {
    name:"UK"
},
{
    name:"INDIA"
}
]
   const cities={
    "ALL":["Texas","New Jersey","New York","Hyderbad","Delhi","Vijayawada","Kolkata","Bangalore","Bedford","London"],
    "USA":["Texas","New Jersey","New York"],
    "INDIA":["Hyderbad","Delhi","Vijayawada","Kolkata","Bangalore"],
    "UK":["Bedford","London"]
   }
   const data=[
    {
        id:"1",
        img:"https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"USA",
        cities:"Texas"
    },
    {
        id:"2",
        img:"https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"INDIA",
        cities:"Vijayawada"
    },
    {
        id:"3",
        img:"https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"INDIA",
        cities:"Kolkata"
    },
    {
        id:"4",
        img:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"USA",
        cities:"New Jersey"
    },
    {
        id:"5",
        img:"https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"USA",
        cities:"New York"
    },
    {
        id:"6",
        img:"https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"UK",
        cities:"London"
    },
    {
        id:"7",
        img:"https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"INDIA",
        cities:"Hyderbad"
    },
    {
        id:"8",
        img:"https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"INDIA",
        cities:"Chennai"
    },
    {
        id:"9",
        img:"https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"INDIA",
        cities:"Bangalore"
    },
    {
        id:"10",
        img:"https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=600",
        country:"UK",
        cities:"Bedford"
    },
   ]
   const[selecst,setelect]=useState("ALL");
   const[places,setplaces]=useState(data);
   useEffect(()=>{
    const fill=data.filter((eachitem)=>{
        if(selecst === "UK"){
        return eachitem.country === selecst
        }
        else if(selecst === "USA"){
            return eachitem.country === selecst
        }
        else if(selecst === "INDIA"){
            return eachitem.country === selecst
        }
        else{
            return eachitem
        }
    })
    setplaces(fill)
    console.log(fill);
},[selecst])
  return (
    <div>
        <div className='divison'>
           <h1 className='hed'>Places</h1>
           <p className='please'>Please select exact location</p>
           <div className='option'>
            <select onChange={(e)=>  setelect(e.target.value)} className='select'>
                {
                    country.map((ctr)=>{
                        const{  name}=ctr
                        return<option>{name}</option>
                         
                    })
                }
            </select>
            {
                selecst &&  <select className='select'>
                {
                    cities[selecst].map((city)=>{
                        return <option>{city}</option>
                    })
                }
               </select>
            }
           
           </div>
        </div>

        <div>

        </div>
        <div className='datas'>
        <div className='data'>
            {
                places.map((echitem)=>{
                    const {id,img,country,cities}=echitem
                    return<NavLink to={`/${id}`} key={id} className='idss'>
                        <div>
                            <img src={img} alt='mm' className='pics'/>
                        </div>    
                        <div>
                            <h1 className='h1'>{country}</h1>
                            <p className='p'>{cities}</p>
                        </div>    
                    </NavLink>
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Places