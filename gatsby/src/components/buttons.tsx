import * as React from "react"
import * as styles from "../styles/buttons.module.css"
import * as visibilityStyles from "../styles/utilities/visibility.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import { SubNavProps, SubNavBar } from "./subnav.tsx"
import { StyleProps } from "../utils"
import { SvgRightArrow } from "./icons.tsx"
import { HorizontalRule } from "./hr.tsx"

interface ButtonProps {
  href?: string
  text: string
  subnav?: React.ElementType
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

export function HomeNavButtonMobile(props: ButtonProps & StyleProps & DataCyProps) {
  let className: string = styles.homeNavButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href="/">{props.text}</A>
    </div>
  )
}

export function NavButtonOld(props: ButtonProps & StyleProps & DataCyProps) {
  const className: string = styles.navButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <A href={props.href}>{props.text}</A>
    </div>
  )
}

function NavAnchor(props: ButtonProps & StyleProps) {
  const anchorClass: string = orientationStyles.horizontalFlex + " " + orientationStyles.spaceBetweenItems
  return (
    <A className={anchorClass} href={props.href}>
      <span>{props.text}</span>
      <SvgRightArrow className={visibilityStyles.mobile} />
    </A>
  )
}

export function NavButton(props: ButtonProps & StyleProps & DataCyProps & SubNavProps) {
  const className: string = styles.navButton + " " + props.className
  return (
    <div data-cy={props.dataCy} className={className}>
      <NavAnchor href={props.href} text={props.text} />
      {props.subNavItems !== undefined && <SubNavBar subNavItems={props.subNavItems} />}
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
  title: string
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
      title={props.title}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  )
}
