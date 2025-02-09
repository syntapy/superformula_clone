import * as React from "react"
import type { HeadFC } from "gatsby"

import NavBar from "../components/nav/NavBar"
import Toast from "../components/toast"

import * as styles from "../styles/header.module.css"

export default function Header() {
  const headerStyles: string = styles.header
  return (
    <header className={headerStyles}>
      <NavBar />
      <Toast message={"This is a practice clone site and is not the actual Superformula website"} />
    </header>
  )
}
