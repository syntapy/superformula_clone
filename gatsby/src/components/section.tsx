import * as React from "react"
import * as styles from "../styles/section/index.module.css"
import * as servicesStyles from "../styles/section/services.module.css"
import * as orientationStyles from "../styles/utilities/orientation.module.css"
import * as styleVars from "../styles/vars.module.css"
import { ButtonLight, ButtonDark } from "./button/index"
import { Ol, Li } from "./info"

import * as utils from "../utils"

import { StyleProps } from "../../utils"
import { SectionProps } from "./section/types.ts"

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
  dataCy: string
  children: JSX.Element
}

export function InsightsSection(props: InsightsSectionProps) {
  const className: string = orientationStyles.mobileV_desktopH
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <div className={className} >
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
  const title_u = utils.underscores(props.title)
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <Ol>
        {props.items.map((item, index) => (
          <Li key={index+'-'+title_u}>{item}</Li>
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
  const className: string = orientationStyles.mobileV_desktopH
  const imgClassName: string = servicesStyles.servicesImg
  const flexItem: string = servicesStyles.servicesItem
  if (props.alt === undefined || props.alt === "") {
    throw new Error()
  }
  return (
    <React.Fragment>
      <div className={className}>
        <div className={flexItem}>
          <h4>{props.title}</h4>
          <h5>{props.subtitle}</h5>
          <p>{props.description}</p>
          <ButtonLight href={props.href} text={props.buttonText} />
        </div>
        <img className={flexItem} src={props.src} alt={props.alt} />
      </div>
    </React.Fragment>
  )
}

interface img {
  src: string
  alt: string
}

interface CultureSectionProps {
  title: string
  subtitle: string
  description: string
  href: string
  buttonText: string
  imgListDesktop: img[]
  imgMobile: img
  isMobile: () => boolean
}

import * as cultureStyles from "../styles/section/culture.module.css"
function CultureImgMobile(props: img) {
  const className: string = styles.img
  if (props.img.alt === undefined || props.img.alt === "") {
    throw new Error()
  }
  return <img className={className} src={props.img.src} alt={props.img.alt} />
}

export function CultureImgDesktop(props: {imgs: img[]}) {
  const listWrapperClass: string = cultureStyles.imgDesktopWidth + ' ' + orientationStyles.horizontalFlex
  const stylesList = [styles.img0, styles.img1, styles.img2, styles.img3]
  return <div className={listWrapperClass}>
        {props.imgs.map((img, index) => {
          let imgClassName = stylesList[index] + ' ' + cultureStyles.imgDesktopMargin
          let wrapperClassName = cultureStyles.imgDesktopMargin + ' ' + cultureStyles.imgDesktopFlexItem
          if (img.alt === undefined || img.alt === "") {
            throw new Error()
          }
          return <div className={wrapperClassName} key={index.toString()}>
                  <img className={imgClassName} 
                    src={img.src} 
                    alt={img.alt}
                  />
                </div>
        })}
      </div>
}

function CultureSectionHeader(props: CultureSectionProps) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.description}</p>
      <ButtonLight href={props.href} text={props.buttonText} />
      {props.children}
    </React.Fragment>
  )
}

export function CultureSection(props: CultureSectionProps) {
  const initialIsMobile: boolean = props.isMobile()
  const [isMobile, setIsMobile] = React.useState(initialIsMobile)

  React.useEffect(() => {
    const evenListener = () => setIsMobile(props.isMobile())
    window.addEventListener('resize',  evenListener)
    return () => window.removeEventListener('resize', evenListener)
  }, [])

  if (isMobile) {
    return (
      <React.Fragment>
        <CultureSectionHeader {...props} />
        <CultureImgMobile img={props.imgMobile} />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <CultureSectionHeader {...props} />
        <CultureImgDesktop imgs={props.imgListDesktop} />
      </React.Fragment>
    )
  }
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
