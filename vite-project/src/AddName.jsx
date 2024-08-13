import React, { memo } from 'react'

const AddName = ({data,saveName}) => {
    console.log("Add name component called...");
    
  return (
    <div>
      <button onClick={saveName}>Add Name</button>
      <ul>
        {
            data && data.map((i,index)=>{
                return <li key={index}>{i}</li>
            })
        }
      </ul>
    </div>
  )
}

export default memo(AddName)
