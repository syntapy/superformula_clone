import { NavAnchor } from './index.ts'
import { SubNavBar } from '../nav/index.ts'
import type { ButtonProps } from './types.ts'
import type { DataCyProps } from '../types.ts'
import { StyleProps } from "../../utils"
import * as styles from "../../styles/buttons.module.css"

export function NavButton(props: ButtonProps & StyleProps & DataCyProps & SubNavProps) {
  const className: string = styles.navButton 
                    + " " + styles.dropDown
                    + " " + props.className
  return (
    <div className={className} data-cy={props.dataCy}>
      <NavAnchor href={props.href} text={props.text}/>
      {<SubNavBar right={props.right} subNavItems={props.subNavItems} />}
    </div>
  )
}

