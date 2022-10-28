import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorDefender from '../components/OperatorSelectorDefender'
import SaveTeam from '../components/SaveTeam'
import { useNavigate } from 'react-router-dom'
const DefenseCreator = () => {
  let navigate = useNavigate()
  const [defenders, setDefenders] = useState([])
  const [isClosed, setIsClosed] = useState(false)

  const [createdTeamMembers, setCreatedTeamMembers] = useState([])

  const [teamName, setTeamName] = useState('')

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

      setCreatedTeamMembers(response.data.teamMember)
    } catch (err) {
      console.log(err)
    }
  }

  const saveTeam = async () => {
    try {
      await axios.post('http://localhost:3001/saveTeam', {
        teamName: teamName,
        operators: createdTeamMembers
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCreatedOperators()
    getDefenseOps()
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

  let form
  if (createdTeamMembers.length === 5) {
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
          <OperatorSelectorDefender
            defenders={defenders}
            handleClick={handleClick}
          />
        </div>
      ) : (
        <>
          {form}
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
            <TeamSelectionCard
              defenders={defenders}
              onClick={handleClick}
              op={createdTeamMembers[3]}
            />
            <TeamSelectionCard
              defenders={defenders}
              onClick={handleClick}
              op={createdTeamMembers[4]}
            />
          </div>
        </>
      )}
    </>
  )
}

export default DefenseCreator
