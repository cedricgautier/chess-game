import { createContext, useCallback, useState } from "react"
import { getDefaultPlayerInfo } from "../helpers/players"
import { merge } from "@corex/deepmerge"

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
    columns: ["a", "b", "c", "d", "e", "f", "g", "h"],
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

      console.log(position.split("-"))
    },
    [update]
  )

  return <AppContext.Provider {...props} value={{ chessState, update, play }} />
}

export default AppContext
