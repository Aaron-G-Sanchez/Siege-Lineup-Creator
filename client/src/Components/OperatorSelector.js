const OperatorSelector = (props) => {
  const getId = (id) => {
    console.log(id)
  }

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
