import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const UserCRUDComponent = () => {
    const [data,setData] = useState({
        uname:"",
        id:"",
        age:"",
        salary:""
    })
    const [userData,setUserData] = useState([])
    const handleChange = (e)=>{
        // let n = e.target.name
        // let val = e.target.value
        const { name,value} = e.target
        setData({
            ...data,
            [name]:value
            // [n]:val
        })

    }
    const saveData = (e)=>{
        e.preventDefault();
        let len = userData.length
        data.id = len+1;
        setUserData([
            ...userData,
            data
        ])
        setData({
            uname:"",
            id:"",
            age:"",
            salary:""
        })
    }
    const delData = (id)=>{
        const res = userData.filter((i)=>{
                return i.id != id
        })
        let j=1;
        let ans = res.map((i)=>{
            i.id = j++
            return i
        })
        setUserData(ans)
    }
    const editData = (id)=>{
        let ans = userData.find((i)=>{
            return i.id == id;
        })
        setData(ans)
    }
    const updateData = (e)=>{
        e.preventDefault();
        let ans = userData.map((i)=>{
            if(i.id == data.id){
                i.uname = data.uname
                i.age = data.age;
                i.salary = data.salary
            }
            return i;
        }) 
        setUserData(ans)
        setData({
            uname:"",
            id:"",
            age:"",
            salary:""
        })
    }
    return (
        <div>
            <h3>User CRUD Operation</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Form onSubmit={data.id?updateData:saveData} action='#' method='post'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="uname" placeholder="Enter name" value={data.uname} onChange={handleChange}/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter age" value={data.age} onChange={handleChange}/>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" name="salary" placeholder="Salary" value={data.salary} onChange={handleChange}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                               {data.id ? "Update Data":"Save Data" }
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Age</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
            userData.map((i)=>{
                return <tr>
                    <td>{i.id}</td>
                    <td>{i.uname}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>

                </tr>
            })
        }
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCRUDComponent
