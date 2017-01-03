import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, object } from '@kadira/storybook-addon-knobs'
import Grid from './Grid'

const stories = storiesOf('core.Grid', module)

.addDecorator(withKnobs)
.add('full & even', () => {
  const colProps = object('column properties', {
    verticalAlign: null,
    textAlign: 'center'
  })
  const styles = object('styles', {
    root: {
      height: '100%'
    },
    a: {
      backgroundColor: 'red'
    },
    b: {
      backgroundColor: 'blue'
    },
    c: {
      backgroundColor: 'pink'
    },
    d: {
      backgroundColor: 'salmon'
    }
  })
  return (
    <Grid style={styles.root}>
      <Grid.Column style={styles.a} width={8} {...colProps}>A (note, the parent component must be also have the full height/width)</Grid.Column>
      <Grid.Column style={styles.b} width={8} {...colProps}>B - full size no gutter semantic-ui grid! http://jsfiddle.net/ea04tkwo/. We've stretched #root's height in .storybook/styles.css</Grid.Column>
      <Grid.Column style={styles.c} width={8} {...colProps}>C - maximize this viewports root? https://github.com/storybooks/react-storybook/issues/131</Grid.Column>
      <Grid.Column style={styles.d} width={8} {...colProps}>D</Grid.Column>
    </Grid>
  )
})

export default stories
