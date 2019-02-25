import { animate } from 'framer'

import { body, spinner } from '../datas'
import { sleep } from '../utils'

const animation = async () => {
  log('refresh!')
  animate.ease(spinner.scale, 1)
  await sleep(0.5)
  animate.ease(spinner.overlayOpacity, 0)
  animate.ease(body.top, 80)

  await sleep(3)

  animate.ease(spinner.overlayOpacity, 1)
  await sleep(0.8)
  animate.ease(spinner.scale, 0, {
    duration: 0.7,
  })
  await sleep(0.3)

  await animate.ease(body.top, 0).finished

  spinner.isRefreshing = false
}

export default animation
