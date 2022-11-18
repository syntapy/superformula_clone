import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"
import * as utilStyles from "../styles/utils.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"

export default function NavBar() {
  const navBar: string = styles.container + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const pageItemList: string = styles.navItem + " " + styles.container
  const pageItem: string = styles.pageItem + " " + styles.navItem
  return (
    <div className={navBar}>
      <Chilidogmenu className={styles.chilidog} />
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
      <nav className={pageItemList}>
        <NavButton className={pageItem} href="/services" text="Services" />
        <NavButton className={pageItem} href="/work" text="Work" />
        <NavButton className={pageItem} href="/articles" text="Articles" />
        <NavButton className={pageItem} href="/contact" text="Contact" />
        <CareersNavButton className={pageItem} href="https://careers.superformula.com" text="Careers" />
      </nav>
    </div>
  )
}
