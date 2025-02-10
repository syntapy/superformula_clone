import * as React from "react"
import Rightarrow from "../../images/svg/ra.svg"
import { StyleProps } from "../../utils"
import * as styles from "../styles/utilities/other.module.css"

export default function SvgRightArrow(props: StyleProps) {
  return (
    <span className={props.className}>
      <Rightarrow width={12} height={12} />
    </span>
  )
}
