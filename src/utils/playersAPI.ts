import { playerColors } from "../constants/players.ts"
import { pieceBasePositions } from "../constants/pieces.ts"
import { Piece } from "../classes/piece.ts"

export const getDefaultPlayerInfo = (playerColor: string) => ({
  color: playerColor,
  chosenPiece: null,
  chosenPlaceToMove: null,
  moves: 0,
  piecesEaten: 0,
  kingDefeated: false,
  pieces: getInitialPlayerPieces(playerColor)
})

export const switchPlayer = (activePlayer: String): String => {
  if (activePlayer === playerColors.WHITE) {
    return playerColors.BLACK
  }

  if (activePlayer === playerColors.BLACK) {
    return playerColors.WHITE
  }

  return ""
}

export const getInitialPlayerPieces = (playerColor: string): Object => {
  const lowercasedPlayerColor = playerColor
  if (lowercasedPlayerColor === playerColors.WHITE) {
    return pieceBasePositions.white
  }

  if (lowercasedPlayerColor === playerColors.BLACK) {
    return pieceBasePositions.black
  }

  return {}
}
