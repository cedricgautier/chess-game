const Stats = (props) => {
  const { chessState } = props

  return (
    <div className="text-white flex p-2 m-2 text-center rounded-md">
      <ul className="mx-8 text rounded-md bg-sky-900 p-2 px-4">
        <li>{chessState.players.playerOne.color.toUpperCase()}</li>
        <li>{`Pieces eaten : ${chessState.players.playerOne.piecesEaten}`}</li>
        <li>{`Moves done :  ${chessState.players.playerOne.moves}`}</li>
      </ul>

      <ul className="mx-8 text rounded-md bg-sky-900 p-2 px-4">
        <li>{chessState.players.playerTwo.color.toUpperCase()}</li>
        <li>{`Pieces eaten : ${chessState.players.playerTwo.piecesEaten}`}</li>
        <li>{`Moves done :  ${chessState.players.playerTwo.moves}`}</li>
      </ul>
    </div>
  )
}

export default Stats
