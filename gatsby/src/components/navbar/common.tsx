import * as React from "react"
import { NavButton, CareersNavButton } from "../buttons"

interface NavItemsProps {
  id: string
  navItemListStyle: string
  navItemStyle: string
}

export default function NavItems(props: NavItemsProps) {
  return (
    <div className={props.navItemListStyle}>
      <NavButton className={props.navItemStyle} href="/services" text="Services" />
      <NavButton className={props.navItemStyle} href="/work" text="Work" />
      <NavButton className={props.navItemStyle} href="/articles" text="Articles" />
      <NavButton className={props.navItemStyle} href="/contact" text="Contact" />
      <CareersNavButton 
        className={props.navItemStyle}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </div>
  )
}

