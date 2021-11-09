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
      name: game.name,
      minPlayers: game.min_players,
      maxPlayers: game.max_players,
      minTime: game.min_playtime,
      maxTime: game.max_playtime,
      imageUrl: game.image_url,
      notes: game.notes || null,
      userId: currentUser.id || null
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