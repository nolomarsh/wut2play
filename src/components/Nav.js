import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, logoutThunk, setCurrentUser } from '../reducers/currentUserSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('currentUser'))))
    }
  },[])

  return (
    <nav className='navHeader'>
      <Link className='navBtn logo' to='/'>Wut2Play</Link>
      {currentUser.username
        ? 
        <>
          <Link className='navBtn' to='/profile'>Profile</Link>
          <button className='navBtn' onClick={() => dispatch(logoutThunk())}>Log Out</button>
        </>
        : <Link className="navBtn" to='/login'>Log In</Link>
      }
      <Link className='navBtn' to='/gameLookup'>Look Up Game</Link>
      <Link className='navBtn' to="/picker">Pick a Game</Link>

      <Link className='navBtn' to='/invoices'>Invoices</Link>
    </nav>
  )
}

export default Nav