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
    const classNameConnector = buttonStyles.subNavConnector
    const classNameSubNavUl = buttonStyles.subNavUl + " " + orientationStyles.verticalFlex + " " + orientationStyles.spaceBetweenItems
    const classNameSubNavRow: string = buttonStyles.subNavItem + " " + orientationStyles.horizontalFlex
    return (
      <div className={classNameConnector}>
        <ul className={classNameSubNavUl}>
        {props.subNavItems.map((item) => (
          <div className={classNameSubNavRow}>{item.icon}<span>{item.text}</span></div>
        ))}
        </ul>
      </div>
    )
  }
}
