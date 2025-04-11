import * as React from "react"
import { ButtonDark } from "../button/index.ts"

interface ContactSectionProps {
  title: string
  href: string
  buttonText: string
}

export default function ContactSection(props: ContactSectionProps) {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      <ButtonDark href={props.href} text={props.buttonText} />
    </React.Fragment>
  )
}
