import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <HomeNavButton href="/" text="Superformula." />
      <NavButton href="/services" text="Services" />
      <NavButton href="/work" text="Work" />
      <NavButton href="/articles" text="Articles" />
      <NavButton href="/contact" text="Contact" />
      <CareersNavButton href="https://careers.superformula.com" text="Careers" />
    </nav>
  )
}
