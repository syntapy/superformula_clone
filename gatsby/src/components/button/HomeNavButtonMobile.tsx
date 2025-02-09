import type { ButtonProps, DataCyProps } from './types.ts'
import { StyleProps } from "../../utils"

import { A } from './index.ts'

export default function HomeNavButtonMobile(props: ButtonProps & StyleProps & DataCyProps) {
  let className: string = styles.homeNavButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href="/">{props.text}</A>
    </div>
  )
}

