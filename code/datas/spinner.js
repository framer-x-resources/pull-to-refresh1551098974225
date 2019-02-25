import { Animatable, Data } from 'framer'

const scale = Animatable(0)
const overlayOpacity = Animatable(1)
const isRefreshing = false

export default Data({
  scale,
  overlayOpacity,
  isRefreshing,
})
