import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import { NavItems } from "./common"

export default function NavDesktop() {
  const root: string = styles.navbar
        + " " + orientationStyles.horizontalFlex
        + " " + desktop
  const homeItem: string = styles.homeItemDesktop
  const navItemList: string = styles.marginVerticalAuto
        + " " + orientationStyles.horizontalFlex
  const navItem: string = styles.marginVerticalAuto

  return (
    <nav className={root}>
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
      <NavItems
        id={"desktop-nav"}
        navItemListStyle={navItemList}
        navItemStyle={navItem}
      />
    </nav>
  )
}
