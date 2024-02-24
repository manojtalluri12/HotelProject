import React, { useState } from 'react'

const Asap = () => {
    const mem=[
        {   id:"1",
            topic:" publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de",
            name:"kali"
        }
        ,
        {    id:"2",
            topic:" Manoj and graphic design, Lorem ipsum is a placeholder text commonly used to de",
            name:"manoj"
        }
        ,
        {   
            id:"3",
            topic:" Power and graphic design, Lorem ipsum is a placeholder text commonly used to de",
            name:"power"
        }
        ,
    ]    
const[data,setdtaa]=useState(mem[0])
const toEd=(index)=>{
  const side=mem[index]
  setdtaa(side)
}
  return (
    <div>
        <div><h1>{data.topic}</h1></div>
        <div>
            {
                mem.map((eachitem,i)=>{
                    const{id
                        
                        
                        ,name}=eachitem
                    return <h1 onClick={()=>toEd(i)} key={id}>{name}</h1>
                })
            }
        </div>
    </div>
  )
}

export default Asap