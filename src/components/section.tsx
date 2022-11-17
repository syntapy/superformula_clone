import * as React from "react"
import * as styles from "../styles/section.module.css"
import * as utilStyles from "../styles/utils.module.css"
import { ButtonLight, ButtonDark } from "./buttons"
import { Ol, Li } from "./info"

interface SectionProps {
  children: JSX.Element
}

export function SectionBlack(props: SectionProps) {
  const className: string = styles.section + " " + styles.sectionBlack + " " + props.className
  return (
    <section className={className}>
      {props.children}
    </section>
  )
}

export function SectionWhite(props: SectionProps) {
  const className: string = styles.section + " " + styles.sectionWhite + " " + props.className
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
  const className: string = utilStyles.flexContainer
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <div className={className}>
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

interface ServicesSectionProps {
  title: string
  subtitle: string
  description: string
  src: string
  alt: string
  href: string
  buttonText: string
}

export function ServicesSection(props: ServicesSectionProps) {
  const className: string = utilStyles.flexContainer
  const imgClassName: string = styles.img
  return (
    <React.Fragment>
      <div className={className}>
        <div>
          <h4>{props.title}</h4>
          <h5>{props.subtitle}</h5>
          <p>{props.description}</p>
          <ButtonLight href={props.href} text={props.buttonText} />
        </div>
        <img className={imgClassName} src={props.src} alt={props.alt} />
      </div>
    </React.Fragment>
  )
}

interface img {
  src: string
  alt?: string
}

interface CultureSectionProps {
  title: string
  subtitle: string
  description: string
  href: string
  buttonText: string
  imgList: img[]
}

function CultureImgMobile() {

}

function CultureImagDesktop() {

}

export function CultureSection(props: CultureSectionProps) {
  const wrapperClassName: string = utilStyles.auxWrapper
  const itemClassName: string = utilStyles.auxItem
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h5>{props.subtitle}</h5>
      <p>{props.description}</p>
      <ButtonLight href={props.href} text={props.buttonText} />
      <div className={wrapperClassName}>
        {props.imgList.map((img, index) => {
          let imgClassName: string = styles['img' + index.toString()]
          return <div className={utilStyles.auxItemWrapper}>
                  <img 
                    className={itemClassName + ' ' + imgClassName} 
                    src={img.src} 
                    alt={img.alt}
                  />
                 </div>
        })}
      </div>
    </React.Fragment>
  )
}

interface ContactSectionProps {
  title: string
  href: string
  buttonText: string
}

export function ContactSection(props: ContactSectionProps) {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      <ButtonDark href={props.href} text={props.buttonText} />
    </React.Fragment>
  )
}
