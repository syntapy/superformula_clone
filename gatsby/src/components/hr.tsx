import * as React from "react"
import * as styles from "../styles/utilities/other.module.css"

interface HRProps {
  className: string
}

export function HorizontalRule(props: HRProps) {
  const className: string = props.className + " " + styles.noPad + " " + styles.noMargin
  return (
      <hr className={className} size={1} color={'#444'} />
  )
}
