const GameDetails = props => {
  const game = props.game
  
  return (
    <h3>{game.name}</h3>
  )
}

export default GameDetails