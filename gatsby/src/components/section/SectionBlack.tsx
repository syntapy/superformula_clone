import * as styles from "../../styles/section/index.module.css"
import { StyleProps } from "../../utils"
import { SectionProps } from "./section/types.ts"

export function SectionBlack(props: SectionProps & StyleProps) {
  let className: string = styles.section + " " + styles.sectionBlack + " " + props.className
  if (props.className) {
    className = props.className + " " + className
  }
  return (
    <section className={className}>
      {props.children}
    </section>
  )
}
