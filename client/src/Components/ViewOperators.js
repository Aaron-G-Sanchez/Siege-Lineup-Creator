const ViewOperators = (props) => {
  return (
    <>
      <div>
        {props.operators.map((operator) => (
          <div key={operator._id}>
            <h2>{operator.name}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default ViewOperators
