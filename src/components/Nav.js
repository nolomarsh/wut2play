import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Log In</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/games">My games</Link>
      <Link to="/picker">Pick a Game</Link>
      <Link to='/invoices'>Invoices</Link>
    </nav>
  )
}

export default Nav