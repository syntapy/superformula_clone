import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { desktop, mobile } from "../styles/utilities/visibility.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"

export default function NavBar() {
  const nav: string = styles.container + " " + orientationStyles.horizontalFlex + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const pageItemList: string = desktop + " " + styles.navItem + " " + orientationStyles.horizontalFlex + " " + orientationStyles.mobileV_desktopH
  const pageItem: string = styles.pageItem + " " + styles.navItem
  const chilidog: string = mobile + " " + styles.chilidog
  return (
    <nav className={nav}>
      <SvgButton
        // Need to pass width and height as props
        // to make jest tests work, sigh...
        // TODO find a better way to do this
        // see https://github.com/syntapy/superformula_clone/issues/31
        icon={<Chilidogmenu width={32} height={45}/>}
        alt={"Menu"}
        className={chilidog}
      />
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
      <div className={pageItemList}>
        <NavButton className={pageItem} href="/services" text="Services" />
        <NavButton className={pageItem} href="/work" text="Work" />
        <NavButton className={pageItem} href="/articles" text="Articles" />
        <NavButton className={pageItem} href="/contact" text="Contact" />
        <CareersNavButton className={pageItem} href="https://careers.superformula.com" text="Careers" />
      </div>
    </nav>
  )
}
