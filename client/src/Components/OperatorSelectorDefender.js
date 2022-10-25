import axios from 'axios'
import { useState } from 'react'

const OperatorSelectorDefender = (props) => {
  const [selectedDefender, setSelectedDefender] = useState(null)

  const [selectedDefenderName, setSelectedDefenderName] = useState(null)
  const [selectedPrimary, setSelectedPrimary] = useState(null)
  const [selectedSecondary, setSelectedSecondary] = useState(null)
  const [selectedUtility, setSelectedUtility] = useState(null)
  const [selectedAbility, setSelectedAbility] = useState(null)

  let createdOp = {
    name: selectedDefenderName,
    primary: selectedPrimary,
    secondary: selectedSecondary,
    utility: selectedUtility,
    ability: selectedAbility
  }

  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/defense/${id}`
      )
      console.log(response.data.defenseId.name)
      setSelectedDefender(response.data.defenseId)
      setSelectedDefenderName(response.data.defenseId.name)
      setSelectedAbility(response.data.defenseId.ability)
    } catch (err) {
      console.log(err)
    }
  }

  const saveOperator = async () => {
    try {
      await axios.post('http://localhost:3001/operators/opSave', {
        name: selectedDefenderName,
        primary: selectedPrimary,
        secondary: selectedSecondary,
        utility: selectedUtility,
        ability: selectedAbility
      })
    } catch (err) {
      console.log(err)
    }
  }

  const buttonClick = () => {
    saveOperator()
    props.handleClick()
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
      {selectedDefender ? (
        // Shows the operators equipment
        <div className="equipment-grid">
          <div className="equipment-options primary">
            {selectedDefender.primary.map((primary, index) => (
              <div
                key={index}
                className="equipment def-options"
                onClick={getPrimary}
              >
                {primary}
              </div>
            ))}
          </div>
          <div className="equipment-options secondary">
            {selectedDefender.secondary.map((secondary, index) => (
              <div
                key={index}
                className="equipment def-options"
                onClick={getSecondary}
              >
                {secondary}
              </div>
            ))}
          </div>
          <div className="equipment-options utility">
            {selectedDefender.utility.map((utility, index) => (
              <div
                key={index}
                className="equipment def-options"
                onClick={getUtility}
              >
                {utility}
              </div>
            ))}
          </div>
          <div className="equipment-options ability def-options">
            {selectedDefender.ability}
          </div>
          {createdOp.utility ? (
            <button onClick={buttonClick}>Save Operator</button>
          ) : null}
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
