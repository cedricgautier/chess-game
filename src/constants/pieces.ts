import { Piece } from "../classes/piece.ts"
import { playerColors } from "./players.ts"

export const piecesByColor = {
  WHITE_KING: "♔",
  WHITE_QUEEN: "♕",
  WHITE_ROOK: "♖",
  WHITE_BISHOP: "♗",
  WHITE_KNIGHT: "♘",
  WHITE_PAWN: "♙",
  BLACK_KING: "♚",
  BLACK_QUEEN: "♛",
  BLACK_ROOK: "♜",
  BLACK_BISHOP: "♝",
  BLACK_KNIGHT: "♞",
  BLACK_PAWN: "♟"
}

export const pieceTypes = {
  KING: "king",
  QUEEN: "queen",
  ROOK: "rook",
  BISHOP: "bishop",
  KNIGHT: "knight",
  PAWN: "pawn"
}

export const pieceBasePositions = {
  white: {
    BISHOP: [
      new Piece({ x: 8, y: 3 }, playerColors.WHITE, pieceTypes.BISHOP),
      new Piece({ x: 8, y: 6 }, playerColors.WHITE, pieceTypes.BISHOP)
    ],
    KING: [new Piece({ x: 8, y: 5 }, playerColors.WHITE, pieceTypes.KING)],
    KNIGHT: [
      new Piece({ x: 8, y: 2 }, playerColors.WHITE, pieceTypes.KNIGHT),
      new Piece({ x: 8, y: 7 }, playerColors.WHITE, pieceTypes.KNIGHT)
    ],
    PAWN: [
      new Piece({ x: 7, y: 1 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 2 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 3 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 4 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 5 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 6 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 7 }, playerColors.WHITE, pieceTypes.PAWN),
      new Piece({ x: 7, y: 8 }, playerColors.WHITE, pieceTypes.PAWN)
    ],
    QUEEN: [new Piece({ x: 8, y: 4 }, playerColors.WHITE, pieceTypes.QUEEN)],
    ROOK: [
      new Piece({ x: 8, y: 1 }, playerColors.WHITE, pieceTypes.ROOK),
      new Piece({ x: 8, y: 8 }, playerColors.WHITE, pieceTypes.ROOK)
    ]
  },
  black: {
    BISHOP: [
      new Piece({ x: 1, y: 3 }, playerColors.BLACK, pieceTypes.BISHOP),
      new Piece({ x: 1, y: 6 }, playerColors.BLACK, pieceTypes.BISHOP)
    ],
    KING: [new Piece({ x: 1, y: 5 }, playerColors.BLACK, pieceTypes.KING)],
    KNIGHT: [
      new Piece({ x: 1, y: 2 }, playerColors.BLACK, pieceTypes.KNIGHT),
      new Piece({ x: 1, y: 7 }, playerColors.BLACK, pieceTypes.KNIGHT)
    ],
    PAWN: [
      new Piece({ x: 2, y: 1 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 2 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 3 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 4 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 5 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 6 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 7 }, playerColors.BLACK, pieceTypes.PAWN),
      new Piece({ x: 2, y: 8 }, playerColors.BLACK, pieceTypes.PAWN)
    ],
    QUEEN: [new Piece({ x: 1, y: 4 }, playerColors.BLACK, pieceTypes.QUEEN)],
    ROOK: [
      new Piece({ x: 1, y: 1 }, playerColors.BLACK, pieceTypes.ROOK),
      new Piece({ x: 1, y: 8 }, playerColors.BLACK, pieceTypes.ROOK)
    ]
  }
}
