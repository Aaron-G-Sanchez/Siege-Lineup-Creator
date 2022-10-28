import Nav from '../pages/Nav'

const ViewOperators = (props) => {
  return (
    <>
      <Nav />
      <section className="main-operator-grid">
        {props.operators.map((operator) => (
          <div className="operator-card" key={operator._id}>
            <img
              className="op-portrait"
              src={operator.image}
              alt="operator-portrait"
            />
            <h2 className="op-card-name">{operator.name}</h2>
          </div>
        ))}
      </section>
    </>
  )
}

export default ViewOperators
