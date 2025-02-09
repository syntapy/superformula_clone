import type { SvgProps } from '../../types.ts'

export default function SvgButton(props: StyleProps & SvgProps) {
  const className: string = styles.svgButton + " " + props.className
  const w: string = props.icon.props.width.toString() + "px"
  const h: string = props.icon.props.height.toString() + "px"
  const dimensionStyle: React.CSSProperties = {
    width: w,
    minWidth: w,
    height: h,
    minHeight: h
  }
  return (
    <button 
      style={dimensionStyle}
      className={className}
      title={props.title}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      data-cy={props.dataCy}
    >
      {props.icon}
    </button>
  )
}
