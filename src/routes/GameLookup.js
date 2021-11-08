import axios from 'axios'
import { useState } from 'react'
import GameDetails from '../components/GameDetails'

const GameLookup = props => {
  const [foundGames, setFoundGames] = useState([])
  const [currentGame, setCurrentGame] = useState({})
  const [searchInfo, setSearchInfo] = useState({limit: 25, fuzzy_match: true})
  const [showForm, setShowForm] = useState(true)

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
  
  return (
    <section className='GameLookup'>
      {showForm && 
        <form onSubmit={handleSearchSubmit}>
          <fieldset>
            <legend><h1>Search Games</h1></legend>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' onChange={formChangeHandler}/>
          </fieldset>
          <input type='submit'/>
        </form>
      }
      <div className='lookupDisplay'>
        <ul className='lookupResults'>
          {foundGames && 
            foundGames.map((game) => {
              return (
                <li key='game.name'>{game.name}</li>
              )
            })
          }
        </ul>
      
      {currentGame && 
        <GameDetails game={currentGame}/>
      }
      </div>
    </section>
  )
}

export default GameLookup