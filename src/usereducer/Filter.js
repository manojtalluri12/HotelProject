import React from 'react'

const Filter = (props) => {
    const filtersdta=(event)=>{
        props.filterValueSelected(event.target.value)
    }
    
  return (
    <div>
        <div  className='filter'>
            <select onChange={filtersdta}>
                <option value=""></option>
                <option value="Ordinary Drink">Ordinary Drink</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Shot">Shot</option>
            </select>
        </div>
    </div>
  )
}

export default Filter