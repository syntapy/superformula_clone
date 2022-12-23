import * as React from "react"
import { HomeNavButton, NavButton, CareersNavButton } from "./buttons"

import * as styles from "../styles/navbar.module.css"
import * as utilStyles from "../styles/utils.module.css"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"

interface NavbarItemsProps {
  listClassName: string
  homeClassName: string
  itemClassName: string
}

function NavBarItems(props: NavbarItemsProps) {
  return (
    <nav className={props.listClassName}>
      <HomeNavButton className={props.homeClassName} href="/" text="Superformula." />
      <NavButton className={props.itemClassName} href="/services" text="Services" />
      <NavButton className={props.itemClassName} href="/work" text="Work" />
      <NavButton className={props.itemClassName} href="/articles" text="Articles" />
      <NavButton className={props.itemClassName} href="/contact" text="Contact" />
      <CareersNavButton className={props.itemClassName} href="https://careers.superformula.com" text="Careers" />
    </nav>
  )
}

export default function NavBar() {
  const navBarPadding: string = styles.navbarContainer
  const navBar: string = styles.container + " " + styles.navbar
  const homeItem: string = styles.homeItem
  const itemListHomeItem: string = styles.itemListHomeItem
  const pageItemList: string = styles.navItem + " " + styles.pageItemList
  const pageItemListMobile: string = styles.navItem + " " + styles.pageItemListMobile
  const pageItem: string = styles.pageItem + " " + styles.navItem
  const chilidogStyle: string = styles.chilidog
  function onChilidogClick() {
    console.log("Chilidog clicked")
  }
  return (
    <>
      <div className={navBarPadding}>
        <div className={navBar}>
          <Chilidogmenu onClick={onChilidogClick} className={chilidogStyle} />
          <HomeNavButton className={homeItem} href="/" text="Superformula." />
          <NavBarItems listClassName={pageItemList} homeClassName={itemListHomeItem} itemClassName={styles.navItem} />
        </div>
      </div>
      <NavBarItems listClassName={pageItemListMobile} homeClassName={itemListHomeItem} itemClassName={pageItem} />
    </>
  )
}
