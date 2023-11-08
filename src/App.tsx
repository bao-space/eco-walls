import "./App.css"
import { HashRouter } from "react-router-dom"
import { Router } from "./router"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <>
      <HashRouter basename={import.meta.env.DEV ? "/" : "/eco-walls/"}>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </HashRouter>
    </>
  )
}

export default App
