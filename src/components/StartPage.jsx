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
    <div className="">
      <h1>Click start button to play</h1>
      <Button onClick={handleStartClick}>Start</Button>
    </div>
  )
}
