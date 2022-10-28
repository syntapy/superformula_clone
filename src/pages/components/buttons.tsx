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
      <A className={styles.link} href={props.href}>{props.text}</A>
    </div>
  )
}

export function NavButton(props: ButtonProps & StyleProps) {
  const className: string = styles.navButton + " " + props.className
  const linkClassName: string = styles.link
  console.log(className)
  return (
    <div className={className}>
      <A className={styles.link} href={props.href}>{props.text}</A>
    </div>
  )
}

export function CareersNavButton(props: ButtonProps & StyleProps) {
  const className: string = styles.careersNavButton + " " + props.className
  return (
    <div className={className}>
      <A className={styles.link} href={props.href}>{props.text}</A>
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
      <A className={styles.link} href={props.href}>{props.text} → </A>
    </div>
  )
}

export function ButtonLight(props: ButtonProps) {
  return (
    <ButtonArrow href={props.href} text={props.text} />
  )
}

export function ButtonDark(props: ButtonProps) {
  return (
    <ButtonArrow href={props.href} text={props.text} />
  )
}

export function ArticleButton(props: ButtonProps) {
  return (
    <div>
      <A className={styles.link} href={props.href}>{props.text}</A>
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
