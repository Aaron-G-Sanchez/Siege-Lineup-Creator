import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorDefender from '../components/OperatorSelectorDefender'

const DefenseCreator = () => {
  const [defenders, setDefenders] = useState([])
  const [isClosed, setIsClosed] = useState(false)

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
      <Nav />

      {isClosed ? (
        <div className="selector-grid">
          <OperatorSelectorDefender defenders={defenders} />
        </div>
      ) : null}
      {isClosed ? null : (
        <div className="team-selection-grid">
          <TeamSelectionCard
            defenders={defenders}
            onClick={() => setIsClosed(!isClosed)}
          />
          <TeamSelectionCard
            defenders={defenders}
            onClick={() => setIsClosed(!isClosed)}
          />
          <TeamSelectionCard
            defenders={defenders}
            onClick={() => setIsClosed(!isClosed)}
          />
        </div>
      )}
    </>
  )
}

export default DefenseCreator
