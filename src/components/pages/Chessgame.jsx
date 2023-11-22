import { useContext } from "react"
import { AppContextProvider } from "../AppContextProvider"
import Layout from "../ui/Layout"

const AppContext = useContext(AppContextProvider)
const Chessgame = () => {
  const ctx = AppContext

  return (
    <Layout>
      <div>
        {ctx.chessState.chessboard().map((value, index) => (
          <button
            key={index}
            className="w-16 h-16 border active:bg-slate-100 text-4xl"
            data-index={index}>
            {value}
          </button>
        ))}
      </div>
    </Layout>
  )
}

export default Chessgame
