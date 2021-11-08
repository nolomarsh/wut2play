import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameFromRaw } from '../reducers/currentGameSlice'
import { selectCurrentUser } from '../reducers/currentUserSlice'
import { useNavigate, Outlet } from 'react-router'
import { GameDetails } from './GameDetails'

const GameLookup = props => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const [foundGames, setFoundGames] = useState([])
  const [searchInfo, setSearchInfo] = useState({limit: 25, fuzzy_match: true})

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    let clientIdString = 'client_id=PTozna3dDh'
    let searchUrl = 'https://api.boardgameatlas.com/api/search?'
    for (let [key, value] of Object.entries(searchInfo)){
      if (value) {
        searchUrl += `${key}=${value}&`
      }
    }
    searchUrl += clientIdString
    axios.get(searchUrl).then((response) => {
      setFoundGames(response.data.games)
    })
  }

  const formChangeHandler = e => {
    setSearchInfo({...searchInfo, [e.target.name]: e.target.value})
  }

  const handleGameSelect = game => {
    dispatch(setGameFromRaw(game, currentUser))
    navigate('gameDetails')
  }
  
  return (
    <section className='GameLookup'>
  
      <form onSubmit={handleSearchSubmit}>
        <fieldset>
          <legend><h1>Search Games</h1></legend>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' onChange={formChangeHandler}/>
        </fieldset>
        <input type='submit'/>
      </form>
      
      <div className='innerNavDisplay'>
        <ul className='innerNav'>
          {foundGames && 
            foundGames.map((game) => {
              return (
                <li key='game.name' onClick={() => handleGameSelect(game)}>{game.name}</li>
              )
            })
          }
        </ul>
        <div className='innerDisplay'>
          <Outlet/>
        </div>
        
      </div>
    </section>
  )
}

export default GameLookup