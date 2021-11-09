import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser } from "../reducers/currentUserSlice"
import { selectCurrentGame } from "../reducers/currentGameSlice"
import { addNewGame } from "../reducers/myGamesSlice"

const initialGame = {
  name: '',
  imageUrl: '',
  minPlayers: 0,
  maxPlayers: 0,
  minTime: 0,
  maxTime: 0,
  notes: ''
}

const NewGame = (props) => {
  const dispatch = useDispatch()

  const currentUser = useSelector(selectCurrentUser)
  const currentGame = useSelector(selectCurrentGame)

  const [gameEntry, setGameEntry] = useState({...initialGame, userId:currentUser.id})

  const handleFormChange = e => {
    setGameEntry({...gameEntry, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    dispatch(addNewGame({...gameEntry}))
  }

  useEffect(() => {
    if (currentGame.name) {
      setGameEntry({...currentGame, userId: currentUser.id})
    }
  },[])
  
  return (
    <section className='NewGame'>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend><h1>Add a Game</h1></legend>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' onChange={handleFormChange} value={gameEntry.name} required/>
          
          <fieldset>
            <legend>Image</legend>
            <label htmlFor='imageUrl'>Url:</label>
            <input type='text' id='imageUrl' name='imageUrl' onChange={handleFormChange} value={gameEntry.imageUrl}/>
            <img className='previewThumbnail' src={gameEntry.imageUrl} alt='image url preview'/>
          </fieldset>
          
          <fieldset>
            <legend>Number of Players</legend>
            <label htmlFor='minPlayers'>Minimum:</label>
            <input type='number' id='minPlayers' name='minPlayers' onChange={handleFormChange} value={gameEntry.minPlayers} required/>
            <label htmlFor='maxPlayers'>Maximum:</label>
            <input type='number' id='maxPlayers' name='maxPlayers' onChange={handleFormChange} value={gameEntry.maxPlayers} required/>
          </fieldset>
          <fieldset>
            <legend>Playtime (in minutes)</legend>
            <label htmlFor='minTime'>Minimum:</label>
            <input type='number' id='minTime' name='minTime' onChange={handleFormChange} value={gameEntry.minTime} required/>
            <label htmlFor='maxTime'>Maximum:</label>
            <input type='number' id='maxTime' name='maxTime' onChange={handleFormChange} value={gameEntry.maxTime} required/>
          </fieldset>
          <label htmlFor='notes'>Notes:</label>
          <textarea id='notes' name='notes' onChange={handleFormChange} value={gameEntry.notes}></textarea>
        </fieldset>
        <input type='submit' value='Add Game'/>
      </form>
    </section>
  )
}

export default NewGame