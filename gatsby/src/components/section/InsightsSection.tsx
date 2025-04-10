import * as React from "react"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { InsightsSectionProps } from "./types.ts"

export default function InsightsSection(props: InsightsSectionProps) {
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
