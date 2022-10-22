import * as React from "react"
import * as styles from "../styles/buttons.module.css"

interface StyleProps {
  className?: string
}

interface ButtonProps {
  href: string
  text: string
}

export function HomeNavButton(props: ButtonProps) {
  return (
    <div className={styles.homeNavButton}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

export function NavButton(props: ButtonProps) {
  return (
    <div className={styles.navButton}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

export function CareersNavButton(props: ButtonProps) {
  return (
    <div className={styles.careerNavButton}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

interface HRefProps {
  href: string
}

function ButtonArrow(props: ButtonProps & StyleProps) {
  return (
    <div className={props.className}>
      <a href={props.href}>{props.text} → </a>
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
      <a href={props.href}>{props.text}</a>
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
      <img src={props.svg_src} alt={props.alt} />
    </button>
  )
}
