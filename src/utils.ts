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
  //console.log("="*50)
  //console.log("WINDOW_WIDTH: ", getWindowDimensions().width)
  //console.log("WINDOW_WIDTH_TYPE: ", typeof(getWindowDimensions().width))
  //console.log("MOBILE_WIDTH: ", getMobileWidth(offset))
  //console.log("MOBILE_WIDTH_TYPE: ", typeof(getMobileWidth(offset)))
  return getWindowDimensions().width < getMobileWidth(offset)
}
