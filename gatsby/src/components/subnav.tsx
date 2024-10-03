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
    const classNameContent = buttonStyles.dropDownContent + " " + orientationStyles.spaceBetweenItems + " " + classContentDir
    const classNameSubNavRow: string = buttonStyles.subNavItem + " " + orientationStyles.horizontalFlex

    return (
      <div className={classNameConnector}>
        <ul className={classNameContent}>
        {props.subNavItems.map((item) => (
          <a href={item.url} className={classNameSubNavRow}>{item.icon}<span>{item.text}</span></a>
        ))}
        </ul>
      </div>
    )
  }
}
