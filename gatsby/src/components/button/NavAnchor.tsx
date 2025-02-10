import * as React from "react"
import type { ButtonProps } from './types.ts'
import { SvgRightArrow } from '../icon/index.ts'
import { A } from './index.ts'
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import * as visibilityStyles from "../../styles/utilities/visibility.module.css"

export default function NavAnchor(props: ButtonProps & StyleProps) {
  const anchorClass: string = orientationStyles.horizontalFlex + " " + orientationStyles.spaceBetweenItems
  return (
    <A className={anchorClass} href={props.href}>
      <span>{props.text}</span>
      <SvgRightArrow className={visibilityStyles.mobile} />
    </A>
  )
}

