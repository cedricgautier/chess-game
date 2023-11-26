import { createContext, useCallback, useState } from "react"
import { merge } from "@corex/deepmerge"
import * as pl from "../utils/playersAPI.ts"
import * as gp from "../utils/gameplayAPI.ts"
import { playerColors } from "../constants/players.ts"

const AppContext = createContext()
const initializeChessState = () => ({
  active: false,
  activePlayer: playerColors.WHITE,
  chessboard: {
    cells: [...Array(8)].reduce(
      (cells, _, index) => ({
        [index + 1]: ["a", "b", "c", "d", "e", "f", "g", "h"]
      }),
      {}
    ), // Todo: REMOVE THIS SHIT
    columns: [...Array(8)].map((_, index) => index + 1),
    rows: [...Array(8)].map((_, index) => index + 1)
  },
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
