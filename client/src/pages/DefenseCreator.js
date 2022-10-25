import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorDefender from '../components/OperatorSelectorDefender'

const DefenseCreator = () => {
  const [defenders, setDefenders] = useState([])
  const [isClosed, setIsClosed] = useState(false)

  const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const getDefenseOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/defense')
      setDefenders(response.data.defenders)
    } catch (err) {
      console.log(err)
    }
  }

  const getCreatedOperators = async () => {
    try {
      let response = await axios.get('http://localhost:3001/teamMembers')
      // console.log(response.data.teamMember)
      setCreatedTeamMembers(response.data.teamMember)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = () => {
    setIsClosed(!isClosed)
    getCreatedOperators()
  }

  useEffect(() => {
    getCreatedOperators()
    getDefenseOps()
  }, [isClosed, !isClosed])

  return (
    <>
      <Nav />

      {isClosed ? (
        <div className="selector-grid">
          <OperatorSelectorDefender
            defenders={defenders}
            handleClick={handleClick}
          />
        </div>
      ) : null}
      {isClosed ? null : (
        <div className="team-selection-grid">
          <TeamSelectionCard
            defenders={defenders}
            onClick={handleClick}
            op={createdTeamMembers[0]}
          />
          <TeamSelectionCard
            defenders={defenders}
            onClick={handleClick}
            op={createdTeamMembers[1]}
          />
          <TeamSelectionCard
            defenders={defenders}
            onClick={handleClick}
            op={createdTeamMembers[2]}
          />
        </div>
      )}
    </>
  )
}

export default DefenseCreator
