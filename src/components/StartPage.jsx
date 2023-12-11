import Layout from "./ui/Layout"
import Button from "./ui/Buttton"
import AppContext from "./AppContextProvider"
import { useContext } from "react"
import Chessgame from "./Chessgame"

export function StartPage() {
  const { chessState, update } = useContext(AppContext)
  const handleStartClick = () => {
    update(() => ({ active: true }))
  }

  if (chessState.active) {
    return (
      <div className="bg-sky-950">
        <Layout>
          <Chessgame />
        </Layout>
      </div>
    )
  }

  return (
    <div className="bg-sky-900 text-sky-100">
      <Layout>
        <div className="flex-col p-2 flex items-center w-96 48 center text-justify font-serif">
          <h1 className="text-4xl underline m-2">CHESS GAME</h1>
          <p className="my-2">
            The rules of chess (also known as the laws of chess) govern the play
            of the game of chess. Chess is a two-player abstract strategy board
            game. Each player controls sixteen pieces of six types on a
            chessboard. Each type of piece moves in a distinct way. The object
            of the game is to checkmate the opponent's king; checkmate occurs
            when a king is threatened with capture and has no escape.
          </p>
          <p>
            A game can end in various ways besides checkmate: a player can
            resign, and there are several ways a game can end in a draw. While
            the exact origins of chess are unclear, modern rules first took form
            during the Middle Ages. The rules continued to be slightly modified
            until the early 19th century, when they reached essentially their
            current form.
          </p>
          <Button
            size="sm"
            className="my-4 font-sans bg-yellow-500"
            onClick={handleStartClick}>
            Get Started!
          </Button>
        </div>
      </Layout>
    </div>
  )
}
