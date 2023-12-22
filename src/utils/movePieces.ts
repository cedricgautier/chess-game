//This is a false positive, used as a Return Type on signature of functions.
import { Piece } from "../classes/piece.ts" // eslint-disable-line no-unused-vars
import { getNewPiecePosition } from "./gameplayAPI.ts"

export const moveLikeKing = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    Math.abs(chosenPiece.position.y - wantedPosition.y) === 1 &&
    Math.abs(chosenPiece.position.x - wantedPosition.x) === 1 // Difference of Y is 1 and difference of X is 1
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}

export const moveLikeQueen = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    (wantedPosition.x !== chosenPiece.position.x &&
      wantedPosition.y === chosenPiece.position.y) || // x is different but y stays the same - Move like Rook
    (wantedPosition.y !== chosenPiece.position.y &&
      wantedPosition.x === chosenPiece.position.x) || // y is different but x stays the same - Move like Rook
    Math.abs(chosenPiece.position.x - wantedPosition.x) ===
      Math.abs(chosenPiece.position.y - wantedPosition.y) //Move like Bishop
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}

export const moveLikeBishop = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    Math.abs(chosenPiece.position.x - wantedPosition.x) ===
    Math.abs(chosenPiece.position.y - wantedPosition.y)
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}

export const moveLikePawn = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const isFirstMove = () => {
    if (chosenPiece.hasMoved) {
      return true
    }

    return false
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    (isFirstMove() &&
      wantedPosition.y - chosenPiece.position.y === 2 &&
      wantedPosition.x === chosenPiece.position.x) ||
    (!isFirstMove() &&
      wantedPosition.y - chosenPiece.position.y === 1 &&
      wantedPosition.x === chosenPiece.position.x)
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}

export const moveLikeRook = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    (wantedPosition.x !== chosenPiece.position.x &&
      wantedPosition.y === chosenPiece.position.y) || // x is different but y stays the same
    (wantedPosition.y !== chosenPiece.position.y &&
      wantedPosition.x === chosenPiece.position.x) // y is different but x stays the same
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}

export const movelikeKnight = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (!wantedPosition) {
    return chosenPiece
  }

  const pieceNewPosition = { ...chosenPiece }

  if (
    (Math.abs(chosenPiece.position.y - wantedPosition.y) === 2 &&
      Math.abs(chosenPiece.position.x - wantedPosition.x) === 1) || // Difference of Y is 2 and difference of X is 1
    (Math.abs(chosenPiece.position.y - wantedPosition.y) === 1 &&
      Math.abs(chosenPiece.position.x - wantedPosition.x) === 2) // Difference of Y is 1 and difference of X is 2
  ) {
    pieceNewPosition.position = wantedPosition
  }

  return pieceNewPosition
}
