import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, unsetCurrentUser } from '../reducers/currentUserSlice'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector(selectCurrentUser)

  const handleLogout = () => {
    dispatch(unsetCurrentUser())
    navigate('/login')
  }

  return (
    <div className="Profile">
      <h1>Welcome, {currentUser.username}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Profile
