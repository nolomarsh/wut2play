import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { currentUserReducer } from './reducers/currentUserSlice'

const rootReducer = combineReducers({
  currentUser: currentUserReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()