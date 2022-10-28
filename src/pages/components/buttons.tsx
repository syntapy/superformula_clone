import * as React from "react"
import * as styles from "../styles/buttons.module.css"

interface StyleProps {
  className?: string
}

interface ButtonProps {
  href: string
  text: string
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

export function HomeNavButton(props: ButtonProps & StyleProps) {
  let className: string = styles.homeNavButton + " " + props.className
  return (
    <div className={className}>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}

export function NavButton(props: ButtonProps & StyleProps) {
  const className: string = styles.navButton + " " + props.className
  console.log(className)
  return (
    <div className={className}>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}

export function CareersNavButton(props: ButtonProps & StyleProps) {
  const className: string = styles.careersNavButton + " " + props.className
  return (
    <div className={className}>
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
  icon: string
  alt: string
}

export function ButtonSvg(props: SvgProps & HRefProps) {
  return (
    <button href={props.href}>
    </button>
  )
}
