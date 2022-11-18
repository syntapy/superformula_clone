import * as styleVars from "./styles/vars.module.css"

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  }
}

export function getMobileWidth(offset: number = 0) {
  const mobileWidth: number = styleVars.maxMobileWidth 
  return parseInt(mobileWidth) + offset
}

export function isMobile(offset: number = 0) {
  return getWindowDimensions().width < getMobileWidth(offset)
}
