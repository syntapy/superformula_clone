import * as React from "react"
import Rightarrow from "../images/svg/ra.svg"
import * as styles from "../styles/utilities/other.module.css"

interface StyleProps {
  className: string
}

export function SvgRightArrow() {
  return (
    <span className={styles.marginLeft}>
      <Rightarrow width={12} height={12} />
    </span>
  )
}
