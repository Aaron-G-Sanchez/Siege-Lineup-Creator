import './App.css'
import axios from 'axios'
import Home from './Components/Home'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ViewOperators from './Components/ViewOperators'

const App = () => {
  const [operators, setOperators] = useState([])

  const getOperators = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators')
      setOperators(response.data.operators)
      console.log(response.data.operators)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOperators()
  }, [])

  return (
    <>
      {/* <header>
        <h1>Nav goes here</h1>
      </header> */}
      <Routes>
        <Route path="/" element={<Home operators={operators} />} />
        <Route
          path="/viewOps"
          element={<ViewOperators operators={operators} />}
        />
      </Routes>
    </>
  )
}

export default App
