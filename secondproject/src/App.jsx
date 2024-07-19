import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>My Vite React Project</h3>
      <Firstcomponent />
    </>
  )
}

export default App
