import * as React from "react"
import { NavButton } from "../buttons"
import { ButtonProps, DataCyProps } from "../buttons"
import { StyleProps } from "../../utils"

import type { SubNavItem } from './index.ts'

import FlutterSvg from "../../images/svg/subnav/flutter.svg"
import DigitalTransformationSvg from "../../images/svg/subnav/digital_transformation.svg"
import DigitalProductsSvg from "../../images/svg/subnav/digital_products.svg"
import CustomerExperienceSvg from "../../images/svg/subnav/customer_experience.svg"
import CloudAndPlatformsSvg from "../../images/svg/subnav/cloud_and_platforms.svg"
import StrategyAndInnovationSvg from "../../images/svg/subnav/strategy_and_innovation.svg"

import { SUB_NAV_ICON_SIZE } from "./param.ts"

export default function ServicesNavButton(props: ButtonProps & StyleProps & DataCyProps) {
  const servicesItems: SubNavItem[] = [
    {
      icon: <FlutterSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Flutter",
      url: "https://www.superformula.com/services/flutter/"
    },
    {
      icon: <DigitalTransformationSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Digital Transformation",
      url: "https://www.superformula.com/services/digital-transformation/"
    },
    {
      icon: <DigitalProductsSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Digital Products",
      url: "https://www.superformula.com/services/digital-products/"
    },
    {
      icon: <CustomerExperienceSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Customer Experience",
      url: "https://www.superformula.com/services/customer-experience/"
    },
    {
      icon: <CloudAndPlatformsSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Cloud & Platforms",
      url: "https://www.superformula.com/services/cloud-and-platforms/"
    },
    {
      icon: <StrategyAndInnovationSvg width={SUB_NAV_ICON_SIZE} height={SUB_NAV_ICON_SIZE} />,
      text: "Strategy & Innovation",
      url: "https://www.superformula.com/services/strategy-innovation/"
    }
  ]

  return (<NavButton
    dataCy="services-nav-item"
    right={false}
    className={props.className} href={props.href} text={props.text}
    subNavItems={servicesItems}
  />)
}

