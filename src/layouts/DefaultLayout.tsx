import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
