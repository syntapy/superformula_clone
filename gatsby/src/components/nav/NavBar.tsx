import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HomeNavButton, SvgButton } from "../button/index.ts"

import type { NavItemInfo } from "./types"
import NavItems from "./NavItems.tsx"

// Menu Icons
import Chilidogmenu from "../../images/svg/chilidogmenu.svg"

import * as stylesMobile from "../../styles/navbar/mobile.module.css"
import * as stylesDesktop from "../../styles/navbar/desktop.module.css"
import * as styles from "../../styles/navbar/common.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { mobile } from "../../styles/utilities/visibility.module.css"

export default function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false)
  const [menuElement, setMenuElement] = React.useState(null)
  const data = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          title
        }
        allContentfulSection(
          sort: {sort_id: ASC}
          filter: {sort_id: {in: [5, 9, 10, 11, 12, 13]}}
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
  const aboutHref: string = data.allContentfulSection.nodes[5].linkHref
  const aboutText: string = data.allContentfulSection.nodes[5].linkText
  const navMobile: string = ""

  const items: NavItemInfo[] = []

  items.push({ href: workHref, text: workText })
  items.push({ href: servicesHref, text: servicesText })
  items.push({ href: articlesHref, text: articlesText })
  items.push({ href: contactHref, text: contactText })
  items.push({ href: careersHref, text: careersText })
  items.push({ href: aboutHref, text: aboutText })

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
    // omfg !!!
    try {
      document
    } catch(error) {
      console.error("Document undefined in NavBar component's `onChilidogClick` function")

      return
    }

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
      <HomeNavButton text={title}/>
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
