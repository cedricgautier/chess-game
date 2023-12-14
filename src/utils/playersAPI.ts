import { playerColors } from "../constants/players.ts"
import { pieceBasePositions } from "../constants/pieces.ts"
import { Piece } from "../classes/piece.ts"

export const getDefaultPlayerInfo = (playerColor: string) => ({
  color: playerColor,
  chosenPiece: null,
  chosenPlaceToMove: null,
  moves: 0,
  piecesEaten: 0,
  kingDefeated: false
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
