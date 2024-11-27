import * as React from "react"
import * as buttonStyles from "../styles/buttons.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { useStaticQuery, graphql } from "gatsby"

export type SubNavItem = {
  icon: React.ElementType
  text: string
  leaveSite: boolean
  url: string
}

export interface SubNavProps {
  subNavItems?: SubNavItem[]
  right?: boolean
}

export function SubNavBar(props: SubNavProps) {
  if (props.subNavItems !== undefined) {
    let classNameDir: string = ""
    let classContentDir: string = ""

    if (props.right) {
        classNameDir = buttonStyles.right
        classContentDir = buttonStyles.rightContent
    } else {
        classNameDir = buttonStyles.left
        classContentDir = buttonStyles.leftContent
    }

    const classNameConnector: string = buttonStyles.dropDownConnector + " " + classNameDir
    const classNameContent: string = buttonStyles.dropDownContent + " " + orientationStyles.spaceBetweenItems + " " + classContentDir
    const classNameSubNavListItem: string = buttonStyles.subNavListItem
    const classNameSubNavItemAnchor: string = buttonStyles.subNavItemAnchor + " " + orientationStyles.horizontalFlex
    const classNameSubNavItemElement: string = buttonStyles.subNavItemElement

    return (
      <div className={classNameConnector}>
        <ul className={classNameContent}>
          {props.subNavItems.map((item) => (
            <li>
              <a href={item.url} className={classNameSubNavItemAnchor}>
                {item.icon}
                <span className={classNameSubNavItemElement}>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
