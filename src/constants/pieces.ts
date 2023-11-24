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

export const pieceBasePositions = {
  white: {
    BISHOP: [
      { x: "8", y: "3" },
      { x: "8", y: "6" }
    ],
    KING: [{ x: "8", y: "5" }],
    KNIGHT: [
      { x: "8", y: "" },
      { x: "8", y: "" }
    ],
    PAWN: [
      { x: "7", y: "1" },
      { x: "7", y: "2" },
      { x: "7", y: "3" },
      { x: "7", y: "4" },
      { x: "7", y: "5" },
      { x: "7", y: "6" },
      { x: "7", y: "7" },
      { x: "7", y: "8" }
    ],
    QUEEN: [{ x: "8", y: "4" }],
    ROOK: [
      { x: "8", y: "1" },
      { x: "8", y: "8" }
    ]
  },

  black: {
    BISHOP: [
      { x: "1", y: "3" },
      { x: "1", y: "6" }
    ],
    KING: [{ x: "1", y: "5" }],
    KNIGHT: [
      { x: "1", y: "2" },
      { x: "1", y: "7" }
    ],
    PAWN: [
      { x: "2", y: "1" },
      { x: "2", y: "2" },
      { x: "2", y: "3" },
      { x: "2", y: "4" },
      { x: "2", y: "5" },
      { x: "2", y: "6" },
      { x: "2", y: "7" },
      { x: "2", y: "8" }
    ],
    QUEEN: [{ x: "1", y: "" }],
    ROOK: [
      { x: "1", y: "" },
      { x: "1", y: "" }
    ]
  }
}
