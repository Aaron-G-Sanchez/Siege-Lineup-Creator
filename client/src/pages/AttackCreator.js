import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorAttacker from '../components/OperatorSelectorAttacker'

const AttackCreator = () => {
  const [attackers, setAttackers] = useState([])
  const [isClosed, setIsClosed] = useState(false)

  const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const getAttackOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/attack')
      setAttackers(response.data.attackers)
      // console.log(response)
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
    getAttackOps()
  }, [isClosed, !isClosed])

  console.log(isClosed)
  return (
    <>
      <Nav />

      {isClosed ? (
        <div className="selector-grid">
          <OperatorSelectorAttacker
            attackers={attackers}
            handleClick={handleClick}
          />
        </div>
      ) : null}
      {isClosed ? null : (
        <div className="team-selection-grid">
          <TeamSelectionCard
            attackers={attackers}
            onClick={handleClick}
            op={createdTeamMembers[0]}
          />
          <TeamSelectionCard
            attackers={attackers}
            onClick={handleClick}
            op={createdTeamMembers[1]}
          />
          <TeamSelectionCard
            attackers={attackers}
            onClick={handleClick}
            op={createdTeamMembers[2]}
          />
        </div>
      )}
    </>
  )
}

export default AttackCreator
