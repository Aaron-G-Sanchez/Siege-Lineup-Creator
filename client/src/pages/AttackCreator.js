import { useState, useEffect } from 'react'
import axios from 'axios'
import TeamSelectionCard from './TeamSelectionCard'
import Nav from './Nav'
import OperatorSelector from '../components/OperatorSelector'

const AttackCreator = () => {
  const [attackers, setAttackers] = useState([])
  const [selectedAttackers, setSelectedAttackers] = useState([])
  const [isClosed, setIsClosed] = useState(false)

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

  console.log(isClosed)

  return (
    <>
      <Nav />

      {isClosed ? (
        <div className="selector-grid">
          <OperatorSelector attackers={attackers} />
        </div>
      ) : null}
      {isClosed ? null : (
        <div className="team-selection-grid">
          <TeamSelectionCard
            attackers={attackers}
            onClick={() => setIsClosed(!isClosed)}
          />
          <TeamSelectionCard
            attackers={attackers}
            onClick={() => setIsClosed(!isClosed)}
          />
          <TeamSelectionCard
            attackers={attackers}
            onClick={() => setIsClosed(!isClosed)}
          />
        </div>
      )}
    </>
  )
}

export default AttackCreator
