import * as React from "react"
import type { HeadFC } from "gatsby"

import NavBar from "../components/navbar"
import Toast from "../components/toast"

export default function Header() {
  return (
    <header>
      <NavBar />
      <Toast message={"This is a practice clone site and is not the actual Superformula website"} />
    </header>
  )
}
