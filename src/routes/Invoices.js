import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom'
import { getInvoices } from '../invoiceData'
import { useState, useEffect } from 'react'

const Invoices = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    setInvoices(getInvoices())
  }, [])

  const QueryNavLink = ({to, ...props}) => {
    let location = useLocation()
    return <NavLink to={to + location.search} {...props} />
  }

  return (
    <div style={{display:'flex'}}>
      <div className='invoiceLinks'>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => {
          return (
            <QueryNavLink
              className={({ isActive }) => isActive && 'active'}
              to={`/invoices/${invoice.number}`}
              setInvoices={setInvoices} 
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default Invoices