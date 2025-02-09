import type { ButtonProps } from './types.ts'
import * as styles from "../styles/buttons.module.css"

import { ButtonArrow } from './index.ts'

export default function ButtonDark(props: ButtonProps) {
  const className: string = styles.buttonDark + " " + props.className
  return (
    <ButtonArrow className={className} href={props.href} text={props.text} />
  )
}
