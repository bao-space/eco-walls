import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { AboutUs } from "./pages/AboutUs"
import { Shop } from "./pages/Shop"
import { Services } from "./pages/Services"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}
