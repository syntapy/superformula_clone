//export default 'SvgrURL'
import * as React from 'react'

console.log("MOCKING SVG")
export default class SvgrURL extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    console.log('SvgrURL')
  }

  componentDidMount() {
    console.log("Did mount")
  }

  render() {
    console.log("RENDER")
    return <svg viewBox="0 0 80 50" width="32" height="45" fill="#ffffff">
      <rect width="44" height="5"></rect>
      <rect y="20" width="80" height="5"></rect>
      <rect y="40" width="50" height="5"></rect>
    </svg>
  }
}

export const ReactComponent = 'svg'
