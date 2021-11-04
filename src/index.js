import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Profile from './routes/Profile'
import Invoices from './routes/Invoices'
import Invoice from './routes/Invoice'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='profile' element={<Profile />}/>
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
  </React.StrictMode>,
  document.getElementById('root')
)
