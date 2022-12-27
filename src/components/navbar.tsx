import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "./buttons"

import { isMobile, ResponsiveProps } from "../utils"

import * as styles from "../styles/navbar.module.css"
import * as utilStyles from "../styles/utils.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"
import Menuclose from "../images/svg/menuclose.svg"

interface NavBarItemsProps {
  id: string
  listClassName: string
  homeClassName: string
  itemClassName: string
  onClose: () => void
}

function NavBarItems(props: NavBarItemsProps) {
  const firstItem: string = styles.navbarContainer + " " + props.homeClassName
  return (
    <nav id={props.id} className={props.listClassName}>
      <div className={firstItem} >
        <SvgButton
          className={styles.menuClose}
          onClick={props.onClose}
          icon={<Menuclose width={40} height={40} />}
        />
        <HomeNavButton className={styles.home} href="/" text="Superformula." />
      </div>
      <NavButton className={props.itemClassName} href="/services" text="Services" />
      <NavButton className={props.itemClassName} href="/work" text="Work" />
      <NavButton className={props.itemClassName} href="/articles" text="Articles" />
      <NavButton className={props.itemClassName} href="/contact" text="Contact" />
      <CareersNavButton 
        className={props.itemClassName}
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
  const navBarPadding: string = styles.fixed + " " + styles.navbarContainer
  const navBar: string = styles.container + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const itemListHomeItem: string = styles.itemListHomeItem
  const pageItemList: string = styles.navItem + " " + styles.pageItemList
  const pageItemListMobile: string = styles.navItem + " " + styles.pageItemListMobile
  const pageItem: string = styles.pageItem + " " + styles.navItem
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
      <div id={"desktop-nav-wrapper"} className={navBarPadding}>
        <div className={navBar}>
          <SvgButton
            className={chilidogStyle}
            onClick={onChilidogClick}
            icon={<Chilidogmenu width={32} height={45} />}
          />
          <HomeNavButton className={homeItem} href="/" text="Superformula." />
          <NavBarItems
            id={"desktop-nav"}
            listClassName={pageItemList}
            homeClassName={itemListHomeItem}
            itemClassName={styles.navItem}
          />
        </div>
      </div>
      <NavBarItems 
        id={"mobile-nav"}
        listClassName={pageItemListMobile}
        homeClassName={itemListHomeItem}
        itemClassName={pageItem}
        onClose={onMenuCloseClick}
      />
    </>
  )
}
