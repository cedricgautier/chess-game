import { createContext, useState } from "react"
import { getDefaultPlayerInfo } from "../helpers/players"

const AppContext = createContext()
const initializeChessState = () => ({
  active: false,
  chessboard: () =>
    Array.from(Array(8).keys())
      .map((i) => i + 1)
      .reduce((acc, value) => {
        acc[value] = ["a", "b", "c", "d", "e", "f", "g", "h"]

        return acc
      }, {}),
  checkmateDetected: false,
  players: {
    playerOne: getDefaultPlayerInfo("white"),
    playerTwo: getDefaultPlayerInfo("black")
  }
})

export const AppContextProvider = (props) => {
  const [chessState, setChessState] = useState(initializeChessState())

  return (
    <AppContext.Provider {...props} value={{ chessState, setChessState }} />
  )
}
