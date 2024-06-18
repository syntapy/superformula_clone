import * as React from "react"
import * as styles from "../styles/buttons.module.css"
import { StyleProps } from "../utils"

interface ButtonProps {
  href?: string
  text: string
}

interface DataCyProps {
  dataCy: string
}

export function A(props: ButtonProps & StyleProps) {
  const className: string = styles.a + " " + props.className
  return (
    <a className={className} href={props.href}>
      {props.text}
      {props.children}
    </a>
  )
}

export function HomeNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  let className: string = styles.homeNavButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href="/">{props.text}</A>
    </div>
  )
}

export function NavButton(props: ButtonProps & StyleProps & DataCyProps) {
  const className: string = styles.navButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href={props.href}>{props.text}</A>
    </div>
  )
}

export function CareersNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  const className: string = props.className + " " + styles.careersNavButton
  return (
    <div data-cy={props.dataCy} className={className}>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}

interface HRefProps {
  href: string
}

function ButtonArrow(props: ButtonProps & StyleProps) {
  const className: string = styles.buttonArrow + " " + props.className
  return (
    <div className={className}>
      <A className={className} href={props.href}>{props.text} → </A>
    </div>
  )
}

export function ButtonLight(props: ButtonProps) {
  const className: string = styles.buttonLight + " " + props.className
  return (
    <ButtonArrow className={className} href={props.href} text={props.text} />
  )
}

export function ButtonDark(props: ButtonProps) {
  const className: string = styles.buttonDark + " " + props.className
  return (
    <ButtonArrow className={className} href={props.href} text={props.text} />
  )
}

export function ArticleButton(props: ButtonProps) {
  const className: string = styles.articleButton + " " + props.className
  return (
    <div>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}

interface SvgProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  ariaLabel: string
}

export function SvgButton(props: StyleProps & SvgProps) {
  const className: string = styles.svgButton + " " + props.className
  const w: string = props.icon.props.width.toString() + "px"
  const h: string = props.icon.props.height.toString() + "px"
  const dimensionStyle: React.CSSProperties = {
    width: w,
    minWidth: w,
    height: h,
    minHeight: h
  }
  return (
    <button 
      style={dimensionStyle}
      className={className}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  )
}
