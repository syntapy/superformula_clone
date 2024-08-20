import * as React from "react"
import * as buttonStyles from "../styles/buttons.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { useStaticQuery, graphql } from "gatsby"

export type SubNavItem = {
  icon: React.ElementType
  text: string
  leaveSite: boolean
}

export interface SubNavProps {
  subNavItems?: SubNavItem[]
}

export function SubNavBar(props: SubNavProps) {
  if (props.subNavItems !== undefined) {
    const classNameContainer = buttonStyles.subNavContainer
    const classNameSubNav = buttonStyles.subNav + " " + orientationStyles.verticalFlex + " " + orientationStyles.spaceBetweenItems
    return (
      <div className={classNameContainer}>
        <ul className={classNameSubNav}>
        {props.subNavItems.map((item) => (
          <div className={buttonStyles.subNavItem}>{item.icon}{item.text}</div>
        ))}
        </ul>
      </div>
    )
  }
}
