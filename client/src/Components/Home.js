import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <main>
        <div className="grid-item view-ops">
          <Link to="/view-ops">
            <h3>View Ops</h3>
          </Link>
        </div>
        <div className="grid-item create-teams">
          <Link to="/create-lineup">
            <h1>Create Lineup</h1>
          </Link>
        </div>
        <div className="grid-item view-teams">
          <Link to="/view-teams">
            <h3>View Teams</h3>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
