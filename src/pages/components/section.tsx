import * as React from "react"

interface SectionProps {
  children: JSX.Element
}

export function SectionBlack(props: SectionProps) {
  return (
    <section className="section-black">
      {props.children}
    </section>
  )
}

export function SectionWhite(props: SectionProps) {
  return (
    <section className="section-white">
      {props.children}
    </section>
  )
}
