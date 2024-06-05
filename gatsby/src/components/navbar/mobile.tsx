import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { hidden, mobile } from "../../styles/utilities/visibility.module.css"

import { HomeNavButton, NavButton, SvgButton, CareersNavButton } from "../buttons"
import { NavProps, NavItemsList, NavItems } from "./common"

interface NavHeaderMobileProps {
  title: string
  rootHref: string
  onClick: () => void
}

function NavHeaderMobile(props: NavHeaderMobileProps) {
  const root: string = orientationStyles.horizontalFlex
      + " " + styles.navHeaderMobile
  const homeItem: string = styles.navHeaderHomeItem
  return (
    <div className={root}>
      <HomeNavButton className={homeItem} href={props.rootHref} text={props.title} />
    </div>
  )
}

interface NavMenuMobileProps {
  id: string
  onClick: () => void
  rootHref: string
  title: string
  items: NavItemsList
}

function NavMenuMobile(props: NavMenuMobileProps) {
  const root: string = orientationStyles.verticalFlex
      + " " + styles.mobileMenu
      + " " + styles.mobileMenuHidden

  const homeNavWrapper: string = orientationStyles.horizontalFlex
  const homeNavItem: string = styles.mobileNavHomeItem

  const navItem: string = styles.mobileNavItem

  return (
    <div id={props.id} className={root} >
      <SvgButton
        className={closeMenu}
        onClick={props.onClick}
        icon={<Menuclose width={40} height={40} />}
      />
      <HomeNavButton 
        dataCy="home-nav-mobile"
        className={homeNavItem}
        href={props.rootHref}
        text={props.title}
      />
      <NavButton
        dataCy="services-nav-mobile"
        className={navItem}
        href={props.items[0].href}
        text={props.items[0].text}
      />
      <NavButton
        dataCy="work-nav-mobile"
        className={navItem}
        href={props.items[1].href}
        text={props.items[1].text}
      />
      <NavButton 
        dataCy="articles-nav-mobile"
        className={navItem}
        href={props.items[2].href}
        text={props.items[2].text}
      />
      <NavButton
        dataCy="contact-nav-mobile"
        className={navItem}
        href={props.items[3].href}
        text={props.items[3].text}
      />
      <CareersNavButton 
        dataCy="careers-nav-mobile"
        className={navItem}
        href={props.items[4].href}
        text={props.items[4].text}
      />
    </div>
  )
}

export default function NavMobile(props: NavProps) {
  const [isMobileMenuOpen, setIsMenuOpen] = React.useState(false)
  const mobileMenuId: string = "mobile-menu"

  const root: string = styles.mobileMenuRoot + " " + mobile

  return (
    <nav className={root}>
      <NavHeaderMobile
        title={props.title}
        rootHref={props.rootHref}
        onClick={onChilidogClick}
      />
      <NavMenuMobile 
        title={props.title}
        rootHref={props.rootHref}
        id={mobileMenuId}
        onClick={onMenuCloseClick}
        items={props.items}
      />
    </nav>
  )
}
