import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorAttacker from '../components/OperatorSelectorAttacker'
import SaveTeam from '../components/SaveTeam'

const AttackCreator = () => {
  const [attackers, setAttackers] = useState([])
  const [isClosed, setIsClosed] = useState(false)

  const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const [teamName, setTeamName] = useState('')

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

  useEffect(() => {
    getAttackOps()
    getCreatedOperators()
  }, [isClosed, !isClosed])

  const handleClick = () => {
    setIsClosed(!isClosed)
    getCreatedOperators()
  }

  const handleChange = (e) => {
    setTeamName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTeamName('')
  }

  let form
  if (createdTeamMembers.length === 3) {
    form = (
      <SaveTeam
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        teamName={teamName}
      />
    )
  } else {
    form = null
  }
  console.log(createdTeamMembers)
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
      ) : (
        <>
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
          {form}
        </>
      )}
    </>
  )
}

export default AttackCreator
