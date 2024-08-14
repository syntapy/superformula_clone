import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type SubNavItem = {
  icon: React.ElementType
  text: string
  leaveSite: boolean
}

interface SubNavProps {
  items: SubNavItem[]
}

function SubNav(props: SubNavProps) {
  return (
    <div>
      {props.items.map((item) => (
        <div>
          {item.icon}
          {item.text}
        </div>
      )}
    </div>
  )
}
