import * as React from "react"
import type { ButtonProps } from './types.ts'
import * as styles from "../../styles/buttons.module.css"

import { ButtonArrow } from './index.ts'

export default function ButtonLight(props: ButtonProps) {
  const className: string = styles.buttonLight + " " + props.className
  return (
    <ButtonArrow className={className} href={props.href} text={props.text} />
  )
}
