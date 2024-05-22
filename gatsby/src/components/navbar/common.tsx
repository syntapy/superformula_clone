import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import { NavButton, CareersNavButton } from "../buttons"

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

export const data = graphql`
  query navbar($id: String) {
    allContentfulSection(sort: {sort_id: ASC}) {
      nodes {
        sort_id
        linkHref
        linkText
      }
    }
  }`

//export default function NavItems(props: NavItemsProps) {
//  const data = useStaticQuery(
//    graphql`
//      query {
//        navbar {
//          allContentfulSection(sort: {sort_id: ASC}) {
//            nodes {
//              sort_id
//              linkHref
//              linkText
//            }
//          }
//        }
//      }`
//  )
//  const servicesHref: string = data.allContentfulSection.nodes[5].linkHref
//  const servicesText: string = data.allContentfulSection.nodes[5].title
//  const workHref: string = data.allContentfulSection.nodes[9].linkHref
//  const workText: string = data.allContentfulSection.nodes[9].linkText
//  const articlesHref: string = data.allContentfulSection.nodes[10].linkHref
//  const articlesText: string = data.allContentfulSection.nodes[10].linkText
//  const contactHref: string = data.allContentfulSection.nodes[11].linkHref
//  const contactText: string = data.allContentfulSection.nodes[11].linkText
//  const careersHref: string = data.allContentfulSection.nodes[12].linkHref
//  const careersText: string = data.allContentfulSection.nodes[12].linkText
//
//  const navItem: string = props.navItemStyle + " " + styles.navItem
//  return (
//    <div className={props.navItemListStyle}>
//      <NavButton className={navItem} href={servicesHref} text={servicesText} />
//      <NavButton className={navItem} href={workHref} text={workText} />
//      <NavButton className={navItem} href={articlesHref} text={articlesText} />
//      <NavButton className={navItem} href={contactHref} text={contactText} />
//      <CareersNavButton 
//        className={navItem}
//        href={careersHref}
//        text={careersText}
//      />
//    </div>
//  )
//}

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
