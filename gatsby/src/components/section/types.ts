import { img } from "../../types.ts"

export interface SectionProps {
  children: JSX.Element
}

export interface HeaderSectionProps {
  title: string
  description: string
  href: string
  buttonText: string
}

export interface InsightsSectionProps {
  title: string
  dataCy: string
  children: JSX.Element
}

export interface OlSectionProps {
  title: string
  items: string[]
}

export interface ServicesSectionProps {
  title: string
  subtitle: string
  description: string
  src: string
  alt: string
  href: string
  buttonText: string
}

export interface CultureSectionProps {
  title: string
  subtitle: string
  description: string
  href: string
  buttonText: string
  imgListDesktop: img[]
  imgMobile: img
  isMobile: () => boolean
}
