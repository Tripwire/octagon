import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Welcome from './Welcome'

export default storiesOf('Welcome', module)
.add('to octagon', () => <Welcome />)
