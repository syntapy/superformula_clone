import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HomeNavButton, NavButton, NavButtonMobile, SvgButton, CareersNavButton } from "./buttons"
import { isMobile, ResponsiveProps } from "../utils"

import Chilidogmenu from "../images/svg/chilidogmenu.svg"
import Menuclose from "../images/svg/menuclose.svg"

import { StyleProps } from "../utils"

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
  title: string
  items: NavItemsList
}

interface ResponsiveProps {
  mobileMenuActive: boolean
  setMobileMenuActive: () => void
}

type ResponsiveNavItemsProps = NavItemsProps | ResponsiveProps

function NavItems(props: ResponsiveNavItemsProps | StyleProps) {
  const closeBtnStyle: string = stylesMobile.closeBtn
  const homeNavItemStyle: string = stylesDesktop.navItemsHomeNav
  const navItem: string = stylesMobile.mobileNavItem

  function onMenuCloseClick(): void {
    const menu: HTMLElement | null = document.getElementById(props.menuId)
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
        icon={<Menuclose width={40} height={40} />}
      />
      <HomeNavButton 
        dataCy="home-nav-item"
        className={homeNavItemStyle} text={props.title}
      />
      <NavButtonMobile
        dataCy="services-nav-item"
        className={navItem} href={props.items[0].href} text={props.items[0].text} 
      />
      <NavButtonMobile
        dataCy="work-nav-item"
        className={navItem} href={props.items[1].href} text={props.items[1].text}
      />
      <NavButton
        dataCy="articles-nav-item"
        className={navItem} href={props.items[2].href} text={props.items[2].text}
      />
      <NavButton
        dataCy="contact-nav-item"
        className={navItem} href={props.items[3].href} text={props.items[3].text}
      />
      <CareersNavButton 
        dataCy="careers-nav-item"
        className={navItem} href={props.items[4].href} text={props.items[4].text}
      />
    </div>
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

  items.push({ href: workHref, text: workText })
  items.push({ href: servicesHref, text: servicesText })
  items.push({ href: articlesHref, text: articlesText })
  items.push({ href: contactHref, text: contactText })
  items.push({ href: careersHref, text: careersText })

  // Styles
  const navStyle: string = styles.navbar
      + " " + stylesMobile.navbar

  const navItemsStyle: string = stylesDesktop.navItems
      + " " + stylesMobile.navItems
      + " " + stylesMobile.navItemsHidden
      + " " + orientationStyles.mobileV_desktopH
  const chilidogStyle: string = stylesMobile.chilidog + " " + mobile
  const menuId: string = "nav-menu"

  function onChilidogClick(): void {
    if (!mobileMenuActive) {
      const menu: HTMLElement | null = document.getElementById(menuId)
      if (menu || !!menu) {
        menu.classList.remove(stylesMobile.navItemsHidden)
        menu.classList.add(stylesMobile.navItemsActive)
        setMobileMenuActive(true)
      }
    }
  }

  return (
    <nav className={navStyle}>
      <HomeNavButton 
        text={title}
      />
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
