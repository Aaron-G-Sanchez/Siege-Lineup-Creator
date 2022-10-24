import axios from 'axios'
import { useState } from 'react'

const OperatorSelectorAttacker = (props) => {
  const [selectedAttacker, setSelectedAttacker] = useState(null)

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
          <div className="equipment-options primary">
            {selectedAttacker.primary.map((primary, index) => (
              <div key={index} className="equipment atk-options">
                {primary}
              </div>
            ))}
          </div>
          <div className="equipment-options secondary">
            {selectedAttacker.secondary.map((secondary, index) => (
              <div key={index} className="equipment atk-options">
                {secondary}
              </div>
            ))}
          </div>
          <div className="equipment-options utility">
            {selectedAttacker.utility.map((utility, index) => (
              <div key={index} className="equipment atk-options">
                {utility}
              </div>
            ))}
          </div>
          <div className="attack-options ability atk-options">
            {selectedAttacker.ability}
          </div>
        </div>
      ) : (
        // Shows the operators to choose from
        <div className="operator-grid">
          {props.attackers.map((op) => (
            <div
              key={op._id}
              className="operator atk-op"
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

export default OperatorSelectorAttacker
