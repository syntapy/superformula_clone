import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"

import { isMobile, ResponsiveProps } from "../../utils"

import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, desktop, mobile } from "../../styles/utilities/visibility.module.css"

import NavItems from "./common"

import NavMenuDesktop from "./desktop"
import NavMenuMobile from "./mobile"

export default function NavBar(props: ResponsiveProps) {
  const navPadding: string = styles.fixed
      + " " + styles.navbarContainer
      + " " + orientationStyles.horizontalFlex
  const navMobile: string = ""

  return (
    <div>
      <div id={"desktop-nav-wrapper"} className={navPadding}>
        <NavMenuDesktop />
        <NavMenuMobile />
      </div>
    </div>
  )
}
