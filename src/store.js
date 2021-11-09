import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { currentUserReducer } from './reducers/currentUserSlice'
import { currentGameReducer } from './reducers/currentGameSlice'
import { myGamesReducer } from './reducers/myGamesSlice'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentGame: currentGameReducer,
  myGames: myGamesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()