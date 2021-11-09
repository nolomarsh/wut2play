import axios from 'axios'

const initialState = []

export const myGamesReducer = (myGames = initialState, action) => {
  switch(action.type){
    case 'myGames/set':
      return [...action.payload]
    case 'myGames/delete':
      const temp = [...myGames]
      return [...temp.filter((game) => game.id !== action.payload)]
    case 'myGames/unset':
      return initialState
    default:
      return myGames
  }
}

export const setMyGames = games => {
  return {
    type: 'myGames/set',
    payload: games
  }
}

export const getMyGames = currentUser => {
  return (dispatch) => {
    axios
      .get('https://wut2play-api.herokuapp.com/games/' + currentUser.id)
      .then((response) => {
        dispatch(setMyGames(response.data))
      })
  }
}

//Adds a game to db and updates myGames
//requires userid already added to object
export const addNewGame = (game) => {
  return (dispatch) => {
    // console.log(game)
    axios
      .post('https://wut2play-api.herokuapp.com/games/newgame', game)
      .then((response) => {
        if (response.error) {
          console.log(response.error)
        }
        if (response.data) {
          dispatch(setMyGames(response.data))
        }
      })
  }
}

export const deleteOneGame = id => {
  return {
    type: 'myGames/delete',
    payload: id
  }
}

export const unsetMyGames = () => {
  return {
    type: 'myGames/unset'
  }
}

export const selectMyGames = state => state.myGames