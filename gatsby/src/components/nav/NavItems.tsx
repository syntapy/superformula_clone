import * as React from "react"
import * as stylesMobile from "../../styles/navbar/mobile.module.css"
import * as stylesDesktop from "../../styles/navbar/desktop.module.css"
import { hidden, desktop, mobile } from "../../styles/utilities/visibility.module.css"

import { HomeNavButton, NavButton, SvgButton } from "../button/index.ts"
import { HorizontalRule } from "../hr.tsx"

import ServicesNavButton from "./ServicesNavButton"
import AboutNavButton from "./AboutNavButton"
import type { NavItemInfo } from "./types.ts"

import Menuclose from "../../images/svg/menuclose.svg"

type NavItemsList = [NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo]

interface NavItemsProps {
  menuId: string
  title: string
  items: NavItemsList
}

interface ResponsiveProps {
  mobileMenuActive: boolean
  setMobileMenuActive: () => void
}

type ResponsiveNavItemsProps = NavItemsProps | ResponsiveProps

export default function NavItems(props: ResponsiveNavItemsProps | StyleProps) {
  const closeBtnStyle: string = stylesMobile.closeBtn
  const homeNavItemStyle: string = stylesDesktop.navItemsHomeNav
  const navItem: string = stylesMobile.mobileNavItem

  let menu: HTMLElement | null = null

  React.useEffect(() => {
    menu = document.getElementById(props.menuId)
  })

  function onMenuCloseClick(): void {
    if (menu || !!menu) {
      menu.classList.remove(stylesMobile.navItemsActive)
      menu.classList.add(stylesMobile.navItemsHidden)
      props.setMobileMenuActive(false)
    }
  }

  if (!props.mobileMenuActive) {
    onMenuCloseClick()
  }

  return (
    <div id={props.menuId} className={props.className}>
      <SvgButton
        className={closeBtnStyle}
        onClick={onMenuCloseClick}
        aria-label="Close Navbar"
        title="Close Navbar"
        icon={<Menuclose width={40} height={40} data-cy="mobile-menu-close"/>}
      />
      <HomeNavButton 
        dataCy="home-nav-item"
        className={homeNavItemStyle} text={props.title}
      />
      <NavButton
        dataCy="work-nav-item"
        className={navItem} href={props.items[0].href} text={props.items[0].text} 
      />
      <HorizontalRule className={mobile} />
      <ServicesNavButton
        dataCy="services-nav-item"
        className={navItem} href={props.items[1].href} text={props.items[1].text}
      />
      <HorizontalRule className={mobile} />
      <NavButton
        dataCy="articles-nav-item"
        className={navItem} href={props.items[2].href} text={props.items[2].text}
      />
      <HorizontalRule className={mobile} />
      <AboutNavButton
        dataCy="about-nav-item"
        className={navItem} href={props.items[5].href} text={props.items[5].text}
      />
      <NavButton
        dataCy="contact-nav-item"
        className={navItem + " " + desktop}
        href={props.items[3].href}
        text={props.items[3].text}
      />
    </div>
  )
}
