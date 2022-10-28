import * as React from "react"
import { A, ButtonDark } from "./buttons"

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

interface HashTagsProps {
  tags: string[]
}

function HashTags(props: HashTagsProps) {
  return (
    <div>
      {props.tags.map((tag) => (
        <span>#{tag} </span>
      ))}
    </div>
  )
}

interface InsightProps {
  title: string
  src: string
  tags: string[]
}

export function Insight(props: InsightProps) {
  return (
    <div>
      <A href={props.href}>
        <img src={props.src} alt={props.alt} />
        <HashTags tags={props.tags} />
        <p>{props.title}</p>
        <p>Read more →</p>
      </A>
    </div>
  )
}

interface LiProps {
  text: string
}

export function Li(props: LiProps) {
  return (
    <li>{props.children}</li>
  )
}

interface OlProps {
  children: JSX.Element
}

export function Ol(props: OlProps) {
  return (
    <ol>
      {props.children}
    </ol>
  )
}

interface InfoProps {
  title: string
  description: string
}

export function Info(props: InfoProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
