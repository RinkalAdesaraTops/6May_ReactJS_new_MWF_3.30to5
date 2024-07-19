import React, { useEffect, useState,useRef } from 'react'

const Firstcomponent = () => {
    let a = useRef(10);
    const [name,setName] = useState("Test")
    const changeName = ()=>{
        setName("Pqr")
        a.current = a.current+10;
        console.log("a is "+a);
    }
    useEffect(()=>{
        setTimeout(()=>{
            console.log("use effect called...");
            setName("Abc")
        },3000)
    },[])
    
  return (
    <div>
      <h3>First Component</h3>
      <h4>Name is -- {name}</h4>
      <h4>A is -- {a.current}</h4>
      <button onClick={changeName}>Click</button>
      
    </div>
  )
}

export default Firstcomponent
