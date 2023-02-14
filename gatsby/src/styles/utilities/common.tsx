import * as utilStyles from "./orientation.module.css"

export function mobileV_desktopH(): string {
  const classNameMobile: string = utilStyles.mobileVerticalFlex
  const classNameDesktop: string = utilStyles.desktopHorizontalFlex
  const className: string = classNameMobile + " " + classNameDesktop
  return className
}
