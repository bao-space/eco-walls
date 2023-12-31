import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/eco-walls/"}>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
