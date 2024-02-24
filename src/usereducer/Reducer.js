import React,{useReducer} from 'react'
const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id !== action.payload;
        })
        return{
            ...state,
            data:newPersons,
            length:state.length-1
        }
    }
    return state  
}
const Reducer = () => {
    const intialState={
        data:[
            {id:'123',firstName:"manoj",email:"manoj@gmail.com"},
            {id:'13',firstName:"manoj",email:"manoj@gmail.com"}
        ],
        length:2,
    };
    const[state,dispatch]=useReducer(reducer,intialState)
    const handDelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id
        })
    }
  return (
    <div>
        <h2>current user length:{state.length}</h2>
        {
            state.data.map((eachitem)=>{
                const{id,firstName,email}=eachitem
                return <div key={id}>
                    <h3>{firstName}</h3>
                    <h2>{email}</h2>
                    <button onClick={()=>handDelete(id)}>delete</button>
                </div>
            })
        }
        
    </div>
  )
    }

export default Reducer