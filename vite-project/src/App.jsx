import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';
import MaterialComponent from './MaterialComponent';
import UserComponent from './UserComponent';
import UserCRUDComponent from './UserCRUDComponent';
import Menu from './Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Menu1 from './Menu1';
import UseRefExample from './UseRefExample';

function App() {
  let a=10
  const pi=3.14
  const H4 = styled.h4 `
          color: grey;`
  let mycolor = {
    color:"pink"
  }
  return (
    <>
    <div>
    <BrowserRouter>
      <Menu1 />
      <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/useRef' element={<UseRefExample />}/>
      </Routes>
    </BrowserRouter>  
     
    </div>
     
    </>
    
  )
}

export default App
