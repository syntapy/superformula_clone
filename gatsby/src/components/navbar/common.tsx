import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import { NavButton, CareersNavButton } from "../buttons"
import { NavItemInfo, NavItemsProps } from "./utils"

export interface NavItemInfo {
  href: string
  text: string
}

export type NavItemsList = [NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo, NavItemInfo]

export interface NavProps {
  title: string
  rootHref: string
  items: NavItemsList
}

export interface NavItemsProps {
  id: string
  itemListStyle: string
  itemStyle: string
  items: NavItemsList
}

export function NavItems(props: NavItemsProps) {
  const navItem: string = props.itemStyle + " " + styles.navItem
  return (
    <div className={props.itemListStyle}>
      <NavButton className={navItem} href={props.items[0].href} text={props.items[0].text} />
      <NavButton className={navItem} href={props.items[1].href} text={props.items[1].text} />
      <NavButton className={navItem} href={props.items[2].href} text={props.items[2].text} />
      <NavButton className={navItem} href={props.items[3].href} text={props.items[3].text} />
      <CareersNavButton 
        className={navItem}
        href={props.items[4].href}
        text={props.items[4].text}
      />
    </div>
  )
}
