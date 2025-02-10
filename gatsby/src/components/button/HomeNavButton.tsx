import type { ButtonProps } from './types.ts'
import { DataCyProps } from "../../types.ts"
import { StyleProps } from "../../utils"

import { A } from './index.ts'
import * as styles from "../../styles/buttons.module.css"

export default function HomeNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  let className: string = styles.homeNavButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href="/">{props.text}</A>
    </div>
  )
}
