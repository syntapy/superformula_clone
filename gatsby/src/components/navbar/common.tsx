import * as React from "react"
import { NavButton, CareersNavButton } from "../buttons"

interface NavItemsProps {
  id: string
  rootClassName: string
  navItemClassName: string
}

export default function NavItems(props: NavItemsProps) {
  return (
    <div className={props.rootClassName}>
      <NavButton className={props.navItemClassName} href="/services" text="Services" />
      <NavButton className={props.navItemClassName} href="/work" text="Work" />
      <NavButton className={props.navItemClassName} href="/articles" text="Articles" />
      <NavButton className={props.navItemClassName} href="/contact" text="Contact" />
      <CareersNavButton 
        className={props.navItemClassName}
        href="https://careers.superformula.com"
        text="Careers"
      />
    </div>
  )
}

