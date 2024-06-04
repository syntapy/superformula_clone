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

  // Padding styles
  const flexPadStyle: string = styles.flexPad
  const svgPadStyle: string = styles.svgPad
  const msgPadStyle: string = styles.msgPad
  const closePadStyle: string = styles.closePad

  const svgTranslateStyle: string = styles.svgTranslate

  // Other styles
  const btnClassName: string = styles.toastOkButton
  const exclamationStyle: string = styles.exclamation
  const closeStyle: string = styles.close
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
      <div className={inlineStyle + " " + svgPadStyle + " " + borderStyle}>
        <SvgButton className={svgTranslateStyle} icon={<Exclamation width={14} height={14} data-cy="toast-exclamation-svg" />} />
      </div>
      <div className={inlineStyle + " " + msgPadStyle}>
        {props.message}
      </div>
      <button className={inlineStyle + " " + closeStyle + " " + closePadStyle + " " + pointerStyle}>
        x
      </button>
    </div>
    </div>
    </div>
    </div>
  )
}