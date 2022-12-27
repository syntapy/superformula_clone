import * as styleVars from "./styles/vars.module.css"

export interface ResponsiveProps {
  isMobile: () => boolean
}

export function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  } else {
    return { width: 0, height: 0 }
  }
}

export function getMobileWidth(offset: number = 0) {
  const mobileWidth: number = styleVars.maxMobileWidth 
  return parseInt(mobileWidth) + offset
}

export function isMobile(offset: number = 0) {
  return getWindowDimensions().width < getMobileWidth(offset)
}
