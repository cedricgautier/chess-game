import { AppContextProvider } from "./AppContextProvider"
import { StartPage } from "./StartPage"

const App = () => (
  <AppContextProvider>
    <StartPage />
  </AppContextProvider>
)

export default App
