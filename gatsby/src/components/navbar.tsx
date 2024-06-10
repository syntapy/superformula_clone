import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HomeNavButton, NavButton, SvgButton, CareersNavButton } from "./buttons"
import { isMobile, ResponsiveProps } from "../utils"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"
import Menuclose from "../images/svg/menuclose.svg"

import * as stylesMobile from "../styles/navbar/mobile.module.css"
import * as stylesDesktop from "../styles/navbar/desktop.module.css"
import * as styles from "../styles/navbar/common.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { hidden, desktop, mobile } from "../styles/utilities/visibility.module.css"

import NavDesktop from "./desktop"
import NavMobile from "./mobile"

interface NavItemInfo {
  href: string
  text: string
}

type NavItemsList = [NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo]

interface NavItemsProps {
  menuId: string
  items: NavItemsList
}

interface ResponsiveProps {
  mobileMenuActive: boolean
  setMobileMenuActive: () => void
}

type ResponsiveNavItemsProps = NavItemsProps | ResponsiveProps

function NavItems(props: ResponsiveNavItemsProps) {
  const closeBtnStyle: string = stylesMobile.closeBtn
  const itemListStyle: string = stylesMobile.mobileMenu
      + " " + stylesMobile.menuHidden
      + " " + orientationStyles.mobileV_desktopH
  const navItem: string = stylesMobile.mobileNavItem

  function onMenuCloseClick(): void {
    const menu: HTMLElement | null = document.getElementById(props.menuId)
    if (menu || !!menu) {
      menu.classList.remove(stylesMobile.menuActive)
      menu.classList.add(stylesMobile.menuHidden)
      props.setMobileMenuActive(false)
    }
  }

  if (!props.mobileMenuActive) {
    onMenuCloseClick()
  }

  return (
    <div id={props.menuId} className={itemListStyle}>
      <SvgButton
        className={closeBtnStyle}
        onClick={onMenuCloseClick}
        icon={<Menuclose width={40} height={40} />}
      />
      <NavButton className={navItem} href={props.items[0].href} text={props.items[0].text} />
      <NavButton className={navItem} href={props.items[1].href} text={props.items[1].text} />
      <NavButton className={navItem} href={props.items[2].href} text={props.items[2].text} />
      <NavButton className={navItem} href={props.items[3].href} text={props.items[3].text} />
      <CareersNavButton 
        className={navItem}
        href={props.items[4].href}
        text={props.items[4].text}
      />
    </div>
  )
}

function NavMenu(props: ResponsiveNavItemsProps) {
  const closeBtnStyle: string = stylesMobile.mobileMenuCloseBtn 
      + " " + mobile
      + " " + orientationStyles.horizontalFlex
  const navItemsStyle: string = orientationStyles.mobileV_desktopH

  return (
    <NavItems
      menuId={props.menuId}
      className={navItemsStyle}
      items={props.items}
      mobileMenuActive={props.mobileMenuActive}
      setMobileMenuActive={props.setMobileMenuActive}
    />
  )
}

export default function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false)
  const data = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          title
        }
        allContentfulSection(
          sort: {sort_id: ASC}
          filter: {sort_id: {in: [5, 9, 10, 11, 12]}}
        ) {
          nodes {
            linkHref
            linkText
            title
          }
        }
      }
    `)

  const title: string = data.contentfulLandingPage.title
  const servicesHref: string = data.allContentfulSection.nodes[0].linkHref
  const servicesText: string = data.allContentfulSection.nodes[0].title
  const workHref: string = data.allContentfulSection.nodes[1].linkHref
  const workText: string = data.allContentfulSection.nodes[1].linkText
  const articlesHref: string = data.allContentfulSection.nodes[2].linkHref
  const articlesText: string = data.allContentfulSection.nodes[2].linkText
  const contactHref: string = data.allContentfulSection.nodes[3].linkHref
  const contactText: string = data.allContentfulSection.nodes[3].linkText
  const careersHref: string = data.allContentfulSection.nodes[4].linkHref
  const careersText: string = data.allContentfulSection.nodes[4].linkText
  const navMobile: string = ""

  const items: NavItemInfo[] = []

  items.push({ href: servicesHref, text: servicesText })
  items.push({ href: workHref, text: workText })
  items.push({ href: articlesHref, text: articlesText })
  items.push({ href: contactHref, text: contactText })
  items.push({ href: careersHref, text: careersText })

  // Styles
  const navbarStyle: string = styles.navbar
        + " " + stylesDesktop.navbar 
        + " " + stylesMobile.navbar
  const homeItem: string = stylesDesktop.homeItemDesktop
  const navItemList: string = stylesDesktop.marginVerticalAuto
        + " " + orientationStyles.horizontalFlex
  const navItem: string = stylesDesktop.marginVerticalAuto
  const chilidogStyle: string = stylesMobile.chilidog + " " + mobile
  const menuId: string = "nav-menu"

  function onChilidogClick(): void {
    if (!mobileMenuActive) {
      const menu: HTMLElement | null = document.getElementById(menuId)
      if (menu || !!menu) {
        menu.classList.remove(stylesMobile.menuHidden)
        menu.classList.add(stylesMobile.menuActive)
        setMobileMenuActive(true)
      }
    }
  }

  return (
    <nav className={navbarStyle}>
      <HomeNavButton 
        className={homeItem}
        href="/"
        text={title}
      />
      <NavMenu
        menuId={menuId}
        mobileMenuActive={mobileMenuActive}
        setMobileMenuActive={setMobileMenuActive}
        items={items}
      />
      <SvgButton
        className={chilidogStyle}
        onClick={onChilidogClick}
        icon={<Chilidogmenu width={32} height={45} data-cy="chilidog-svg" />}
      />
    </nav>
  )
}