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
  white: [
    new Piece(
      { x: 8, y: 3 },
      playerColors.WHITE,
      pieceTypes.BISHOP,
      piecesByColor.WHITE_BISHOP
    ),
    new Piece(
      { x: 8, y: 6 },
      playerColors.WHITE,
      pieceTypes.BISHOP,
      piecesByColor.WHITE_BISHOP
    ),
    new Piece(
      { x: 8, y: 5 },
      playerColors.WHITE,
      pieceTypes.KING,
      piecesByColor.WHITE_KING
    ),
    new Piece(
      { x: 8, y: 2 },
      playerColors.WHITE,
      pieceTypes.KNIGHT,
      piecesByColor.WHITE_KNIGHT
    ),
    new Piece(
      { x: 8, y: 7 },
      playerColors.WHITE,
      pieceTypes.KNIGHT,
      piecesByColor.WHITE_KNIGHT
    ),
    new Piece(
      { x: 7, y: 1 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 2 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 3 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 4 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 5 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 6 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 7 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 7, y: 8 },
      playerColors.WHITE,
      pieceTypes.PAWN,
      piecesByColor.WHITE_PAWN
    ),
    new Piece(
      { x: 8, y: 4 },
      playerColors.WHITE,
      pieceTypes.QUEEN,
      piecesByColor.WHITE_QUEEN
    ),
    new Piece(
      { x: 8, y: 1 },
      playerColors.WHITE,
      pieceTypes.ROOK,
      piecesByColor.WHITE_ROOK
    ),
    new Piece(
      { x: 8, y: 8 },
      playerColors.WHITE,
      pieceTypes.ROOK,
      piecesByColor.WHITE_ROOK
    )
  ],
  black: [
    new Piece(
      { x: 1, y: 3 },
      playerColors.BLACK,
      pieceTypes.BISHOP,
      piecesByColor.BLACK_BISHOP
    ),
    new Piece(
      { x: 1, y: 6 },
      playerColors.BLACK,
      pieceTypes.BISHOP,
      piecesByColor.BLACK_BISHOP
    ),

    new Piece(
      { x: 1, y: 5 },
      playerColors.BLACK,
      pieceTypes.KING,
      piecesByColor.BLACK_KING
    ),

    new Piece(
      { x: 1, y: 2 },
      playerColors.BLACK,
      pieceTypes.KNIGHT,
      piecesByColor.BLACK_KNIGHT
    ),
    new Piece(
      { x: 1, y: 7 },
      playerColors.BLACK,
      pieceTypes.KNIGHT,
      piecesByColor.BLACK_KNIGHT
    ),

    new Piece(
      { x: 2, y: 1 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 2 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 3 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 4 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 5 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 6 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 7 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),
    new Piece(
      { x: 2, y: 8 },
      playerColors.BLACK,
      pieceTypes.PAWN,
      piecesByColor.BLACK_PAWN
    ),

    new Piece(
      { x: 1, y: 4 },
      playerColors.BLACK,
      pieceTypes.QUEEN,
      piecesByColor.BLACK_QUEEN
    ),

    new Piece(
      { x: 1, y: 1 },
      playerColors.BLACK,
      pieceTypes.ROOK,
      piecesByColor.BLACK_ROOK
    ),
    new Piece(
      { x: 1, y: 8 },
      playerColors.BLACK,
      pieceTypes.ROOK,
      piecesByColor.BLACK_ROOK
    )
  ]
}
