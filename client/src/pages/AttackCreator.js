import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorAttacker from '../components/OperatorSelectorAttacker'
import SaveTeam from '../components/SaveTeam'
import { useNavigate } from 'react-router-dom'

const AttackCreator = (props) => {
  let navigate = useNavigate()
  console.log('rerendered')
  const [attackers, setAttackers] = useState([])
  const [isClosed, setIsClosed] = useState(false)

  // const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const [teamName, setTeamName] = useState('')

  const getAttackOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/attack')
      setAttackers(response.data.attackers)
    } catch (err) {
      console.log(err)
    }
  }

  const getCreatedOperators = async () => {
    try {
      let response = await axios.get('http://localhost:3001/teamMembers')

      props.setCreatedTeamMembers(response.data.teamMember)
    } catch (err) {
      console.log(err)
    }
  }

  const saveTeam = async () => {
    try {
      await axios.post('http://localhost:3001/saveTeam', {
        teamName: teamName,
        operators: props.createdTeamMembers
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCreatedOperators()
    getAttackOps()
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
    saveTeam()
    setTeamName('')
    navigate('/')
  }

  // renders save team form when the team member length is at 5
  let form

  if (props.createdTeamMembers.length === 5) {
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
              op={props.createdTeamMembers[0]}
            />
            <TeamSelectionCard
              attackers={attackers}
              onClick={handleClick}
              op={props.createdTeamMembers[1]}
            />
            <TeamSelectionCard
              attackers={attackers}
              onClick={handleClick}
              op={props.createdTeamMembers[2]}
            />
            <TeamSelectionCard
              attackers={attackers}
              onClick={handleClick}
              op={props.createdTeamMembers[3]}
            />
            <TeamSelectionCard
              attackers={attackers}
              onClick={handleClick}
              op={props.createdTeamMembers[4]}
            />
          </div>
          {form}
        </>
      )}
    </>
  )
}

export default AttackCreator
