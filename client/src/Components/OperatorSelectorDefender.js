import axios from 'axios'
import { useState } from 'react'

const OperatorSelectorDefender = (props) => {
  const [selectedDefender, setSelectedDefender] = useState(null)

  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/defense/${id}`
      )
      // console.log(response)
      setSelectedDefender(response.data.defenseId)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {selectedDefender ? (
        // Shows the operators equipment
        <div className="equipment-grid">
          <div className="equipment-options primary">
            {selectedDefender.primary.map((primary, index) => (
              <div key={index} className="equipment def-options">
                {primary}
              </div>
            ))}
          </div>
          <div className="equipment-options secondary">
            {selectedDefender.secondary.map((secondary, index) => (
              <div key={index} className="equipment def-options">
                {secondary}
              </div>
            ))}
          </div>
          <div className="equipment-options utility">
            {selectedDefender.utility.map((utility, index) => (
              <div key={index} className="equipment def-options">
                {utility}
              </div>
            ))}
          </div>
          <div className="equipment-options ability def-options">
            {selectedDefender.ability}
          </div>
        </div>
      ) : (
        // Shows the operators to choose from
        <div className="operator-grid">
          {props.defenders.map((op) => (
            <div
              key={op._id}
              className="operator def-op"
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

export default OperatorSelectorDefender
