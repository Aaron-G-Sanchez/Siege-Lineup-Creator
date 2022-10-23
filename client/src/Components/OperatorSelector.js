import axios from 'axios'
import { useState } from 'react'

const OperatorSelector = (props) => {
  const [selectedAttacker, setSelectedAttacker] = useState(null)

  //STOPPED HERE. AXIOS CALL WORKS AND GRABS PROPER OP ID
  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/attack/${id}`
      )
      // console.log(response)
      setSelectedAttacker(response.data.attackerId)
    } catch (err) {
      console.log(err)
    }
  }

  if (selectedAttacker) {
    console.log(selectedAttacker.ability)
  } else {
    console.log('empty')
  }

  return (
    <>
      {selectedAttacker ? (
        // Shows the operators equipment
        <div className="equipment-grid">
          <div className="primary">
            {selectedAttacker.primary.map((primary, index) => (
              <div key={index} className="equipment primary-options">
                {primary}
              </div>
            ))}
          </div>
          <div className="secondary">
            {selectedAttacker.secondary.map((secondary, index) => (
              <div key={index} className="equipment secondary-options">
                {secondary}
              </div>
            ))}
          </div>
          <div className="utility">
            {selectedAttacker.utility.map((utility, index) => (
              <div key={index} className="equipment utility-options">
                {utility}
              </div>
            ))}
          </div>
          <div className="ability">{selectedAttacker.ability}</div>
        </div>
      ) : (
        // Shows the operators to choose from
        <div className="operator-grid">
          {props.attackers.map((op) => (
            <div
              key={op._id}
              className="operator"
              onClick={() => getId(op._id)}
            >
              {op.name}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default OperatorSelector
