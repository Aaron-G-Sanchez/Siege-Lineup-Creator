// import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import EquipmentSelector from './EquipmentSelector'

const OperatorSelector = (props) => {
  return (
    <>
      <div className="operator-grid">
        {props.attackers.map((op) => (
          <div key={op._id} className="operator">
            {op.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default OperatorSelector
