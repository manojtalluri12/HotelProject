import React from 'react'
import { useParams} from 'react-router-dom'
import './g.css'
import { useForm, ValidationError } from '@formspree/react';
const FinalForm = () => {
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
      const [state, handleSubmit] = useForm("mdornryb");
      if (state.succeeded) {
          return <p className='sucess'>Thanks Book our Hotel</p>;
      }
  return (<div >
    <div className='hedr'><h1 className='fill'>FILL THE GIVEN DETAILS</h1></div>
    <div className='order'>
    <form onSubmit={handleSubmit} className='formss' data-aos="zoom-in">
        <div className='pr'>
        <label htmlFor="name" className='ok'>
        Branch
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        value={finding.ck}
        className='ok'
      />
      <ValidationError 
        prefix="text" 
        field="name"
        errors={state.errors}
      />     
        <label htmlFor="name" className='ok'>
       Hotel Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        value={finding.name}
        className='ok'
      />
      <ValidationError 
        prefix="text" 
        field="name"
        errors={state.errors}
      />  
      <label htmlFor="name" className='ok'>
       Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Enter Name'
        className='ok'
      />
      <ValidationError 
        prefix="text" 
        field="name"
        errors={state.errors}
      />  
      <label for="phone" className='ok'>Enter a phone number:</label>
      <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  className='ok' required/>
       <small>Format: 123-45-678</small>
      <label htmlFor="email" className='ok'>
       Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your mail id'
        className='ok'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="name" className='ok'>
        Check In Time
      </label>
      <input type="datetime-local" id="name" name="IN-OUT-TIMING"/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <label htmlFor="name" className='ok'>
        Check Out Time
      </label>
      <input type="datetime-local" id="name" name="IN-OUT-TIMING"/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button  className="but" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default FinalForm