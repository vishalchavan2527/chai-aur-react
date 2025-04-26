import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black rounded-xl p-3'>Tailwind Test</h1>

    <Card username = "vishal" btnText = "Click me"/>
    <Card username = "punam" btnText = "visit card"/>
    </>
  )
}

export default App
