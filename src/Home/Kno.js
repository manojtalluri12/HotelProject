import React,{useEffect} from 'react'
import './revie.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Kno = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
      },[])
    const data=[
        {
            id:'1',
            summary:"Why you choose this hotel?",
            p:"This hotel  services is awsome and also providing excellent food",
        },
        {
            id:'2',
            summary:"What you like in this hotel",
            p:"Services",
        },
        {
            id:'3',
            summary:"Is the rooms more comfortable?",
            p:"Yes",
        },
        {
            id:'4',
            summary:"Why celebrates choose this hotel?",
            p:"This hotel provide services is awsome",
        },
        {
            id:'5',
            summary:"Why only this hotel?",
            p:"Best richest hotel",
        },
        {
            id:'6',
            summary:"What about  hotel timimgs?",
            p:"24/7 avaliable",
        },
        {
            id:'7',
            summary:"What is the rating",
            p:"5/5",
        }
    ]
  return (
    <div className='flex'>
        {
            data.map((eachitem)=>{
                const{id,summary,p}=eachitem
                return<div className='card'  data-aos="zoom-in-up">
                    <details key={id}>
                       <summary className='summary'>{summary}</summary>
                         <p className='sum'>{p}</p>
                    </details>
                </div>
            })
        }
    </div>
  )
}

export default Kno