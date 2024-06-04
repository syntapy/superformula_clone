import * as React from "react"
import * as styles from "../styles/toast.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import * as otherStyles from "../styles/utilities/orientation.module.css"
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
  const flexPadStyle: string = styles.flexPad
  const btnClassName: string = styles.toastOkButton
  const exclamationStyle: string = styles.exclamation
  const closeStyle: string = styles.close
  const padCloseStyle: string = styles.padClose
  const borderStyle: string = styles.border
  const centerStyle: string = orientationStyles.flexStartItems
  const pointerStyle: string = otherStyles.pointer
  const inlineStyle: string = otherStyles.inline

  function onCloseClick(): void {

  }

  return (
    <div className={toastContainerStyle}>
    <div className={insetShadowStyle}>
    <div className={toastStyle}>
    <div className={horizontalFlex + " " + centerStyle + " " + flexPadStyle}>
      <SvgButton className={inlineStyle} icon={<Exclamation width={14} height={14} data-cy="toast-exclamation-svg" />} />
      <div className={borderStyle}>
        {props.message}
      </div>
      <button className={closeStyle + " " + padCloseStyle + " " + pointerStyle}>x</button>
    </div>
    </div>
    </div>
    </div>
  )
}
