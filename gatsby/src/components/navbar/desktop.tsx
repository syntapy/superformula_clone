import * as React from "react"
import * as styles from "../../styles/navbar.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import { desktop } from "../../styles/utilities/visibility.module.css"
import { HomeNavButton, NavButton, CareersNavButton, SvgButton } from "../buttons"
import { graphql, useStaticQuery, HeadFC } from "gatsby"

import { NavProps, NavItems, NavItemsList } from "./common"
