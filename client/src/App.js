import './App.css'
import axios from 'axios'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ViewOperators from './components/ViewOperators'
import CreateLineup from './pages/CreateLineup'
import AttackCreator from './pages/AttackCreator'
import DefenseCreator from './pages/DefenseCreator'

const App = () => {
  const [operators, setOperators] = useState([])
  const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const getOperators = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators')
      setOperators(response.data.operators)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOperators()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home operators={operators} />} />
        <Route
          path="/view-ops"
          element={<ViewOperators operators={operators} />}
        />
        <Route path="/create-lineup" element={<CreateLineup />} />
        <Route
          path="/create-lineup/attack"
          element={
            <AttackCreator
              createdTeamMembers={createdTeamMembers}
              setCreatedTeamMembers={setCreatedTeamMembers}
            />
          }
        />
        <Route path="/create-lineup/defense" element={<DefenseCreator />} />
      </Routes>
    </>
  )
}

export default App
