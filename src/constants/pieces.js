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
  WHITE_KING: [(1).e],
  WHITE_QUEEN: [(1)[0]],
  WHITE_ROOK: ["a"[0], "h"[0]],
  WHITE_BISHOP: ["c"[0], "f"[0]],
  WHITE_KNIGHT: ["b"[0], "g"[0]],
  WHITE_PAWN: ["a"[1], "b"[1], "c"[1], "d"[1], "e"[1], "f"[1], "g"[1]],

  BLACK_KING: ["e"[7]],
  BLACK_QUEEN: ["e"[7]],
  BLACK_ROOK: ["e"[7]],
  BLACK_BISHOP: ["e"[7]],
  BLACK_KNIGHT: ["e"[7]],
  BLACK_PAWN: ["a"[6], "b"[6], "c"[6], "d"[6], "e"[6], "f"[6], "g"[6]]
}
