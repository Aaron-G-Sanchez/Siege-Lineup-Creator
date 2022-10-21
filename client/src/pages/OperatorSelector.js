import { useLocation } from 'react-router-dom'

const OperatorSelector = () => {
  const location = useLocation()
  const { from } = location.state

  console.log(from)
  return (
    <>
      <div>
        {from.map((op) => (
          <div key={op._id}>
            <h2>{op.name}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default OperatorSelector
