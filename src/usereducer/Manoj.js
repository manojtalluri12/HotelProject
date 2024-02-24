import React,{useEffect,useState} from 'react'
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Manoj = () => {
    const [data,setdata]=useState([]);
    const [mes,setmes]=useState();
    const fetchdata=async(url)=>{
        const response=await fetch(url);
        const data=await response.json();
        const {drinks}=data
        setdata(drinks)
    }
    useEffect(()=>{
        const cur=`${url}${mes}`
        fetchdata(cur)
    },[mes])
  return (
    <div className='mnoj'>
        <select value={mes} onChange={e=>setmes(e.target.value)}>
           <option></option>
            <option>Cocktail</option>
            <option>Shot</option>
            <option>Cocoa</option>
            <option>Other</option>
            <option>Coffee</option>
        </select>
        
        <hr/><hr/>
        {
            data&&data.map((eachitem)=>{
                const{idDrink,strDrink,strCategory,strDrinkThumb}=eachitem;
                return(
                    <div key={idDrink}>
                        <img src={strDrinkThumb} alt='mano' className='pic'/>
                        <h1>{strDrink}</h1>
                        <p>{strCategory}</p>
                    </div>)
            })
        }

    </div>
  )
}

export default Manoj