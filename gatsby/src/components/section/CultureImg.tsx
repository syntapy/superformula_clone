import * as React from "react"
import * as styles from "../../styles/section/index.module.css"
import * as orientationStyles from "../../styles/utilities/orientation.module.css"
import * as cultureStyles from "../../styles/section/culture.module.css"
import * as visibilityStyles from "../../styles/utilities/visibility.module.css"

import { img } from "../../types.ts"

function CultureImgMobile(props: { img: img }) {
  const className: string = styles.img + " " + visibilityStyles.mobile
  if (props.img.alt === undefined || props.img.alt === "") {
    throw new Error()
  }
  return <img className={className} src={props.img.src} alt={props.img.alt} />
}

function CultureImgDesktop(props: {imgList: img[]}) {
  const listWrapperClass: string = cultureStyles.imgDesktopWidth + ' ' + orientationStyles.horizontalFlex + " " + visibilityStyles.desktop
  const stylesList = [styles.img0, styles.img1, styles.img2, styles.img3]
  return <div className={listWrapperClass}>
      {props.imgList.map((img: img, index: number) => {
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

interface ImgProps {
  imgMobile: img
  imgListDesktop: img[]
  isMobile: boolean
}

export default function CultureImg(props: ImgProps) {
  return (
    <>
      <CultureImgMobile img={props.imgMobile} />
      <CultureImgDesktop imgList={props.imgListDesktop} />
    </>
  )
}
