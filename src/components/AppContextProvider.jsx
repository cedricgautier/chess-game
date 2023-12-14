import { createContext, useCallback, useState } from "react"
import { merge } from "@corex/deepmerge"
import * as pl from "../utils/playersAPI.ts"
import * as gp from "../utils/gameplayAPI.ts"
import { playerColors } from "../constants/players.ts"
import { pieceBasePositions } from "../constants/pieces.ts"

const AppContext = createContext()
const initializeChessState = () => ({
  active: false,
  activePlayer: playerColors.WHITE,
  chessboard: {
    columns: [...Array(8)].map((_, index) => index + 1),
    rows: [...Array(8)].map((_, index) => index + 1)
  },
  pieces: pieceBasePositions,
  checkmateDetected: false,
  players: {
    playerOne: pl.getDefaultPlayerInfo(playerColors.WHITE),
    playerTwo: pl.getDefaultPlayerInfo(playerColors.BLACK)
  }
})

export const AppContextProvider = (props) => {
  const [chessState, setChessState] = useState(initializeChessState)
  const update = (updateValue) =>
    setChessState((previousState) =>
      merge([previousState, updateValue(previousState)])
    )
  const play = useCallback(
    (event) => {
      const [xPiecePosition, yPiecePosition] = event.target
        .getAttribute("data-position")
        .split("-")
      const chosenPiecePosition = gp.getPiecePosition(
        xPiecePosition,
        yPiecePosition
      )
      const wantedPosition = gp.getPiecePosition(xPiecePosition, yPiecePosition)
      const movePieceTo = gp.movePiece(chosenPiecePosition, wantedPosition)

      setChessState((previousState) => {
        const newState = { ...previousState }
        newState.activePlayer = pl.switchPlayer(chessState.activePlayer)

        return newState
      })
    },
    [update]
  )

  return <AppContext.Provider {...props} value={{ chessState, update, play }} />
}

export default AppContext
