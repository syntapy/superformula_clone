import * as React from "react"
import * as styles from "../../styles/section/index.module.css"
import { SectionProps } from "./section/types.ts"

export default function SectionWhite(props: SectionProps) {
  const className: string = styles.section + " " + styles.sectionWhite + " " + props.className
  return (
    <section className={className}>
      {props.children}
    </section>
  )
}
