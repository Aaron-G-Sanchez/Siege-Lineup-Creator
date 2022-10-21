import { useState, useEffect } from 'react'
import axios from 'axios'

const Defense = () => {
  const [defenders, setDefenders] = useState([])

  const getDefenseOps = async () => {
    try {
      let response = await axios.get('http://localhost:3001/operators/defense')
      console.log(response.data.defenders)
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
      <div className="defense">
        <h2>Defense</h2>
      </div>
    </>
  )
}

export default Defense
