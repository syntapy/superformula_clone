import * as React from "react"
import type { HeadFC } from "gatsby"

import NavBar from "./components/navbar"

export default function Header() {
  return (
    <header>
      <NavBar />
    </header>
  )
}
