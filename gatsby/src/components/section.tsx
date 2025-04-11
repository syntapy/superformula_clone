import * as React from "react"
import { ButtonDark } from "./button/index"
import { CultureSectionHeader, CultureImg } from "./section/index.ts"

import { CultureSectionProps } from "./section/types.ts"

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
        isMobile={isMobile}
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
