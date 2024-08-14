import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type SubNavItem = {
  icon: React.ElementType
  text: string
  leaveSite: boolean
}

export interface SubNavProps {
  subNavItems?: SubNavItem[]
}

function SubNavBar(props: SubNavProps) {
  return (
    <div>
      {props.subNavItems.map((item) => (
        <div>
          {item.icon}
          {item.text}
        </div>
      ))}
    </div>
  )
}
