import { Link } from 'react-router-dom'
import ViewTeamsNav from '../components/ViewTeamsNav'
import ViewOpsNav from '../components/ViewOpsNav'
import CreateLineupNav from '../components/CreateLineupNav'

const Home = (props) => {
  return (
    <>
      <main>
        <Link to="/view-ops">
          <ViewOpsNav />
        </Link>
        <Link to="/create-lineup">
          <CreateLineupNav />
        </Link>
        <Link to="/view-lineups">
          <ViewTeamsNav />
        </Link>
      </main>
    </>
  )
}

export default Home
