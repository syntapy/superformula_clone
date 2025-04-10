import * as React from "react"
import { ButtonDark } from "../button/index.ts"
import { HeaderSectionProps } from "./types.ts"

export default function HeaderSection(props: HeaderSectionProps) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ButtonDark href={props.href} text={props.buttonText} />
    </React.Fragment>
  )
}
