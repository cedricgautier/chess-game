import { AppContextProvider } from "./AppContextProvider"
import StartPage from "./pages/StartPage"

const App = () => (
  <AppContextProvider>
    <StartPage></StartPage>
  </AppContextProvider>
)

export default App
