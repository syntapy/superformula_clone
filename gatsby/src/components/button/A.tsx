import * as React from "react"
import { StyleProps } from "../../utils.ts"
import * as styles from "../../styles/buttons.module.css"

export default function A(props: ButtonProps & StyleProps) {
  const className: string = styles.a + " " + props.className
  return (
    <a className={className} href={props.href}>
      {props.text}
      {props.children}
    </a>
  )
}
