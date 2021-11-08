import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { attemptLoginThunk, selectCurrentUser } from '../reducers/currentUserSlice'

const Login = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
  const currentUser = useSelector(selectCurrentUser)

  const handleFormChange = (e) => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }
  
  const attemptLogin = (e) => {
    e.preventDefault()
    dispatch(attemptLoginThunk(loginInfo, navigate))
  }

  return (
    <div className='login'>
      <form 
        className='loginForm' 
        onSubmit={attemptLogin}>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' onChange={handleFormChange} required/>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' onChange={handleFormChange} required/>
        <input type='submit' value='Log In'/>
        {currentUser.error && <p className='errorMessage'>{currentUser.error}</p>}
      </form> 
    </div>
  )
}

export default Login