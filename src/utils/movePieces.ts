//This is a false positive, used as a Return Type on signature of functions.
import { Piece } from "../classes/piece.ts" // eslint-disable-line no-unused-vars

export const moveLikeKing = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
export const moveLikeQueen = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
export const moveLikeBishop = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
export const moveLikePawn = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
export const moveLikeRook = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
export const movelikeKnight = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece) {
    return getNewPiecePosition(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
const getNewPiecePosition = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  const { x, y } = wantedPosition
  const pieceWithWantedPosition = { ...chosenPiece }
  pieceWithWantedPosition.position.x = x
  pieceWithWantedPosition.position.y = y

  return pieceWithWantedPosition
}
