import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../reducers/currentUserSlice'

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <nav>
      <Link to='/'>Home</Link>
      {currentUser.username
        ? <Link to="/profile">Profile</Link>
        : <Link to='/login'>Log In</Link>
      }
      <Link to="/games">My games</Link>
      <Link to="/picker">Pick a Game</Link>
      <Link to='/invoices'>Invoices</Link>
    </nav>
  )
}

export default Nav