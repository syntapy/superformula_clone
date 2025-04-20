import * as React from "react"
import * as buttonStyles from "../../styles/buttons.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"

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

export default function SubNavBar(props: SubNavProps) {
  if (props.subNavItems !== undefined) {
    let classContentDir: string = ""
    let classNameConnector: string = buttonStyles.dropDownConnector

    if (props.right) {
        classContentDir = buttonStyles.contentRight
        classNameConnector += " " + buttonStyles.connectorRight
    } else {
        classContentDir = buttonStyles.contentLeft
        classNameConnector += " " + buttonStyles.connectorLeft
    }

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
