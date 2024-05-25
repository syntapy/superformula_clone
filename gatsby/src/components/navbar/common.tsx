import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "../../styles/navbar.module.css"
import { NavButton, CareersNavButton } from "../buttons"

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

export function NavItems(props: NavItemsProps) {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulSection(sort: {sort_id: ASC}) {
          nodes {
            sort_id
            linkHref
            linkText
          }
        }
      }
    `)
  const servicesHref: string = data.allContentfulSection.nodes[5].linkHref
  const servicesText: string = data.allContentfulSection.nodes[5].title
  const workHref: string = data.allContentfulSection.nodes[9].linkHref
  const workText: string = data.allContentfulSection.nodes[9].linkText
  const articlesHref: string = data.allContentfulSection.nodes[10].linkHref
  const articlesText: string = data.allContentfulSection.nodes[10].linkText
  const contactHref: string = data.allContentfulSection.nodes[11].linkHref
  const contactText: string = data.allContentfulSection.nodes[11].linkText
  const careersHref: string = data.allContentfulSection.nodes[12].linkHref
  const careersText: string = data.allContentfulSection.nodes[12].linkText

  const navItem: string = props.navItemStyle + " " + styles.navItem
  return (
    <div className={props.navItemListStyle}>
      <NavButton className={navItem} href={servicesHref} text={servicesText} />
      <NavButton className={navItem} href={workHref} text={workText} />
      <NavButton className={navItem} href={articlesHref} text={articlesText} />
      <NavButton className={navItem} href={contactHref} text={contactText} />
      <CareersNavButton 
        className={navItem}
        href={careersHref}
        text={careersText}
      />
    </div>
  )
}
