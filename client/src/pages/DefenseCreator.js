import { useState, useEffect } from 'react'
import axios from 'axios'
import TeamSelectionCard from './TeamSelectionCard'
import Nav from './Nav'

const DefenseCreator = () => {
  const [defenders, setDefenders] = useState([])

  const getDefenseOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/defense')
      setDefenders(response.data.defenders)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDefenseOps()
  }, [])
  return (
    <>
      <div>
        <Nav />
        <div className="team-selection-grid">
          <TeamSelectionCard defenders={defenders} />
          <TeamSelectionCard defenders={defenders} />
          <TeamSelectionCard defenders={defenders} />
        </div>
      </div>
    </>
  )
}

export default DefenseCreator
