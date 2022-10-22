import axios from 'axios'
import { useState } from 'react'

const OperatorSelector = (props) => {
  const [selectedAttacker, setSelectedAttacker] = useState('')

  //STOPPED HERE. AXIOS CALL WORKS AND GRABS PROPER OP ID
  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/attack/${id}`
      )
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(selectedAttacker)

  return (
    <>
      <div className="operator-grid">
        {props.attackers.map((op) => (
          <div key={op._id} className="operator" onClick={() => getId(op._id)}>
            {op.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default OperatorSelector
