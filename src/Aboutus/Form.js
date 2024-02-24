import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import './form.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage} from "react-icons/ai";
import { BsPen} from "react-icons/bs";
function Form () {
  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  const [state, handleSubmit] = useForm("mdornryb");
  if (state.succeeded) {
      return <p className='sucess'>Thanks for calling!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='formss' data-aos="zoom-in">
        <div className='pr'>
      <label htmlFor="name" className='ok'>
       <BsPen/>
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
      <label htmlFor="email" className='ok'>
        <AiOutlineMail size={20}/>
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
        <AiOutlineMessage size={20}/>
      </label>
      <textarea
        id="message"
        name="message"
        placeholder='Type any messsage'
        className='ok'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}
export default Form