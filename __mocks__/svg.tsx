//export default 'SvgrURL'
import * as React from 'react'

export default class SvgrURL extends React.Component<{}, {}> {
  constructor(props: {width: number, height: number}) {
    super(props)
  }

  render() {
    return <svg 
        ref={this.ref}
        viewBox="0 0 80 50"
        width={this.props.width.toString()}
        height={this.props.height.toString()}
        fill="#ffffff"
    >
      <rect width="44" height="5"></rect>
      <rect y="20" width="80" height="5"></rect>
      <rect y="40" width="50" height="5"></rect>
    </svg>
  }
}

export const ReactComponent = 'svg'
