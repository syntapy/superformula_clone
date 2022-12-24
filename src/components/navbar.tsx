import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import { isMobile } from "../utils"

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
  return (
    <nav id={props.id} className={props.listClassName}>
      <div className={props.homeClassName} >
        <Menuclose onClick={props.onClose} className={styles.menuClose}/>
        <HomeNavButton className={styles.home} href="/" text="Superformula." />
      </div>
      <NavButton className={props.itemClassName} href="/services" text="Services" />
      <NavButton className={props.itemClassName} href="/work" text="Work" />
      <NavButton className={props.itemClassName} href="/articles" text="Articles" />
      <NavButton className={props.itemClassName} href="/contact" text="Contact" />
      <CareersNavButton className={props.itemClassName} href="https://careers.superformula.com" text="Careers" />
    </nav>
  )
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMenuOpen] = React.useState(false)
  const navBarPadding: string = styles.navbarContainer
  const navBar: string = styles.container + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const itemListHomeItem: string = styles.itemListHomeItem
  const pageItemList: string = styles.navItem + " " + styles.pageItemList
  const pageItemListMobile: string = styles.navItem + " " + styles.pageItemListMobile
  const pageItem: string = styles.pageItem + " " + styles.navItem
  const chilidogStyle: string = styles.chilidog
  function onChilidogClick(): void {
    if (isMobile()) {
      if (!isMobileMenuOpen) {
        const menu: HTMLElement | null = document.getElementById("mobile-nav")
        menu.classList.add(styles.mobileMenuOpen)
        setIsMenuOpen(true)
      }
    }
  }

  function onMenuCloseClick(): void {
    if (isMobile()) {
      console.log("is mobile")
      if (isMobileMenuOpen) {
        console.log("mobile menu is open")
        const menu: HTMLElement | null = document.getElementById("mobile-nav")
        menu.classList.remove(styles.mobileMenuOpen)
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <>
      <div className={navBarPadding}>
        <div className={navBar}>
          <Chilidogmenu onClick={onChilidogClick} className={chilidogStyle} />
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
