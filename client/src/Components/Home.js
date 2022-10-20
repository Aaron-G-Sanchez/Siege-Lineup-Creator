const Home = (params) => {
  return (
    <>
      <main>
        {params.operators.map((operator) => (
          <div key={operator._id}>
            <h2>{operator.name}</h2>
          </div>
        ))}
      </main>
    </>
  )
}

export default Home
