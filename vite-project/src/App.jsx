import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';
import MaterialComponent from './MaterialComponent';
import UserComponent from './UserComponent';
import UserCRUDComponent from './UserCRUDComponent';

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
      {/* <UserComponent /> */}
      <UserCRUDComponent />
    </div>
      {/* <h3 style={mycolor}>My react Component </h3>
      <H4>A is == {a}</H4>
      <h4 className='abc'>Pi is == {pi}</h4>

      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <MaterialComponent /> */}
    </>
    
  )
}

export default App
