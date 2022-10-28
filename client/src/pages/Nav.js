import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/view-ops">View Operators</Link>
          <Link to="/view-lineups">View Teams</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
