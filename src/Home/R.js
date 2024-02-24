import React from 'react'
import './revie.css'
const Re = () => {
    const data=[
        {
            id:'1',
            Name:"Amar",
            img:"https://manoj-ceo-site.netlify.app/amar.jpg",
            message:"World full experience using this hotel",
            pics:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09fs8M9vXu7dnpyFrl9CSO_-cOGYVrDB7POJ4lIE8FUHHGv91YVvP2CRvY5RHtvb-F3I&usqp=CAU",
        },
        {
            id:'2',
            Name:"Manoj",
            img:"https://manoj-ceo-site.netlify.app/MNJ.jpeg",
            message:"Room are more comfortable",
            pics:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09fs8M9vXu7dnpyFrl9CSO_-cOGYVrDB7POJ4lIE8FUHHGv91YVvP2CRvY5RHtvb-F3I&usqp=CAU",
        },
        {
            id:'3',
            Name:"Chinni",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_404L7AkjB2MJ7pnN2ZzaTUVaW4IU7nbrvNO-dumKmBNrvn7ikaY0HFSjdKwOHLa2Dw&usqp=CAU",
            message:"Good services",
            pics:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09fs8M9vXu7dnpyFrl9CSO_-cOGYVrDB7POJ4lIE8FUHHGv91YVvP2CRvY5RHtvb-F3I&usqp=CAU",
        },
     
    ]
  return (
    <div className='grid'>
       {
        data.map((eachuser)=>{
            const{id,Name,img,message,pics}=eachuser;
            return<div key={id} className='id'>
                <div className='mg'><img src={img} alt='mn' className='pic'/></div>
                <div><h1 className='name'>{Name}</h1></div> 
                <div><p className='paragraph'>{message}</p></div>   
            </div>
        })
       }
    </div>
  )
}

export default Re