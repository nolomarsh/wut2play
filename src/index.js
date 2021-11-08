import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'

import App from './App'
import Login from './routes/Login'
import Profile from './routes/Profile'
import NewGame from './routes/NewGame'
import GameLookup from './routes/GameLookup'
import GameDetails from './routes/GameDetails.js'

import Invoices from './routes/Invoices'
import Invoice from './routes/Invoice'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <App 
                state={store.getState()}
                dispatch={store.dispatch}
              />
            }
          >
            <Route path='login' element={<Login />}/>
            <Route path='gameLookup' element={<GameLookup />}>
              <Route path='gameDetails' element={<GameDetails/>}/>
            </Route>
            <Route path='profile' element={<Profile />}>
              <Route path='newGame' element={<NewGame />}></Route>
            </Route>
            <Route path='invoices' element={<Invoices />}>
              <Route
                index
                element={
                  <div className='invoicesIndex' style={{padding: '1rem'}}>
                    <p>Select an Invoice</p>
                  </div>
                } 
              />
              <Route path=':invoiceId' element={<Invoice />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
