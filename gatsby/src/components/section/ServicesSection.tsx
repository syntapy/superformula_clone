import * as React from "react"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import * as servicesStyles from "../../styles/section/services.module.css"
import { ButtonLight } from "../button/index.ts"
import { ServicesSectionProps } from "./types.ts"

export default function ServicesSection(props: ServicesSectionProps) {
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
