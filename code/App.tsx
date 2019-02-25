import { Data, animate, Override, Animatable } from 'framer'
import { body, hiddenField, labels, spinner } from './datas'

window.log = console.log

export const Body: Override = () => {
  return {
    top: body.top,
  }
}

export const Spinner: Override = props => {
  return {
    scale: spinner.scale,
  }
}

export const SpinnerOverlay: Override = props => {
  return {
    opacity: spinner.overlayOpacity,
  }
}
