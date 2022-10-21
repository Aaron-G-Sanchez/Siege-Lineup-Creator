import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link>View Operators</Link>
      </nav>
    </>
  )
}

export default Nav
