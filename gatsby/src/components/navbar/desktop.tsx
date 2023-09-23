import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import { graphql, useStaticQuery, HeadFC } from "gatsby"

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

function NavItems(props: NavItemsProps) {
  const navItem: string = props.navItemStyle + " " + styles.navItem
  return (
    <div className={props.navItemListStyle}>
      <NavButton className={navItem} href="/services" text="Services" />
      <NavButton className={navItem} href="/work" text="Work" />
      <NavButton className={navItem} href="/articles" text="Articles" />
      <NavButton className={navItem} href="/contact" text="Contact" />
      <CareersNavButton 
        className={navItem}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </div>
  )
}

export default function NavDesktop() {
  const root: string = styles.navbar
        + " " + orientationStyles.horizontalFlex
        + " " + desktop
  const homeItem: string = styles.homeItemDesktop
  const navItemList: string = styles.marginVerticalAuto
        + " " + orientationStyles.horizontalFlex
  const navItem: string = styles.marginVerticalAuto

  const data = useStaticQuery(graphql`
    query LandingPageQuery {
      contentfulLandingPage {
        title
        spaceId
        insight {
          a {
            title
            hashtags
          }
          b {
            title
            hashtags
          }
        }
        headerLink
        headerDescription
        header
      }
    }
  `)

  return (
    <nav className={root}>
      <HomeNavButton className={homeItem} href="/" text={data.contentfulLandingPage.title} />
      <NavItems
        id={"desktop-nav"}
        navItemListStyle={navItemList}
        navItemStyle={navItem}
      />
    </nav>
  )
}
