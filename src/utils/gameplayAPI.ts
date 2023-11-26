import { Piece } from "../classes/piece.ts"
import { pieceTypes as pt } from "../constants/pieces.ts"

export const eatPiece = () => ({ x: null, y: null })

export const getPiecePosition = (xPosition, yPosition) => ({
  xPosition,
  yPosition
})

export const movePiece = (
  chosenPiece: Piece,
  wantedPosition: Object
): Object => {
  const pieceType = chosenPiece.type.toLowerCase()
  let position: Object

  const { x: xWanted, y: yWanted } = wantedPosition as {
    x: number
    y: number
  }

  if (
    wantedPosition == null ||
    xWanted < 1 ||
    xWanted > 8 ||
    yWanted < 1 ||
    yWanted > 8
  ) {
    return chosenPiece.position
  }

  switch (pieceType) {
    case pt.KING:
      position = moveLikeKing(chosenPiece, { x: xWanted, y: yWanted })
      return position

    case pt.QUEEN:
      const newPosition = moveLikeQueen(chosenPiece, { x: xWanted, y: yWanted })
      return newPosition

    case pt.BISHOP:
      position = moveLikeBishop(chosenPiece, { x: xWanted, y: yWanted })
      return position

    case pt.KNIGHT:
      position = movelikeKnight(chosenPiece, { x: xWanted, y: yWanted })
      return position

    case pt.ROOK:
      position = moveLikeRook(chosenPiece, { x: xWanted, y: yWanted })
      return position

    default: //Is Pawn
      position = moveLikePawn(chosenPiece, { x: xWanted, y: yWanted })
      return position
  }
}

const moveLikeKing = (chosenPiece: Piece, wantedPosition: Object): Object => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
const moveLikeQueen = (chosenPiece: Piece, wantedPosition: Object) => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
const moveLikeBishop = (chosenPiece: Piece, wantedPosition: Object) => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
const moveLikePawn = (chosenPiece: Piece, wantedPosition: Object) => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
const moveLikeRook = (chosenPiece: Piece, wantedPosition: Object) => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
const movelikeKnight = (chosenPiece: Piece, wantedPosition: Object) => {
  if (chosenPiece.position.x != null && chosenPiece.position.y != null) {
    if (chosenPiece) {
      return {}
    }
  }

  return chosenPiece.position
}
