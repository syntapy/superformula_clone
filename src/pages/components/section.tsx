import * as React from "react"
import * as styles from "../styles/section.module.css"

interface SectionProps {
  children: JSX.Element
}

export function SectionBlack(props: SectionProps) {
  const className: string = styles.sectionBlack + " " + props.className
  return (
    <section className={className}>
      {props.children}
    </section>
  )
}

export function SectionWhite(props: SectionProps) {
  const className: string = styles.sectionWhite + " " + props.className
  return (
    <section className={className}>
      {props.children}
    </section>
  )
}
