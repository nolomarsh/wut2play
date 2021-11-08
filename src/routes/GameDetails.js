import { useDispatch, useSelector } from "react-redux"
import { selectCurrentGame } from "../reducers/currentGameSlice"
import { selectCurrentUser } from "../reducers/currentUserSlice"
import { Link } from 'react-router-dom'

const GameDetails = props => {
  const dispatch = useDispatch()
  const currentGame = useSelector(selectCurrentGame)
  const currentUser = useSelector(selectCurrentUser)
  
  return (
    <section className='GameDetails'>
      <h3>{currentGame.name}</h3>
      {currentUser.id &&
        <Link to='/profile/newGame' >Add to Collection</Link>
      }
    </section>
  )
}

export default GameDetails