import React from 'react'
import { useState } from 'react'

const UserComponent = () => {
    const [username,setUsername]=useState("")
    const [id,setId]=useState("")
    const [age,setAge]=useState("")
    const [salary,setSalary]=useState("")
    
    const [data,setData] = useState([])
    const saveData = (e)=>{
        e.preventDefault();
       let len = data.length;
        setData([
            ...data,
            {
                id:len+1,
                name:username,
                age:age,
                salary:salary
            }
        ])
        setUsername("")
        setAge("")
        setSalary("")
        // setUsername("")
    }
    const updateData = (e)=>{
        e.preventDefault();
        let ans = data.map((i)=>{
            if(i.id == id){
                i.name = username
                i.age = age;
                i.salary = salary
            }
            return i;
        }) 
        setData(ans)
        setUsername("")
        setAge("")
        setSalary("")
        setId("")
    }
    const delData = (id)=>{
        const res = data.filter((i)=>{
                return i.id != id
        })
        let j=1;
        let ans = res.map((i)=>{
            i.id = j++
            return i
        })
        setData(ans)
    }
    const editData = (id)=>{
        let ans = data.find((i)=>{
            return i.id == id;
        })
        setId(id)
        setUsername(ans.name)
        setAge(ans.age)
        setSalary(ans.salary)
        // setSalary(ans.salary)


    }
  return (
    <div>
      <form action="#" onSubmit={id? updateData : saveData} method='post'>
        <label htmlFor="">Name:</label>
        <input type="text" name="username" id="" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="" value={age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="" value={salary} onChange={(e)=>setSalary(e.target.value)}/><br/><br/>
        <input type="submit" name="Save" id="" value={ id? "Update Data": "Save Data"}/><br/><br/>
      </form>

      <br /><br />
      <table border={'2'}>
        <tr>
        <td>Id</td>
        <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Action</td>
        </tr>
        {
            data.map((i)=>{
                return <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>
                </tr>
            })
        }
      </table>

    </div>
  )
}

export default UserComponent
