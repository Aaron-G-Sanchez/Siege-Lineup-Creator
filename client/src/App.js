import './App.css'

import Home from './Components/Home'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <h1>Nav goes here</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
