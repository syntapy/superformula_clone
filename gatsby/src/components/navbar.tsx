import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "./buttons"

import { isMobile, ResponsiveProps } from "../utils"

import * as styles from "../styles/navbar.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { desktop, mobile } from "../styles/utilities/visibility.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"
import Menuclose from "../images/svg/menuclose.svg"

interface NavBarItemsProps {
  id: string
  rootClassName: string
  homeItemClassName: string
  navItemClassName: string
  onClose: () => void
}

function NavBarItems(props: NavBarItemsProps) {
  const firstItem: string = styles.navbarContainer + " " + props.homeItemClassName + " " + orientationStyles.mobileB_desktopH
  return (
    <nav id={props.id} className={props.rootClassName}>
      <div className={firstItem} >
        <SvgButton
          className={styles.menuClose}
          onClick={props.onClose}
          icon={<Menuclose width={40} height={40} />}
        />
        <HomeNavButton className={styles.home} href="/" text="Superformula." />
      </div>
      <NavButton className={props.navItemClassName} href="/services" text="Services" />
      <NavButton className={props.navItemClassName} href="/work" text="Work" />
      <NavButton className={props.navItemClassName} href="/articles" text="Articles" />
      <NavButton className={props.navItemClassName} href="/contact" text="Contact" />
      <CareersNavButton 
        className={props.navItemClassName}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </nav>
  )
}

export default function NavBar(props: ResponsiveProps) {
  const initialIsMobile: boolean = props.isMobile()
  const [isMobile, setIsMobile] = React.useState(initialIsMobile)
  const [isMobileMenuOpen, setIsMenuOpen] = React.useState(false)
  const navPadding: string = styles.fixed + " " + styles.navbarContainer
  const nav: string = styles.container + " " + styles.navbar
  const homeBtn: string = styles.homeBtn

  const navItemsDesktop: string = styles.navItem + " " + styles.pageItemList
  const navItemsMobile: string = styles.navItem + " " + styles.pageItemListMobile

  const homeItem: string = styles.itemListHomeItem

  const navItemDesktop: string = styles.navItem
  const navItemMobile: string = styles.pageItem + " " + styles.navItem

  const chilidogStyle: string = styles.chilidog

  function onChilidogClick(): void {
    if (isMobile) {
      if (!isMobileMenuOpen) {
        const menu: HTMLElement | null = document.getElementById("mobile-nav")
        menu.classList.add(styles.mobileMenuOpen)
        setIsMenuOpen(true)
      }
    }
  }

  function onMenuCloseClick(): void {
    if (isMobile) {
      if (isMobileMenuOpen) {
        const menu: HTMLElement | null = document.getElementById("mobile-nav")
        menu.classList.remove(styles.mobileMenuOpen)
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <>
      <div id={"desktop-nav-wrapper"} className={navPadding}>
        <div className={nav}>
          <SvgButton
            className={chilidogStyle}
            onClick={onChilidogClick}
            icon={<Chilidogmenu width={32} height={45} />}
          />
          <HomeNavButton className={homeBtn} href="/" text="Superformula." />
          <NavBarItems
            id={"desktop-nav"}
            rootClassName={navItemsDesktop}
            homeItemClassName={homeItem}
            navItemClassName={navItemDesktop}
          />
        </div>
      </div>
      <NavBarItems 
        id={"mobile-nav"}
        rootClassName={navItemsMobile}
        homeItemClassName={homeItem}
        navItemClassName={navItemMobile}
        onClose={onMenuCloseClick}
      />
    </>
  )
}
