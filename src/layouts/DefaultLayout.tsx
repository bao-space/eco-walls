import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Contact } from "../components/contact"

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
    </>
  )
}
