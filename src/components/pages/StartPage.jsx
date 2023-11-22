import Layout from "../ui/Layout"
import Chessgame from "./Chessgame"
import Button from "../ui/Buttton"
import { AppContextProvider } from "../AppContextProvider"
import { useContext } from "react"

const AppContext = useContext(AppContextProvider)
const handleStartClick = () => {
  AppContext.setChessState({ active: true })

  return (
    <Layout>
      <Chessgame></Chessgame>
    </Layout>
  )
}
const StartPage = () => (
  <Layout>
    <h1>Click start button to play</h1>
    <Button onClick={handleStartClick}>Start</Button>
  </Layout>
)

export default StartPage
