import type { ButtonProps } from './types.ts'
import { StyleProps } from "../../utils"
import * as styles from "../../styles/buttons.module.css"
import { A } from './index.ts'

export default function ButtonArrow(props: ButtonProps & StyleProps) {
  const className: string = styles.buttonArrow + " " + props.className
  return (
    <div className={className}>
      <A className={className} href={props.href}>{props.text} → </A>
    </div>
  )
}
