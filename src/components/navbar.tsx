import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"
import * as utilStyles from "../styles/utils.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"

export default function NavBar() {
  const homeItem: string = styles.homeItem + " " + styles.navItem
  const pageItem: string = styles.pageItem + " " + styles.navItem
  return (
    <div className={styles.navContainer}>
      <Chilidogmenu className={styles.chilidog} />
      <nav className={utilStyles.flexContainer}>
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
