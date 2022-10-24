import axios from 'axios'
import { useState } from 'react'
import SaveOperator from './SaveOperator'

const OperatorSelectorAttacker = (props) => {
  const [selectedAttacker, setSelectedAttacker] = useState(null)

  const [selectedAttackerName, setSelectedAttackerName] = useState(null)
  const [selectedPrimary, setSelectedPrimary] = useState(null)
  const [selectedSecondary, setSelectedSecondary] = useState(null)
  const [selectedUtility, setSelectedUtility] = useState(null)
  const [selectedAbility, setSelectedAbility] = useState(null)

  // const [createdOperator, setCreatedOperator] = useState({})

  let createdOp = {
    name: selectedAttackerName,
    primary: selectedPrimary,
    secondary: selectedSecondary,
    utility: selectedUtility,
    ability: selectedAbility
  }

  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/attack/${id}`
      )
      // console.log(response)
      setSelectedAttacker(response.data.attackerId)
      setSelectedAttackerName(response.data.attackerId.name)
      setSelectedAbility(response.data.attackerId.ability)
    } catch (err) {
      console.log(err)
    }
  }

  const saveOperator = async () => {
    try {
      axios.post('http://localhost:3001/operators/attack', {
        name: selectedAttackerName,
        primary: selectedPrimary,
        secondary: selectedSecondary,
        utility: selectedUtility,
        ability: selectedAbility
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPrimary = (e) => {
    setSelectedPrimary(e.target.textContent)
  }
  const getSecondary = (e) => {
    setSelectedSecondary(e.target.textContent)
  }
  const getUtility = (e) => {
    setSelectedUtility(e.target.textContent)
  }
  console.log(createdOp)

  return (
    <>
      {selectedAttacker ? (
        // Shows the operators equipment
        <div className="equipment-grid">
          <div className="equipment-options primary">
            {selectedAttacker.primary.map((primary, index) => (
              <div
                key={index}
                className="equipment atk-options"
                onClick={getPrimary}
              >
                {primary}
              </div>
            ))}
          </div>
          <div className="equipment-options secondary">
            {selectedAttacker.secondary.map((secondary, index) => (
              <div
                key={index}
                className="equipment atk-options"
                onClick={getSecondary}
              >
                {secondary}
              </div>
            ))}
          </div>
          <div className="equipment-options utility">
            {selectedAttacker.utility.map((utility, index) => (
              <div
                key={index}
                className="equipment atk-options"
                onClick={getUtility}
              >
                {utility}
              </div>
            ))}
          </div>
          <div className="attack-options ability atk-options">
            {selectedAttacker.ability}
          </div>
          {/* Saves the operator after they select the utility they want to use */}
          {createdOp.utility ? (
            <button onClick={() => saveOperator()}>Save Operator</button>
          ) : null}
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
