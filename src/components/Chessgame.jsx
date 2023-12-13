import { useContext } from "react"
import Stats from "./Stats"
import Layout from "./ui/Layout"
import AppContext from "./AppContextProvider"

const Chessgame = () => {
  const { chessState, play } = useContext(AppContext)
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]

  return (
    <Layout>
      <div className="text-white text-xl">{`Current Player: ${chessState.activePlayer.toUpperCase()}`}</div>
      <Stats chessState={chessState}></Stats>
      <div className="w-[576px] flex flex-wrap">
        {chessState.chessboard.columns.flatMap((letter) =>
          chessState.chessboard.rows
            .map((number) => (
              <button
                key={`${letter}-${number}`}
                className="w-[64px] h-[64px] border active:bg-yellow-500 text-3xl odd:bg-sky-50 odd:text-sky-900 even:bg-sky-900 even:text-sky-50"
                data-position={`${letter}-${number}`}
                onClick={play}>
                {letter}-{number}
              </button>
            ))
            .concat(
              <span
                key={letter}
                className="w-[64px] h-[64px] text-slate-400 flex items-center justify-center text-3xl">
                {letter}
              </span>
            )
        )}
        {letters.map((letter) => (
          <span
            key={letter}
            className="w-[64px] h-[64px] text-slate-400 flex items-center justify-center text-3xl">
            {letter.toUpperCase()}
          </span>
        ))}
      </div>
    </Layout>
  )
}

export default Chessgame
