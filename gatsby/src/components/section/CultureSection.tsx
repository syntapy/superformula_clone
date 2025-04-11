import * as React from "react"
import { CultureSectionProps } from "./types.ts"
import { CultureSectionHeader, CultureImg } from "./index.ts"

export default function CultureSection(props: CultureSectionProps) {
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
