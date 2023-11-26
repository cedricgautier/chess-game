import { playerColors } from "../constants/players.ts"
import { pieceBasePositions } from "../constants/pieces.ts"

export const getDefaultPlayerInfo = (playerColor: string) => ({
  color: playerColor,
  chosenPiece: null,
  chosenPlaceToMove: null,
  moves: 0,
  piecesEaten: 0,
  kingDefeated: false,
  pieces: getPlayerPieces(playerColor)
})

export const switchPlayer = (activePlayer: String) => {
  if (activePlayer == playerColors.WHITE) {
    return playerColors.BLACK
  }

  if (activePlayer == playerColors.BLACK) {
    return playerColors.WHITE
  }
}

export const getPlayerPieces = (playerColor: string): Object => {
  const lowercasedPlayerColor = playerColor.toLowerCase()

  if (lowercasedPlayerColor === playerColors.WHITE) {
    console.log(pieceBasePositions.white)
    return pieceBasePositions.white
  }

  if (lowercasedPlayerColor === playerColors.BLACK) {
    return pieceBasePositions.black
  }

  return {}
}
