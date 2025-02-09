import type { ButtonProps } from './types.ts'
import * as styles from "../../styles/buttons.module.css"
import { A } from './index.ts'

export default function ArticleButton(props: ButtonProps) {
  const className: string = styles.articleButton + " " + props.className
  return (
    <div>
      <A className={className} href={props.href}>{props.text}</A>
    </div>
  )
}
