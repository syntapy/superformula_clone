import * as React from "react"
import { ButtonLight, ButtonDark } from "./button/index"
import { CultureImg } from "./section/index.ts"

import { img } from "./section/types.ts"

interface CultureSectionProps {
  title: string
  subtitle: string
  description: string
  href: string
  buttonText: string
  imgListDesktop: img[]
  imgMobile: img
  isMobile: () => boolean
}

function CultureSectionHeader(props: CultureSectionProps) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.description}</p>
      <ButtonLight href={props.href} text={props.buttonText} />
      {props.children}
    </React.Fragment>
  )
}

export function CultureSection(props: CultureSectionProps) {
  const initialIsMobile: boolean = props.isMobile()
  const [isMobile, setIsMobile] = React.useState(initialIsMobile)

  React.useEffect(() => {
    const evenListener = () => setIsMobile(props.isMobile())
    window.addEventListener('resize',  evenListener)
    return () => window.removeEventListener('resize', evenListener)
  }, [])

  return (
    <React.Fragment>
      <CultureSectionHeader {...props} />
      <CultureImg 
        isMobile={props.isMobile}
        imgMobile={props.imgMobile}
        imgListDesktop={props.imgListDesktop}
      />
    </React.Fragment>
  )
}

interface ContactSectionProps {
  title: string
  href: string
  buttonText: string
}

export function ContactSection(props: ContactSectionProps) {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      <ButtonDark href={props.href} text={props.buttonText} />
    </React.Fragment>
  )
}
