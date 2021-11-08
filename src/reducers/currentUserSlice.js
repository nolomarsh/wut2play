import axios from 'axios'

const initialState = {
  id: null,
  username: '',
  password: '',
  email: '',
  error: ''
}

export const currentUserReducer = (currentUser = initialState, action) => {
  switch(action.type){
    case 'currentUser/set':
      return {...action.payload, error: ''}
    case 'currentUser/error':
      return {...currentUser, error: action.payload}
    case 'currentUser/unset':
      return initialState
    default:
      return currentUser
  }
}

export const setCurrentUser = user => {
  return {
    type: 'currentUser/set',
    payload: user
  }
}

export const setCurrentUserError = errorMessage => {
  return {
    type: 'currentUser/error',
    payload: errorMessage
  }
}

//A thunk for attempting to login which sends the appropriate action based on result
//Must pass in navigate so that it can conditionally change the url
export const attemptLoginThunk = (loginInfo, navigate) => {
  return (dispatch) => {
    axios
      .post('https://wut2play-api.herokuapp.com/users/login', loginInfo)
      .then((response) => {
        if (response.data.error){
          dispatch(setCurrentUserError(response.data.error))
        }
        if(response.data.username) {
          dispatch(setCurrentUser(response.data))
          navigate('/profile')
          localStorage.setItem('currentUser', JSON.stringify(response.data))
        }
      })
      .catch((error) => {
        dispatch(setCurrentUserError(error))
      })
  }
}

export const unsetCurrentUser = () => {
  return {
    type: 'currentUser/unset'
  }
}

//A thunk for logging out, also removes currentUser from local storage
export const logoutThunk = () => {
  return (dispatch) => {
    localStorage.removeItem('currentUser')
    dispatch(unsetCurrentUser()) 
  }
}

export const selectCurrentUser = state => state.currentUser