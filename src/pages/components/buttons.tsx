import * as React from "react"

interface StyleButtonProps {
  style?: object // TODO: Make not optional when adding css
}

interface ButtonProps {
  href: string
  text: string
}

const homeNavButtonStyles = {
  flex: "1 1 0",
}

export function HomeNavButton(props: ButtonProps) {
  return (
    <div style={homeNavButtonStyles}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

const navButtonStyles = {
  flex: "0 1 0",
  padding: "0 1rem",
}

export function NavButton(props: ButtonProps) {
  return (
    <div style={navButtonStyles}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

const careerNavButtonStyles = {
  ...navButtonStyles,
  padding: "0 0.5rem",
}

export function CareersNavButton(props: ButtonProps) {
  return (
    <div style={careerNavButtonStyles}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

function Button(props: ButtonProps) {
  return (
    <div style={props.style}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}

interface HRefProps {
  href: string
}

function ButtonArrow(props: ButtonProps) {
  return (
    <div style={props.style}>
      <a href={props.href}>{props.text} → </a>
    </div>
  )
}

export function ButtonLight(props: ButtonProps) {
  return (
    <ButtonArrow style={props.style} href={props.href} text={props.text} />
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
