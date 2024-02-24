import React, { useEffect, useReducer, useState } from 'react'
const reducer=(state,action)=>{
  if(action.type==="userdata"){
    return{
        ...state,
        userdatas:action.paylode
    }
  }
  if(action.type==="delete"){
    const newto=state.userdatas.filter((eachitem)=>{
        return eachitem.id !== action.paylode
    })
    return{
        ...state,
        userdatas:newto
    }
  }
  if(action.type==="isloading"){
    return{
        ...state,
        isLoading:action.paylode
    }
  }
  if(action.type==="edit"){
    return{
        ...state,
        isEdting:action.paylode
    }
  }
  if(action.type==='updatedat'){
    const rt=state.userdatas.map((eachitem)=>{
        if(eachitem.id === action.paylode.id){
            return {
                id:action.paylode.id,
                name:action.paylode.name,
                email:action.paylode.email
            }
        }
        else{
            return eachitem
        }
    })
    return{
        ...state,
        userdatas:rt,
    }
  }
  return state
}
const Reducer1 = () => {
    const intialState={
        userdatas:[],
        isLoading:false,
        isError:{status:false,msg:''},
        isEdting:{status:false, id:'',name:'',email:''}
    }
    const fetchingdata=async(url)=>{
        dispatch({type:"isloading",paylode:true})
        dispatch({type:"error",paylode:{status:false,msg:''}})
       try {
        const response=await fetch(url);
        const data=await response.json();
        dispatch({type:"userdata", paylode:data})
        dispatch({type:"isloading",paylode:false})
        dispatch({type:"error",paylode:{status:false,msg:''}})
       } catch (error) {
        dispatch({type:"isloading",paylode:false})
        dispatch({type:"error",paylode:{status:true,msg:''}})
       }
    }
    useEffect(()=>{
        fetchingdata("https://jsonplaceholder.typicode.com/users")
    },[])
    const[state,dispatch]=useReducer(reducer,intialState)
    const handleDelete=(id)=>{
        dispatch({type:"delete", paylode:id})
    }
    if(state.isLoading){
        return<h1>Loading......</h1>
    }
    const userdtaa=(id,name,email)=>{
  
        dispatch({type:"updatedat" ,paylode:{id,name,email}})
        dispatch({type:"edit",paylode:{status:false,id:'',name:'',email:''}})
    }
  return (
    <div>
        {state.isEdting?.status && <Editcomponent id={state.isEdting.id} currentName={state.isEdting.name} 
        currentEmail={state.isEdting.email} userdtaa={userdtaa}/>}
    <div>
      {
        state.userdatas.map((eachitem)=>{
            const{id,name,email}=eachitem
            return<div key={id}>
                <h3>{name}</h3>
                <p>{email}</p>
                <button onClick={()=>handleDelete(id)}>Delete</button>
                <button onClick={()=>dispatch({type:"edit",paylode:{status:true,id:id,name,email}
            })}>Edit</button>
            </div>
        })
      }
      </div>
    </div>
  )
}


const Editcomponent= ({id,currentName,currentEmail,userdtaa}) => {
    const[name,setName]=useState(currentName||"")
    const[email,setemail]=useState(currentEmail||"")
  return (
    <>
    <div>
        <form>
            <input type='text' name='title' id='title' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' name='email' id='email' value={email}  onChange={(e)=>setemail(e.target.value)}/>
            <button onClick={()=>userdtaa(id,name,email)}>Update</button>
        </form>
    </div>
    </>
  )
}

export default Reducer1