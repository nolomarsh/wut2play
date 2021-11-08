const initialState = {
  id: null,
  name: '',
  minplayers: null,
  maxplayers: null,
  mintime: null,
  maxtime: null,
  notes: '',
  playerid: null
}

export const currentGameReducer = (currentGame = initialState, action) => {
  switch(action.type) {
    case 'currentGame/set':
      return {...action.payload}
    case 'currentGame/unset':
      return initialState
    default:
      return currentGame
  }
}

export const setCurrentGame = game => {
  return {
    type: 'currentGame/set',
    payload: game
  }
}

export const setGameFromRaw = (game, currentUser) => {
  return (dispatch) => {
    const processedGame = { 
      id: null,
      name: game.name,
      minplayers: game.min_players,
      maxplayers: game.max_players,
      mintime: game.min_playtime,
      maxtime: game.max_playtime,
      imageurl: game.image_url,
      userid: currentUser.id || null
    }
    dispatch(setCurrentGame(processedGame))
  }
}

export const unsetCurrentGame = () => {
  return {
    type: 'currentGame/unset'
  }
}

export const selectCurrentGame = state => state.currentGame