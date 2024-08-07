import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    let a = useRef(25);
    const [data,setData] = useState({
        name:"teghsfd",
        age:25,
        salary:25600
    })
    useEffect(()=>{
        console.log("use effect called"+data);
    })
    const addVal = ()=>{
        a.current = a.current+10;
        console.log(a.current);
    }
  return (
    <div>
      <ul>
        <li>Name is - {data.name}</li>
        <li>Age is - {data.age}</li>
        <li>Salary is - {data.salary}</li>
        <li>A is -- {a.current}</li>
        <button onClick={()=>setData({name:"abcd"})}>Click</button>
        <button onClick={addVal}>Add value</button>
      </ul>
    </div>
  )
}

export default UseRefExample
