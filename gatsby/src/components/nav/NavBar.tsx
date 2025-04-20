import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getNavBarData } from "./graphql.ts"

import { HomeNavButton, SvgButton } from "../button/index.ts"

import NavItems from "./NavItems.tsx"

// Menu Icons
import Chilidogmenu from "../../images/svg/chilidogmenu.svg"

import * as stylesMobile from "../../styles/navbar/mobile.module.css"
import * as stylesDesktop from "../../styles/navbar/desktop.module.css"
import * as styles from "../../styles/navbar/common.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { mobile } from "../../styles/utilities/visibility.module.css"

export default function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false)
  const [menuElement, setMenuElement] = React.useState(null)
  const data = getNavBarData()
  const items = data.items
  const title = data.title

  // Styles
  const navStyle: string = styles.navbar
      + " " + stylesMobile.navbar

  const navItemsStyle: string = stylesDesktop.navItems
      + " " + stylesMobile.navItems
      + " " + stylesMobile.navItemsHidden
      + " " + orientationStyles.mobileV_desktopH
  const chilidogStyle: string = stylesMobile.chilidog + " " + mobile
  const menuId: string = "nav-menu"

  let menu: HTMLElement | null = null

  React.useEffect(() => {
    menu = document.getElementById(menuId)
  })

  function onChilidogClick(): void {
    if (!!menu) {
      if (!mobileMenuActive) {
        menu.classList.remove(stylesMobile.navItemsHidden)
        menu.classList.add(stylesMobile.navItemsActive)
        setMobileMenuActive(true)
      }
    }
  }

  return (
    <nav className={navStyle}>
      <HomeNavButton text={title}/>
      <NavItems
        className={navItemsStyle}
        menuId={menuId}
        title={title}
        items={items}
        mobileMenuActive={mobileMenuActive}
        setMobileMenuActive={setMobileMenuActive}
      />
      <SvgButton
        className={chilidogStyle}
        onClick={onChilidogClick}
        aria-label="Open Navbar"
        title="Open Navbar"
        icon={<Chilidogmenu width={32} height={45} data-cy="chilidog-svg" />}
      />
    </nav>
  )
}
