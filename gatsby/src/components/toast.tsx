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
  const shadowStyle: string = styles.shadow
  const toastStyle: string = styles.toast
  const horizontalFlex: string = orientationStyles.horizontalFlex

  // Padding styles
  const flexPadStyle: string = styles.flexPad
  const svgPadStyle: string = styles.svgPad
  const msgPadStyle: string = styles.msgPad
  const closePadStyle: string = styles.closePad

  const svgTranslateStyle: string = styles.svgTranslate

  // Other styles
  const closeStyle: string = styles.close
  const centerStyle: string = orientationStyles.flexStartItems
  const pointerStyle: string = otherStyles.pointer
  const inlineStyle: string = otherStyles.inline

  const toastId: string = "toast-message"

  function onCloseClick(): void {
    const toast: HTMLElement | null = document.getElementById(toastId)
    toast.classList.add(styles.hidden)
  }

  return (
    <div data-cy="cy-toast-message" 
         className={toastContainerStyle + " " + shadowStyle} 
         id={toastId}
    >
    <div className={toastStyle}>
    <div className={horizontalFlex + " " + centerStyle + " " + flexPadStyle}>
      <div className={inlineStyle + " " + svgPadStyle}>
        <SvgButton
          className={svgTranslateStyle}
          aria-label="Close Toast Message"
          title="Close Toast Message"
          icon={<Exclamation width={14} height={14} data-cy="cy-toast-exclamation-svg" />}
        />
      </div>
      <div className={inlineStyle + " " + msgPadStyle}>{props.message}</div>
      <button
        id="toast-close-button"
        className={inlineStyle + " " + closeStyle + " " + closePadStyle + " " + pointerStyle}
        onClick={onCloseClick}>x</button>
    </div>
    </div>
    </div>
  )
}
