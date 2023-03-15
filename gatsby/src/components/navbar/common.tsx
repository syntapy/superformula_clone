import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import { NavButton, CareersNavButton } from "../buttons"

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

export default function NavItems(props: NavItemsProps) {
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
