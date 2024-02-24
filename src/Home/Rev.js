import React from 'react'
import './revie.css'
const Rev = () => {
    const data=[
        {
            id:'1',
            Name:"Siri",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZBSNDgbxd5A6hmYQckg5LehtNpdzyOlzhbBCNa1fGitZVTF03wXDQa0JewFe0BbaJ30&usqp=CAU",
            message:"World full experience using this hotel",
            pics:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09fs8M9vXu7dnpyFrl9CSO_-cOGYVrDB7POJ4lIE8FUHHGv91YVvP2CRvY5RHtvb-F3I&usqp=CAU",
        },
        {
            id:'2',
            Name:"Kalesha",
            img:"https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg",
            message:"Room are more comfortable",
            pics:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09fs8M9vXu7dnpyFrl9CSO_-cOGYVrDB7POJ4lIE8FUHHGv91YVvP2CRvY5RHtvb-F3I&usqp=CAU",
        },
        {
            id:'3',
            Name:"Anushka",
            img:"https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
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

export default Rev