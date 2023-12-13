//This is a false positive, used as a Return Type on signature of functions.
import { Piece } from "../classes/piece.ts" // eslint-disable-line no-unused-vars
import { pieceTypes as pt } from "../constants/pieces.ts"
import * as mv from "../utils/movePieces.ts"

export const eatPiece = (): Piece["position"] => ({
  x: 0,
  y: 0
})

export const getPiecePosition = (xPosition, yPosition): Piece["position"] => ({
  x: xPosition,
  y: yPosition
})

export const movePiece = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  const validPosition = validatePositionInRange(chosenPiece, wantedPosition)

  if (chosenPiece.type !== pt.PAWN) {
    return moveLikeSpecial(chosenPiece, validPosition)
  }

  return mv.moveLikePawn(chosenPiece, validPosition)
}
const validatePositionInRange = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece["position"] => {
  const [isXOutOfRange, isYOutOfRange] = checkWantedRange(wantedPosition)

  return isXOutOfRange || isYOutOfRange ? chosenPiece.position : wantedPosition
}
const checkWantedRange = (
  wantedPosition: Piece["position"]
): [boolean, boolean] => {
  const { x, y } = wantedPosition
  const isXOutOfRange = x !== null && (x < 1 || x > 8)
  const isYOutOfRange = y !== null && (y < 1 || y > 8)

  return [isXOutOfRange, isYOutOfRange]
}
const moveLikeSpecial = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece.type === pt.KING || pt.QUEEN) {
    return moveAsRoyalHeighness(chosenPiece, wantedPosition)
  }

  if (chosenPiece.type === pt.ROOK || pt.KNIGHT) {
    return moveAsCavalry(chosenPiece, wantedPosition)
  }

  return mv.moveLikeBishop(chosenPiece, wantedPosition)
}
const moveAsRoyalHeighness = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece.type === pt.KING) {
    return mv.moveLikeKing(chosenPiece, wantedPosition)
  }

  if (chosenPiece.type === pt.QUEEN) {
    return mv.moveLikeQueen(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
const moveAsCavalry = (
  chosenPiece: Piece,
  wantedPosition: Piece["position"]
): Piece => {
  if (chosenPiece.type === pt.KNIGHT) {
    return mv.movelikeKnight(chosenPiece, wantedPosition)
  }

  if (chosenPiece.type === pt.ROOK) {
    return mv.moveLikeRook(chosenPiece, wantedPosition)
  }

  return chosenPiece
}
