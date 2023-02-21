import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import NavItems from "./common"

export default function NavMenuDesktop() {
  const root: string = styles.desktopRoot
        + " " + styles.navbar
        + " " + orientationStyles.horizontalFlex
        + " " + desktop
  const homeItem: string = styles.homeBtn
  const navItemList: string = styles.marginVerticalAuto + " " + orientationStyles.horizontalFlex
  const homeItem: string = styles.homeItem
  const navItem: string = styles.marginVerticalAuto

  return (
    <div className={root}>
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
      <NavItems
        id={"desktop-nav"}
        navItemListStyle={navItemList}
        navItemStyle={navItem}
      />
      <hr className={styles.hr} />
    </div>
  )
}
