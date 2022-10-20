import * as React from "react"

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
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
        <HashTags tags={props.tags} />
        <p>{props.title}</p>
        <p>Read more →</p>
      </a>
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
