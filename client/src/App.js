import './App.css'
import axios from 'axios'
import Home from './Components/Home'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ViewOperators from './Components/ViewOperators'
import CreateLineup from './Components/CreateLineup'
import AttackCreator from './Components/AttackCreator'
import DefenseCreator from './Components/DefenseCreator'

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
          path="/view-ops"
          element={<ViewOperators operators={operators} />}
        />
        <Route path="/create-lineup" element={<CreateLineup />} />
        <Route path="/create-lineup/attack" element={<AttackCreator />} />
        <Route path="/create-lineup/defense" element={<DefenseCreator />} />
      </Routes>
    </>
  )
}

export default App
