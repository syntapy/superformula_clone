import type { ButtonProps } from './types.ts'
import { SvgRightArrow } from '../icon/index.ts'
import { A } from './index.ts'

export default function NavAnchor(props: ButtonProps & StyleProps) {
  const anchorClass: string = orientationStyles.horizontalFlex + " " + orientationStyles.spaceBetweenItems
  return (
    <A className={anchorClass} href={props.href}>
      <span>{props.text}</span>
      <SvgRightArrow className={visibilityStyles.mobile} />
    </A>
  )
}

