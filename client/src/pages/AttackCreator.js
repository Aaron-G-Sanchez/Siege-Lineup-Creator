import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TeamSelectionCard from './TeamSelectionCard'
import Nav from './Nav'

const AttackCreator = () => {
  const [attackers, setAttackers] = useState([])

  const getAttackOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/attack')
      setAttackers(response.data.attackers)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAttackOps()
  }, [])

  return (
    <>
      <Nav />
      <div className="team-selection-grid">
        <Link to="/create-lineup/attack/1" state={{ from: attackers }}>
          <TeamSelectionCard attackers={attackers} />
        </Link>
        <TeamSelectionCard attackers={attackers} />
        <TeamSelectionCard attackers={attackers} />
      </div>
    </>
  )
}

export default AttackCreator
