import { createContext, useCallback, useState } from "react"
import { merge } from "@corex/deepmerge"
import { getDefaultPlayerInfo } from "../utils/playersAPI.ts"

const AppContext = createContext()
const initializeChessState = () => ({
  active: true,
  chessboard: {
    cells: [...Array(8)].reduce(
      (cells, _, index) => ({
        [index + 1]: ["a", "b", "c", "d", "e", "f", "g", "h"]
      }),
      {}
    ),
    columns: [...Array(8)].map((_, index) => index + 1),
    rows: [...Array(8)].map((_, index) => index + 1)
  },
  checkmateDetected: false,
  players: {
    playerOne: getDefaultPlayerInfo("white"),
    playerTwo: getDefaultPlayerInfo("black")
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
      const position = event.target.getAttribute("data-position")
      const [xPosition, yPosition] = position.split("-")
      // eslint-disable-next-line no-console
      console.log(xPosition, yPosition)
    },
    [update]
  )

  return <AppContext.Provider {...props} value={{ chessState, update, play }} />
}

export default AppContext
