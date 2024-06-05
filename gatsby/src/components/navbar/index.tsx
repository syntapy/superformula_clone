import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HomeNavButton, NavButton, SvgButton, CareersNavButton } from "../buttons"
import { isMobile, ResponsiveProps } from "../../utils"
import { NavItemInfo, NavItemsProps } from "./utils"

import Chilidogmenu from "../../images/svg/chilidogmenu.svg"
import Menuclose from "../../images/svg/menuclose.svg"

import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, desktop, mobile } from "../../styles/utilities/visibility.module.css"

import NavDesktop from "./desktop"
import NavMobile from "./mobile"

interface NavItemInfo {
  href: string
  text: string
}

type NavItemsList = [NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo]

interface NavProps {
  title: string
  rootHref: string
  items: NavItemsList
}

interface NavItemsProps {
  id: string
  itemListStyle: string
  itemStyle: string
  items: NavItemsList
}

function NavItems(props: NavItemsProps) {
  const navItem: string = props.itemStyle + " " + styles.navItem
  return (
    <div className={props.itemListStyle}>
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

function NavMenu(props: NavMenuProps) {
  const closeMenu: string = styles.mobileMenuCloseBtn 
      + " " + orientationStyles.horizontalFlex

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
    <>
      <SvgButton
        className={closeMenu}
        onClick={props.onClick}
        icon={<Menuclose width={40} height={40} />}
      />
      <NavItems
        id="nav-items"
        items={props.items}
      />
    </>
  )
}

export default function NavHeader(props: ResponsiveProps) {
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
  const navIndexRoot: string = styles.navIndexRoot
      + " " + orientationStyles.horizontalFlex
  const navMobile: string = ""

  const items: NavItemInfo[] = []

  items.push({ href: servicesHref, text: servicesText })
  items.push({ href: workHref, text: workText })
  items.push({ href: articlesHref, text: articlesText })
  items.push({ href: contactHref, text: contactText })
  items.push({ href: careersHref, text: careersText })

  // Styles
  const root: string = styles.navbar
        + " " + orientationStyles.horizontalFlex
        + " " + desktop
  const homeItem: string = styles.homeItemDesktop
  const navItemList: string = styles.marginVerticalAuto
        + " " + orientationStyles.horizontalFlex
  const navItem: string = styles.marginVerticalAuto
  const chilidogStyle: string = styles.chilidog

  function onChilidogClick(): void {
    if (!isMobileMenuOpen) {
      const menu: HTMLElement | null = document.getElementById(mobileMenuId)
      menu.classList.remove(styles.mobileMenuHidden)
      menu.classList.add(styles.mobileMenuActive)
      setIsMenuOpen(true)
    }
  }

  return (
    <div id={"desktop-nav-wrapper"} className={navIndexRoot}>
      <nav className={root}>
        <HomeNavButton 
          className={homeItem}
          href={props.rootHref}
          text={props.title}
        />
        <NavMenu
          id="nav-menu"
          items={items}
        />
        <SvgButton
          className={chilidogStyle}
          onClick={onChilidogClick}
          icon={<Chilidogmenu width={32} height={45} data-cy="chilidog-svg" />}
        />
      </nav>
    </div>
  )
}
