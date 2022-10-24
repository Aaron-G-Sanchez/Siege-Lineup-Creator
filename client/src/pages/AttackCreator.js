import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TeamSelectionCard from './TeamSelectionCard'
import OperatorSelectorAttacker from '../components/OperatorSelectorAttacker'

const AttackCreator = () => {
  const [attackers, setAttackers] = useState([])
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

  const handleClick = () => {
    setIsClosed(!isClosed)
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
      ) : null}
      {isClosed ? null : (
        <div className="team-selection-grid">
          <TeamSelectionCard attackers={attackers} onClick={handleClick} />
          <TeamSelectionCard attackers={attackers} onClick={handleClick} />
          <TeamSelectionCard attackers={attackers} onClick={handleClick} />
        </div>
      )}
    </>
  )
}

export default AttackCreator
