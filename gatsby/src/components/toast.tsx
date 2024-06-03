import * as React from "react"
import * as styles from "../styles/toast.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import Check from "../images/svg/check.svg"
import Exclamation from "../images/svg/exclamation.svg"
import Close from "../images/svg/close.svg"
import { SvgButton } from "./buttons"

interface ToastProps {
  message: string
}

export default function Toast(props: ToastProps) {
  const toastContainerStyle: string = styles.toastContainer + " " + styles.visible
  const insetShadowStyle: string = styles.insetShadow
  const toastStyle: string = styles.toast
  const horizontalFlex: string = orientationStyles.horizontalFlex
  const btnClassName: string = styles.toastOkButton
  const exclamationStyle: string = styles.exclamation
  const closeStyle: string = styles.close
  const closeParStyle: string = styles.closePar
  const padStyle: string = styles.pad

  function onCloseClick(): void {

  }

  return (
    <div className={toastContainerStyle}>
    <div className={insetShadowStyle}>
    <div className={toastStyle}>
    <div>
      <div className={padStyle}>
      </div>
      <SvgButton icon={<Exclamation width={12} height={12} data-cy="toast-exclamation-svg" />} />
      {props.message}
      <button className={closeStyle}>x</button>
    </div>
    </div>
    </div>
    </div>
  )
}
