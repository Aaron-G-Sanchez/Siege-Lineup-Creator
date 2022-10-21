import Attack from '../components/Attack'
import Defense from '../components/Defense'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const CreateLineup = () => {
  return (
    <>
      <Nav />
      <div className="create-lineup-main">
        <div className="side-selection">
          <Link to="/create-lineup/attack">
            <Attack />
          </Link>
          <Link to="/create-lineup/defense">
            <Defense />
          </Link>
        </div>
      </div>
    </>
  )
}

export default CreateLineup
