import * as React from "react"
import { OlSectionProps } from "./types.ts"
import { Ol, Li } from "../info.tsx"

import * as utils from "../../utils"

export default function OlSection(props: OlSectionProps) {
  const title_u = utils.underscores(props.title)
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <Ol>
        {props.items.map((item, index: number) => (
          <Li key={index+'-'+title_u}>{item}</Li>
        ))}
      </Ol>
    </React.Fragment>
  )
}
