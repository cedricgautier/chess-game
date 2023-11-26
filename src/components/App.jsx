import { StrictMode } from "react"
import { AppContextProvider } from "./AppContextProvider"
import { StartPage } from "./StartPage"

const App = () => (
  <StrictMode>
    <AppContextProvider>
      <StartPage />
    </AppContextProvider>
  </StrictMode>
)

export default App
