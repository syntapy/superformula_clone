import * as React from "react"
import type { HeadFC } from "gatsby"

import NavBar from "../components/navbar"
import { ResponsiveProps } from "../utils"

export default function Header(props: ResponsiveProps) {
  return (
    <header>
      <NavBar isMobile={props.isMobile} />
    </header>
  )
}
