import AttackCreator from './AttackCreator'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Attack = () => {
  const [attackers, setAttackers] = useState([])

  const getAttackOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/attack')
      console.log(response.data.attackers)
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
      <div className="attack">
        <h2>Attack</h2>
      </div>
    </>
  )
}

export default Attack
