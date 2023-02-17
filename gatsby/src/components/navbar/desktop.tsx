import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import NavItems from "./common"

export default function NavMenuDesktop() {
  const navDesktop: string = styles.container + " " + styles.navbar + " " + orientationStyles.horizontalFlex + " " + desktop
  const homeBtnDesktop: string = styles.homeBtn
  const rootDesktop: string = styles.navItem + " " + orientationStyles.horizontalFlex
  const homeItem: string = styles.homeItem
  const navItemDesktop: string = styles.navItem

  return (
    <>
      <div className={navDesktop}>
        <HomeNavButton className={homeBtnDesktop} href="/" text="Superformula." />
        <NavItems
          id={"desktop-nav"}
          rootClassName={rootDesktop}
          homeItemClassName={homeItem}
          navItemClassName={navItemDesktop}
        />
      </div>
    </>
  )
}

