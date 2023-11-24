import { pieceBasePositions } from "../constants/pieces.ts"

export const getDefaultPlayerInfo = (playerColor: string) => ({
  moves: 0,
  piecesEaten: 0,
  kingDefeated: false,
  pieces: getPlayerPieces(playerColor)
})

export const getPlayerPieces = (playerColor: string): Object => {
  const lowercasedPlayerColor = playerColor.toLowerCase()

  if (lowercasedPlayerColor === "white") {
    return pieceBasePositions.white
  }

  if (lowercasedPlayerColor === "black") {
    return pieceBasePositions.black
  }

  return {}
}
