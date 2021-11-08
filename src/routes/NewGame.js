import { useState } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../reducers/currentUserSlice"

const initialGame = {
  name: '',
  imageurl: '',
  minplayers: 0,
  maxplayers: 0,
  mintime: 0,
  maxtime: 0,
  notes: ''
}

const NewGame = (props) => {
  const currentUser = useSelector(selectCurrentUser)

  const [gameEntry, setGameEntry] = useState({...initialGame, userid:currentUser.id})

  const handleFormChange = e => {
    setGameEntry({...gameEntry, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(gameEntry)
  }
  
  return (
    <section className='NewGame'>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend><h1>Add a Game</h1></legend>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' onChange={handleFormChange} required/>
          <label htmlFor='imageurl'>Image Url:</label>
          <input type='text' id='imageurl' name='imageurl' onChange={handleFormChange}/>
          <fieldset>
            <legend>Number of Players</legend>
            <label htmlFor='minplayers'>Minimum:</label>
            <input type='number' id='minplayers' name='minplayers' onChange={handleFormChange} required/>
            <label htmlFor='maxplayers'>Maximum:</label>
            <input type='number' id='maxplayers' name='maxplayers' onChange={handleFormChange} required/>
          </fieldset>
          <fieldset>
            <legend>Playtime (in minutes)</legend>
            <label htmlFor='mintime'>Minimum:</label>
            <input type='number' id='mintime' name='mintime' onChange={handleFormChange} required/>
            <label htmlFor='maxtime'>Maximum:</label>
            <input type='number' id='maxtime' name='maxtime' onChange={handleFormChange} required/>
          </fieldset>
          <label htmlFor='notes'>Notes:</label>
          <textarea id='notes' name='notes' onChange={handleFormChange}></textarea>
        </fieldset>
        <input type='submit' value='Add Game'/>
      </form>
    </section>
  )
}

export default NewGame