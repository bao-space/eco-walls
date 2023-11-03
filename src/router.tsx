import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/defaultLayout"
import { AboutUs } from "./pages/AboutUs"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  )
}
