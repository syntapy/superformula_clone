import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"
import * as utilStyles from "../styles/utils.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"

export default function NavBar() {
  const navBarPadding: string = styles.navbarContainer
  const navBar: string = styles.container + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const pageItemList: string = styles.navItem + " " + styles.pageItemList
  const pageItem: string = styles.pageItem + " " + styles.navItem
  const mobileHomeItem: string = styles.pageItem + " " + styles.mobileHomeItem + " " + styles.navItem
  const chilidogStyle: string = styles.chilidog
  function onChilidogClick() {
    console.log("Chilidog clicked")
  }
  return (
    <div className={navBarPadding}>
      <div className={navBar}>
        <Chilidogmenu onClick={onChilidogClick} className={chilidogStyle} />
        <HomeNavButton className={homeItem} href="/" text="Superformula." />
        <nav className={pageItemList}>
          <HomeNavButton className={mobileHomeItem} href="/" text="Superformula." />
          <NavButton className={pageItem} href="/services" text="Services" />
          <NavButton className={pageItem} href="/work" text="Work" />
          <NavButton className={pageItem} href="/articles" text="Articles" />
          <NavButton className={pageItem} href="/contact" text="Contact" />
          <CareersNavButton className={pageItem} href="https://careers.superformula.com" text="Careers" />
        </nav>
      </div>
    </div>
  )
}
