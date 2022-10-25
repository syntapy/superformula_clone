import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

//import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/navbar.module.css"

import Chilidogmenu from "../../images/svg/chilidogmenu.svg"

export default function NavBar() {
  const homeItem: string = styles.homeItem + " " + styles.navItem
  const pageItem: string = styles.pageItem + " " + styles.navItem
  return (
    <div className={styles.navContainer}>
      <Chilidogmenu className={styles.chiliDogMenu} />
      <nav className={styles.nav}>
        <HomeNavButton className={homeItem} href="/" text="Superformula." />
        <NavButton className={pageItem} href="/services" text="Services" />
        <NavButton className={pageItem} href="/work" text="Work" />
        <NavButton className={pageItem} href="/articles" text="Articles" />
        <NavButton className={pageItem} href="/contact" text="Contact" />
        <CareersNavButton className={pageItem} href="https://careers.superformula.com" text="Careers" />
      </nav>
    </div>
  )
}
//<svg viewBox="0 0 80 50" width="80" height="50" fill="#ffffff">
//<rect width="44" height="5"></rect>
//<rect y="20" width="80" height="5"></rect>
//<rect y="40" width="50" height="5"></rect>
//</svg>
