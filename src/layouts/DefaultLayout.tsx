import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </>
  )
}
