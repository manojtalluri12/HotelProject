import React, { useState } from 'react'
import { useNavigate, useParams,Link} from 'react-router-dom'
import './img.css'

const Imges = () => {
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
  const{id}=useParams();
  console.log(id);
  const finding=Hotel.find((ecah)=>{
    return ecah.id === id
  })
  console.log(finding);
  const imges=[{id:"gvjvcj" ,val:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:"gvjcj" ,val:"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:"gvvcj" ,val:"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:"gcj" ,val:"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600"},
  ]
  
  const [slide,setslide]=useState(imges[0]);
 const  handlecl=(index)=>{
  const side=imges[index];
  setslide(side)
 }
 const Cb={
  "Madhapur":"1300 ₹",
  "KPHB Colony":"1700 ₹",
  "LB Nagar":"1900 ₹",
  " Jubilee Hills":"5300 ₹",
  "Habsiguda":"1600 ₹",
  "Erragadda":"1700 ₹",
  "Chaitanyapuri":"1000 ₹",
  "Ameerpet":"1300 ₹",
  "Thirumangalam":"2300 ₹",
  "Anna Nagar":"1900 ₹",
  "Kundalahalli":"2900 ₹",
  "Banashankar":"4900 ₹",
  "Hoodi":"3900 ₹",
  "Amodghata":"1500 ₹",
  "Eluru road part (Gunadala)":"2000 ₹ ",
  "Hanuman Nagar":"1000 ₹",
   "Tesco Bedford":"500£",
  "Bakerloo":"800£",
  "Digging down":"900£",
  "Thameslink":"300£",

  "Metropark Station":"1000$",
  "Neptune Avenue":"500$",
  "Nassau Avenue":"600$",
  "Edison":"700$",
  "Amarillo":"800$",
  "Abilene":"780$",
 }
 const nav=useNavigate();
 //const clickev=()=>{
 // nav('/manoj')
 //}
  return (
    <div>
      <div className='rks'><h1 className='roomss'>Check Room Imges</h1></div>
      <div className='gt'>
      <div className='Allinone'>
      <div className='main'><img src={slide.val} className='mainimges'/></div>
      <div className='allpics'>
        {
          imges.map((eachitem,i)=>{
            const{id,val}=eachitem
            return <img src={val} key={id} 
            onClick={()=>handlecl(i)}
             className='pictu'/>
          })
        }
      </div>
      </div>
      <div className='mat'>
        <div className='inmat'> 
          <h5 className='name'>{finding.name}</h5>
          <h3 className='ck'>{finding.ck}</h3>
          <h6 className='ck'>24/7 WIFI AVALIABLE</h6>
          {console.log() }
           <p>Price:{Cb[finding.ck]} per day</p>
          <Link to={`/${id}/manoj`} className='buttons' >BOOK</Link>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Imges