import * as React from "react"
import { NavButton } from "../button/index.ts"
import { ButtonProps } from "../button/types.ts"
import { StyleProps } from "../../utils"
import { DataCyProps } from "../../types.ts"

import type { SubNavItem } from './index.ts'

import CareersSvg from "../../images/svg/subnav/careers.svg"
import CultureAndValuesSvg from "../../images/svg/subnav/culture_and_values.svg"

import { SUB_NAV_ICON_SIZE } from "./param.ts"

export default function AboutNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  const servicesItems: SubNavItem[] = [
    {
      icon: <CareersSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Careers",
      url: "https://careers.superformula.com/"
    },
    {
      icon: <CultureAndValuesSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Culture & Values",
      url: "https://careers.superformula.com/culture-values"
    }
  ]

  return (<NavButton
    dataCy="about-nav-item"
    right={true}
    className={props.className} href={props.href} text={props.text}
    subNavItems={servicesItems}
  />)
}
