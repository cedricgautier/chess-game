import { useContext } from "react"

import Layout from "./ui/Layout"
import AppContext from "./AppContextProvider"

const Chessgame = () => {
  const { chessState, play } = useContext(AppContext)

  return (
    <Layout>
      <div className="w-[576px] flex flex-wrap">
        {chessState.chessboard.rows.flatMap((number) =>
          chessState.chessboard.columns
            .map((letter) => (
              <button
                key={`${letter}-${number}`}
                className="w-[64px] h-[64px] border active:bg-slate-100 text-3xl"
                data-position={`${letter}-${number}`}
                onClick={play}>
                {letter}-{number}
              </button>
            ))
            .concat(
              <span
                key={number}
                className="w-[64px] h-[64px] text-slate-400 flex items-center justify-center text-3xl">
                {number}
              </span>
            )
        )}
        {chessState.chessboard.columns.map((letter) => (
          <span
            key={letter}
            className="w-[64px] h-[64px] text-slate-400 flex items-center justify-center text-3xl">
            {letter}
          </span>
        ))}
      </div>
    </Layout>
  )
}

export default Chessgame
