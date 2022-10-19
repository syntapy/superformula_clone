import * as React from "react"
import type { HeadFC } from "gatsby"

interface NavButtonProps {
  href: string
  text: string
}

export function NavButton(props: NavButtonProps) {
  return (
    <button
      href={props.href}
    >
      {props.text}
    </button>
  )
}
