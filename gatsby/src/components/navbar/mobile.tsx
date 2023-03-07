import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, mobile } from "../../styles/utilities/visibility.module.css"

import Chilidogmenu from "../../images/svg/chilidogmenu.svg"
import Menuclose from "../../images/svg/menuclose.svg"

import { HomeNavButton, NavButton, SvgButton, CareersNavButton } from "../buttons"

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

function NavItems(props: NavItemsProps) {
  const navItem: string = props.navItemStyle + " " + styles.navItem
  return (
    <div className={props.navItemListStyle}>
      <NavButton className={navItem} href="/services" text="Services" />
      <NavButton className={navItem} href="/work" text="Work" />
      <NavButton className={navItem} href="/articles" text="Articles" />
      <NavButton className={navItem} href="/contact" text="Contact" />
      <CareersNavButton 
        className={navItem}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </div>
  )
}

interface NavMenuMobileProps {
  id: string
  onClick: () => void
}

function NavMenuMobile(props: NavMenuMobileProps) {
  const root: string = orientationStyles.verticalFlex
      + " " + styles.mobileMenu
      + " " + styles.mobileMenuHidden
  const navItemList: string = styles.homeItemMobile
      + " " + orientationStyles.mobileB_desktopH

  const homeNavWrapper: string = orientationStyles.horizontalFlex
  const closeMenu: string = styles.mobileMenuCloseBtn 
      + " " + orientationStyles.horizontalFlex
  const homeNavItem: string = styles.homeNavItem

  const navItem: string = styles.mobileMenuItem
      + " " + styles.marginVerticalFixed

  return (
    <div id={props.id} className={root} >
      <div className={homeNavWrapper}>
        <SvgButton
          className={closeMenu}
          onClick={props.onClick}
          icon={<Menuclose width={40} height={40} />}
        />
        <HomeNavButton className={homeNavItem} href="/" text="Superformula." />
      </div>
      <NavButton className={navItem} href="/services"   text="Services" />
      <NavButton className={navItem} href="/work"       text="Work" />
      <NavButton className={navItem} href="/articles"   text="Articles" />
      <NavButton className={navItem} href="/contact"    text="Contact" />
      <CareersNavButton 
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
      console.log("isMobileMenuOpen")
      const menu: HTMLElement | null = document.getElementById(mobileMenuId)
      menu.classList.remove(styles.mobileMenuActive)
      menu.classList.add(styles.mobileMenuHidden)
      setIsMenuOpen(false)
    }
  }

  const root: string = styles.mobileNavRoot + " " + mobile

  return (
    <nav className={root}>
      <NavHeaderMobile onClick={onChilidogClick} />
      <NavMenuMobile id={mobileMenuId} onClick={onMenuCloseClick} />
    </nav>
  )
}
