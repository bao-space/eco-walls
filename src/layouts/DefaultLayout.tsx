import { Outlet } from "react-router-dom"
import { Nav } from "../components/navbar"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export function DefaultLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </>
  )
}
