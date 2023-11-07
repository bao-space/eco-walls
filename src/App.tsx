import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/eco-walls/"}>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
