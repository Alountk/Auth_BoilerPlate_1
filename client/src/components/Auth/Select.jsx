import React from 'react'

export const Select = ({register, selects, name}) => {    
    return (
     <>
     <select name={name} ref={register}>
         {selects?.map(e=>{
             return(
                 <option key={e.id} value={e.value}>{e.text}</option>
             )
         })}
     </select>
    </>
)};
