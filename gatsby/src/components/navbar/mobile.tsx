import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, mobile } from "../../styles/utilities/visibility.module.css"

import Chilidogmenu from "../../images/svg/chilidogmenu.svg"
import Menuclose from "../../images/svg/menuclose.svg"

import { HomeNavButton, NavButton, SvgButton, CareersNavButton } from "../buttons"
import { NavItems } from "./common"

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
      <HomeNavButton className={homeItem} href="/" text="Superformula." />
      <SvgButton
        className={chilidogStyle}
        onClick={props.onClick}
        icon={<Chilidogmenu width={32} height={45} data-cy="chilidog-svg" />}
      />
    </div>
  )
}

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

interface NavMenuMobileProps {
  id: string
  onClick: () => void
}

function NavMenuMobile(props: NavMenuMobileProps) {
  const root: string = orientationStyles.verticalFlex
      + " " + styles.mobileMenu
      + " " + styles.mobileMenuHidden

  const homeNavWrapper: string = orientationStyles.horizontalFlex
  const closeMenu: string = styles.mobileMenuCloseBtn 
      + " " + orientationStyles.horizontalFlex
  const homeNavItem: string = styles.mobileNavHomeItem

  const navItem: string = styles.mobileNavItem

  return (
    <div id={props.id} className={root} >
      <SvgButton
        className={closeMenu}
        onClick={props.onClick}
        icon={<Menuclose width={40} height={40} />}
      />
      <HomeNavButton 
        dataCy="home-nav-mobile"
        className={homeNavItem}
        href="/"
        text="Superformula."
      />
      <NavButton
        dataCy="services-nav-mobile"
        className={navItem}
        href="/services"
        text="Services"
      />
      <NavButton
        dataCy="work-nav-mobile"
        className={navItem}
        href="/work"
        text="Work"
      />
      <NavButton 
        dataCy="articles-nav-mobile"
        className={navItem}
        href="/articles"
        text="Articles"
      />
      <NavButton
        dataCy="contact-nav-mobile"
        className={navItem}
        href="/contact"
        text="Contact"
      />
      <CareersNavButton 
        dataCy="careers-nav-mobile"
        className={navItem}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </div>
  )
}

export default function NavMobile() {
  const [isMobileMenuOpen, setIsMenuOpen] = React.useState(false)
  const mobileMenuId: string = "mobile-menu"

  const root: string = styles.mobileMenuRoot + " " + mobile

  function onChilidogClick(): void {
    if (!isMobileMenuOpen) {
      const menu: HTMLElement | null = document.getElementById(mobileMenuId)
      menu.classList.remove(styles.mobileMenuHidden)
      menu.classList.add(styles.mobileMenuActive)
      setIsMenuOpen(true)
    }
  }

  function onMenuCloseClick(): void {
    console.log("onMenuCloseClick")
    if (isMobileMenuOpen) {
      const menu: HTMLElement | null = document.getElementById(mobileMenuId)
      menu.classList.remove(styles.mobileMenuActive)
      menu.classList.add(styles.mobileMenuHidden)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={root}>
      <NavHeaderMobile onClick={onChilidogClick} />
      <NavMenuMobile id={mobileMenuId} onClick={onMenuCloseClick} />
    </nav>
  )
}
