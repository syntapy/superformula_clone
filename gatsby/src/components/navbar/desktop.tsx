import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import NavItems from "./common"

export default function NavMenuDesktop() {
  const desktopRoot: string = styles.desktopRoot
        + " " + styles.navbar
        + " " + orientationStyles.horizontalFlex
        + " " + desktop
  const homeItemDesktop: string = styles.homeBtn
  const navItemListStyle: string = styles.marginVerticalAuto + " " + orientationStyles.horizontalFlex
  const homeItem: string = styles.homeItem
  const navItemDesktop: string = styles.marginVerticalAuto

  return (
    <div className={desktopRoot}>
      <HomeNavButton className={homeItemDesktop} href="/" text="Superformula." />
      <NavItems
        id={"desktop-nav"}
        navItemListStyle={navItemListStyle}
        navItemStyle={navItemDesktop}
      />
      <hr className={styles.hr} />
    </div>
  )
}
