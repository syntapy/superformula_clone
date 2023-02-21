import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, mobile } from "../../styles/utilities/visibility.module.css"

import Chilidogmenu from "../../images/svg/chilidogmenu.svg"
import Menuclose from "../../images/svg/menuclose.svg"
import NavItems from "./common"

import { HomeNavButton, SvgButton } from "../buttons"

interface NavHeaderMobileProps {
  onClick: () => void
}

function NavHeaderMobile(props: NavHeaderMobileProps) {
  const root: string = orientationStyles.horizontalFlex
      + " " + styles.navHeaderMobile
  const chilidogStyle: string = styles.chilidog
  const homeItem: string = styles.navHeaderHomeItem
  return (
    <div className={root}>
      <SvgButton
        className={chilidogStyle}
        onClick={props.onClick}
        icon={<Chilidogmenu width={32} height={45} />}
      />
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
    </div>
  )
}

interface NavMenuMobileOpenedProps {
  onClick: () => void
}

function NavMenuMobileOpened(props: NavMenuMobileOpenedProps) {
  const root: string = styles.marginVerticalFixed
      + " " + orientationStyles.verticalFlex
      + " " + styles.navMenuMobileOpened
  const navItemList: string = styles.navbarContainer
      + " " + styles.homeItemMobile
      + " " + orientationStyles.mobileB_desktopH
  const menuClose: string = styles.mobileMenuClose
  const navItem: string = styles.navItemMobile
      + " " + styles.marginVerticalFixed

  return (
    <div className={root} >
      <SvgButton
        className={menuClose}
        onClick={props.onClick}
        icon={<Menuclose width={40} height={40} />}
      />
      <NavItems
        navItemListStyle={navItemList}
        navItemStyle={navItem}
      />
    </div>
  )
}

export default function NavMenuMobile() {
  const [isMobileMenuOpen, setIsMenuOpen] = React.useState(false)

  function onChilidogClick(): void {
    if (!isMobileMenuOpen) {
      const menu: HTMLElement | null = document.getElementById("mobile-nav")
      //menu.classList.remove(hidden)
      //menu.classList.add(styles.mobileMenuOpen)
      setIsMenuOpen(true)
    }
  }

  function onMenuCloseClick(): void {
    if (isMobileMenuOpen) {
      const menu: HTMLElement | null = document.getElementById("mobile-nav")
      //menu.classList.add(hidden)
      //menu.classList.remove(styles.mobileMenuOpen)
      setIsMenuOpen(false)
    }
  }

  const root: string = styles.mobileNavRoot + " " + mobile

  return (
    <nav id={"mobile-nav"} className={root}>
      <NavHeaderMobile onClick={onChilidogClick} />
      <NavMenuMobileOpened onClick={onMenuCloseClick} />
    </nav>
  )
}
