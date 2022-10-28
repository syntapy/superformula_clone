import * as React from "react"
import * as styles from "../styles/section.module.css"
import { ButtonLight, ButtonDark } from "./buttons"
import { Ol, Li } from "./info"

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

interface HeaderSectionProps {
  title: string
  description: string
  href: string
  buttonText: string
}

export function HeaderSection(props: HeaderSectionProps) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ButtonDark href={props.href} text={props.buttonText} />
    </React.Fragment>
  )
}

interface InsightsSectionProps {
  title: string
  children: JSX.Element
}

export function InsightsSection(props: InsightsSectionProps) {
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
        <div>
          {props.children}
        </div>
    </React.Fragment>
  )
}

interface OlSectionProps {
  title: string
  items: string[]
}

export function OlSection(props: BulletsSectionProps) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <Ol>
        {props.items.map((item) => (
          <Li>{item}</Li>
        ))}
      </Ol>
    </React.Fragment>
  )
}
