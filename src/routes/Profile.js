import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, logoutThunk } from '../reducers/currentUserSlice'
import { useNavigate, Outlet, NavLink } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector(selectCurrentUser)

  const handleLogout = () => {
    dispatch(logoutThunk())
    navigate('/login')
  }

  return (
    <section className="Profile">
      <h1>Welcome, {currentUser.username}</h1>
      <div className='profileDisplay'>
        <div className='profileLinks'>
          <NavLink
            className={({ isActive }) => isActive ? 'profileLink active' : 'profileLink'}
            to={'newGame'}
          >Add a Game</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? 'profileLink active' : 'profileLink'}
            to={'myGames'}
          >My Games</NavLink>
        </div>
        <div className='profileOutlet'>
          <Outlet/>
        </div>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </section>
  )
}

export default Profile
