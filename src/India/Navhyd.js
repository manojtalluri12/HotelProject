import React, { useEffect, useState } from 'react'
import './hyd.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
const Navhyd = () => {
    
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
   const Hotel=[
    {
        id:"12",
        img:"https://images.pexels.com/photos/2204880/pexels-photo-2204880.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 2B HOTEL",
        ck:"Madhapur"

    },
    {
        id:"13",
        img:"https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV STAR HOTEL",
        ck:"KPHB Colony"
    },
    {
        id:"14",
        img:"https://images.pexels.com/photos/271672/pexels-photo-271672.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1B HOTEL",
        ck:"LB Nagar"

    },
    {
        id:"15",
        img:"https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV B-STAR HOTEL",
        ck:"Jubilee Hills"
    },
    {
        id:"16",
        img:"https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 2A HOTEL",
        ck:"Habsiguda"

    },
    {
        id:"17",
        img:"https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 3B  HOTEL(new branch)",
        ck:"Erragadda"
    },
    {
        id:"18",
        img:"https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 7B HOTEL",
        ck:"Chaitanyapuri"

    },
    {
        id:"19",
        img:"https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 5-STAR HOTEL",
        ck:"Ameerpet"
    },
    {
        id:"99",
        img:"https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 5-AR HOTEL",
        ck:"Thirumangalam"
    },
    {
        id:"198",
        img:"https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 3S HOTEL",
        ck:"Anna Nagar"
    },
    {
        id:"155",
        img:"https://images.pexels.com/photos/732199/pexels-photo-732199.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV AB-STAR HOTEL",
        ck:"Kundalahalli"
    },
    {
        id:"165",
        img:"https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 2A5 HOTEL",
        ck:"Banashankar"

    },
    {
        id:"164",
        img:"https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1B HOTEL",
        ck:"Hoodi"

    },
    {
        id:"1684",
        img:"https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1KB HOTEL",
        ck:"Amodghata"
    },
    {
        id:"16840",
        img:"https://images.pexels.com/photos/297984/pexels-photo-297984.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1KkB HOTEL",
        ck:"Eluru road part (Gunadala)"
    },
    {
        id:"16848",
        img:"https://images.pexels.com/photos/2294465/pexels-photo-2294465.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1KLB HOTEL",
        ck:"Hanuman Nagar"
    },
    {
        id:"19899",
        img:"https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 3S HOTEL",
        ck:"Thameslink"
    },
    {
        id:"155000000000",
        img:"https://images.pexels.com/photos/732199/pexels-photo-732199.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV AB-STAR HOTEL",
        ck:"Tesco Bedford"
    },
    {
        id:"1896",
        img:"https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 2A HOTEL",
        ck:"Bakerloo"

    },
    {
        id:"1789",
        img:"https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 3B  HOTEL(new branch)",
        ck:"Digging down"
    },
    {
        id:"1200000000000000000",
        img:"https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 2B HOTEL",
        ck:"Amarillo"

    },
    {
        id:"1555555555555555553",
        img:"https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV STAR HOTEL",
        ck:"Abilene"
    },
    {
        id:"14777777777777",
        img:"https://images.pexels.com/photos/2684260/pexels-photo-2684260.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1B HOTEL",
        ck:"Neptune Avenue"

    },
    {
        id:"1555555555555555",
        img:"https://images.pexels.com/photos/1287441/pexels-photo-1287441.jpeg?auto=compress&cs=tinysrgb&w=6000",
        name:"FAV B-STAR HOTEL",
        ck:"Nassau Avenue"
    },
    {
        id:"1684434444444448",
        img:"https://images.pexels.com/photos/2294465/pexels-photo-2294465.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 1KLB HOTEL",
        ck:"Edison"
    },
    {
        id:"198777777777799",
        img:"https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"FAV 3S HOTEL",
        ck:"Metropark Station"
    },
 ]
   const Cities={
    "Bangalore":["select area","Banashankar","Hoodi","Kundalahalli"],
    "Hyderbad":["select area","KPHB Colony","Madhapur","LB Nagar","Jubilee Hills","Habsiguda","Erragadda","Chaitanyapuri","Ameerpet"],
    "Chennai":["select area","Anna Nagar","Thirumangalam"],
    "Kolkata":["select area","Amodghata"],
    "Vijayawada":["select area","Hanuman Nagar","Eluru road part (Gunadala)"],
    "Bedford":["select area","Thameslink","Tesco Bedford"],
    "London":["select area","Digging down","Bakerloo"],
    "New York":["select area","Nassau Avenue","Neptune Avenue"],
    "Texas":["select area","Abilene","Amarillo"],
    "New Jersey":["select area","Metropark Station","Edison"],
   }
    const{id}=useParams();
    console.log(id);
    const finding=data.find((ecah)=>{
        return ecah.id === id
    })
    console.log(finding);
    const[sub,subject]=useState('')
    const[date,setdate]=useState(Hotel)
    useEffect(()=>{
        const hotels=Hotel.filter((each)=>{
            return each.ck=== sub
        })
        setdate(hotels)
    },[sub])
    const nav=useNavigate();
    const clik=()=>{
        nav('/selectplaces')
    }
  return (
    <div>
        <div className='DataNames'>
            <h4 className='countryname'> {finding.country} Branch</h4>
            <h5 className='countryname'>Please select perfect hotel in {finding.cities} to book hotel</h5>
        </div>
        <div className='sec'>

            <button onClick={clik}>Backpage</button>
            <select onChange={(e)=>subject(e.target.value)} className='select'>
                {
                    Cities[finding.cities].map((city)=>{
                        return <option>{city}</option>
                    })
                }
            </select>
            <div className='crds'>
            {
                date&&date.map((eachit)=>{
                    const{id,img,name}=eachit
                    return (<Link to={`/${id}/${id}`} key={id} className='s'>
                        <div>
                            <img src={img} alt='man' className='ics'/>
                        </div>
                        <div>
                            <p className='pas'>{name}</p>
                        </div>
                    </Link>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Navhyd