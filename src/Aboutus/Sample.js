import React,{useState} from 'react';


const Sample = () => {
    const imges={
        "manoj":[{id:"gvjvcj" ,val:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gvjcj" ,val:"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gvvcj" ,val:"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gcj" ,val:"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600"},],
        "kasi":[{id:"gvjvcj" ,val:"https://images.pexels.com/photos/6061006/pexels-photo-6061006.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gvjcj" ,val:"https://images.pexels.com/photos/12199880/pexels-photo-12199880.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gvvcj" ,val:"https://images.pexels.com/photos/11871284/pexels-photo-11871284.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"gcj" ,val:"https://images.pexels.com/photos/272802/pexels-photo-272802.jpeg?auto=compress&cs=tinysrgb&w=600"},]
    } 
     const [slide,setslide]=useState(imges.manoj[0]);
     const  handlecl=(index)=>{
      const side=imges.manoj[index];
      setslide(side)
     }
  return (
    <div>
       <div className='main'><img src={slide.val} className='mainimges'/></div>
       <div className='allpics' >
        {
        imges.manoj.map((eachitem,i)=>{
          const{id,val}=eachitem
          return <img src={val} key={id} 
          onClick={()=>handlecl(i)}
           className='pictu'/>
        })
        
      }
      </div>
      </div>
  )
}

export default Sample