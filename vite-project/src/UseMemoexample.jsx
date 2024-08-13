import React, { useCallback, useMemo, useState } from 'react'
import AddName from './AddName';
const addCalculation = (no)=>{
    console.log('add calc function called...');
    
    for(let i=0;i<1000;i++){
        no += 1
    }
    return no;
}
const UseMemoexample = () => {

    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    const [data,setData] = useState([])
   
    const ans = useMemo(()=>{
        addCalculation(count)
    },[count])
    const addCounter = ()=>{
        console.log('add counter fun called.');
        setCount(count+1)
    }
    const handleChange = (e)=>{
        setName(e.target.value)      
    }
    const saveName = useCallback((e)=>{
        
            e.preventDefault()
            setData([
                ...data,
                name
            ])
        
    },[name])
    
  return (
    <div>
      <h3>Counter is - {count}</h3>
      <button onClick={addCounter}>Add</button>
      <br />
      <input type="text" name="name" id="" value={name} onChange={handleChange} />
      <AddName saveName={saveName} data={data}/>
      <h4>Answer is -- {ans}</h4>
    </div>
  )
}


export default UseMemoexample
