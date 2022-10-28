import axios from 'axios'
import { useState } from 'react'

const OperatorSelectorAttacker = (props) => {
  const [selectedAttacker, setSelectedAttacker] = useState(null)

  const [selectedAttackerName, setSelectedAttackerName] = useState(null)
  const [selectedPrimary, setSelectedPrimary] = useState(null)
  const [selectedSecondary, setSelectedSecondary] = useState(null)
  const [selectedUtility, setSelectedUtility] = useState(null)
  const [selectedAbility, setSelectedAbility] = useState(null)
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  let createdOp = {
    name: selectedAttackerName,
    primary: selectedPrimary,
    secondary: selectedSecondary,
    utility: selectedUtility,
    ability: selectedAbility,
    icon: selectedIcon
  }

  const getId = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/operators/attack/${id}`
      )
      console.log(response)
      setSelectedAttacker(response.data.attackerId)
      setSelectedAttackerName(response.data.attackerId.name)
      setSelectedAbility(response.data.attackerId.ability)
      setSelectedIcon(response.data.attackerId.icon)
      setSelectedImage(response.data.attackerId.image)
    } catch (err) {
      console.log(err)
    }
  }

  // Saves created operator to database (TRY INPUTING CREATED OP INTO THE POST FIELS AND AN EXERIMENT)
  const saveOperator = async () => {
    try {
      await axios.post('http://localhost:3001/operators/opSave', {
        name: selectedAttackerName,
        primary: selectedPrimary,
        secondary: selectedSecondary,
        utility: selectedUtility,
        ability: selectedAbility,
        icon: selectedIcon,
        image: selectedImage
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

  //Console.logs for testing

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
            <img className="selected-icon" src={selectedAttacker.icon} />
          </div>
          {/* Saves the operator after they select the utility they want to use */}
          {createdOp.utility ? (
            <button className="save-atk-operator" onClick={buttonClick}>
              Save Operator
            </button>
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
              <img src={op.icon} alt="operator-icon" />
              <p className="op-name">{op.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default OperatorSelectorAttacker
