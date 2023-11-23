import { piecesByColor as p } from "../constants/pieces"

export const getPlayerSymbolColor = (
  whiteSymbol,
  blackSymbol,
  playerColor = playerColor.toLowerCase()
) => {
  if (playerColor === "white") {
    return whiteSymbol
  }

  if (playerColor === "black") {
    return blackSymbol
  }

  return "❌"
}

export const getDefaultPlayerInfo = (playerColor) => ({
  moves: 0,
  piecesEaten: 0,
  kingDefeated: false,
  pieces: {
    totalOfPieces: 16,
    king: {
      total: 1,
      symbol: getPlayerSymbolColor(p.WHITE_KING, p.BLACK_KING, playerColor),
      position: ""
    },
    queen: {
      total: 1,
      symbol: getPlayerSymbolColor(p.WHITE_QUEEN, p.BLACK_QUEEN, playerColor),
      position: ""
    },
    rook: {
      total: 2,
      symbol: getPlayerSymbolColor(p.WHITE_ROOK, p.BLACK_QUEEN, playerColor),
      position: ""
    },
    bishop: {
      total: 2,
      symbol: getPlayerSymbolColor(p.WHITE_BISHOP, p.BLACK_BISHOP, playerColor),
      position: ""
    },
    knight: {
      total: 2,
      symbol: getPlayerSymbolColor(p.WHITE_KNIGHT, p.BLACK_KNIGHT, playerColor),
      position: ""
    },
    pawn: {
      total: 8,
      symbol: getPlayerSymbolColor(p.WHITE_PAWN, p.BLACK_PAWN, playerColor),
      position: ""
    }
  }
})
