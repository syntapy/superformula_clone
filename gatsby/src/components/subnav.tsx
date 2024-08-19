import * as React from "react"
import * as buttonStyles from "../styles/buttons.module.css"
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
    return (
      <div className={buttonStyles.subNav}>
        {props.subNavItems.map((item) => (
          <div>{item.icon}{item.text}</div>
        ))}
      </div>
    )
  }
}
