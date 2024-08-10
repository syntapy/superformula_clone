import * as React from "react"

interface HRProps {
  className: string
}

export function HorizontalRule(props: HRProps) {
  return (
    <hr className={props.className} size={1} color={'#444'} />
  )
}
