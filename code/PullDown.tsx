import * as React from 'react'
import { PropertyControls, ControlType, Draggable, animate } from 'framer'
import styled, { css } from 'styled-components'
import { body, spinner } from './datas'
import { showNextLabel, showPrevLabel, refresh } from './animate'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
const StyledDraggable = styled(Draggable)`
  background: violet !important;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`

// Define type of property
interface Props {}

var tempY = 0

export class PullDown extends React.Component<Props> {
  state = { left: 0, top: 0 }

  // Set default properties
  static defaultProps = {}

  // Items shown in property panel
  static propertyControls: PropertyControls = {}

  onMove = e => {
    this.setState({ left: e.x, top: e.y })

    if (!spinner.isRefreshing) {
      body.top.set(e.y)
    }

    if (tempY < e.y) {
      log('pull down')
    } else if (tempY > e.y && !spinner.isRefreshing) {
      log('release')
      if (e.y > 100) {
        log('refresh!!')
        refresh()
        spinner.isRefreshing = true
      }
    }
    tempY = e.y
  }

  render() {
    return (
      <Wrap>
        <StyledDraggable
          left={this.state.left}
          top={this.state.top}
          onMove={this.onMove}
        />
      </Wrap>
    )
  }
}
