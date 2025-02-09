import type { ButtonProps } from './types.ts'
import { StyleProps } from "../../utils"
import { DataCyProps } from "../../types.ts"
import * as styles from "../../styles/buttons.module.css"
import { A } from './index.ts'

export function CareersNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  const className: string = props.className + " " + styles.careersNavButton
  return (
    <div data-cy={props.dataCy} className={className}>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}
