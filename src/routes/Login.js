import axios from 'axios'
import { useState } from 'react'

const Login = props => {
  const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormChange = (e) => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }
  
  const attemptLogin = (e) => {
    e.preventDefault()
    axios
      .post('https://wut2play-api.herokuapp.com/users/login', loginInfo)
      .then((response) => {
        if (response.data.error) {
          setErrorMessage("Error:", response.data.error)
        } else {
          console.log(response.data)
        }
      }, (error) => {
        setErrorMessage('We have no user with that username/password combination!')
      })
  }

  return (
    <div className='login'>
      <form className='loginForm' onSubmit={attemptLogin}>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' onChange={handleFormChange} required/>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' onChange={handleFormChange} required/>
        <input type='submit' value='Log In'/>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
      </form> 
    </div>
  )
}

export default Login