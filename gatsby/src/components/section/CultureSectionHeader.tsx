import * as React from "react"
import { CultureSectionProps } from "./types.ts"
import { ButtonLight } from "../button/index.ts"

export default function CultureSectionHeader(props: CultureSectionProps) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.description}</p>
      <ButtonLight
        href={props.href}
        text={props.buttonText}
      />
    </React.Fragment>
  )
}
