import React from 'react'
import { storiesOf } from '@kadira/storybook'

const sgURI = process.env.NODE_ENV.match(/devel/) ? 'http://localhost:3000' : '/styleguide'
export default storiesOf('octagon native', module)
.add('via styleguidist', () => <iframe src={sgURI} width='100%' height='100%' />)
