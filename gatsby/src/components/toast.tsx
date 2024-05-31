import * as React from "react"
import * as styles from "../styles/toast.module.css"
import Check from "../images/svg/check.svg"
import Exclamation from "../images/svg/exclamation.svg"
import Close from "../images/svg/close.svg"
import { SvgButton } from "./buttons"

interface ToastProps {
  message: string
}

function clickToast() {
  console.log("Woot WOOOT")
}

export default function Toast(props: ToastProps) {
  const toastContainerStyle: string = styles.toastContainer
  const insetStyle: string = styles.insetShadow
  const className: string = styles.toast
  const btnClassName: string = styles.toastOkButton
  const exclamationStyle: string = styles.exclamation
  const closeClassName: string = styles.close
  return (
    <div className={toastContainerStyle}>
    <div className={insetStyle}>
    <div className={className}>
      <div className={exclamationStyle}>
      <SvgButton
        icon={<Exclamation width={12} height={18} data-cy="toast-exclamation-svg" />}
      />
      </div>
      <div>{props.message}</div>
      <div className={closeClassName}>x</div>
    </div>
    </div>
    </div>
  )
}
