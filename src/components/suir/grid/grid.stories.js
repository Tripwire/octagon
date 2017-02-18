import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, object } from '@kadira/storybook-addon-knobs'
import Grid from './Grid'

const stories = storiesOf('core.Grid', module)

.addDecorator(withKnobs)
.add('full size & equally sliced - raw styles', () => {
  return (
    <div className='ui padded equal height grid' style={{height: '100%'}}>
      <div className='sixteen wide stretched column'>
        <div className='ui equal height grid'>
          <div className='eight wide red column'>A</div>
          <div className='eight wide green column'>B</div>
          <div className='eight wide orange column'>C</div>
          <div className='eight wide blue column'>D</div>
        </div>
      </div>
    </div>
  )
})
.add('full size & equally sliced', () => {
  const colProps = object('column properties', {
    verticalAlign: null,
    textAlign: 'center'
  })
  const styles = object('styles', {
    gridRoot: { height: '100%' },
    a: { backgroundColor: 'red' },
    b: { backgroundColor: 'blue' },
    c: { backgroundColor: 'pink' },
    d: { backgroundColor: 'salmon' }
  })
  return (
    <Grid padded style={styles.gridRoot}>
      <Grid.Column style={styles.a} width={8} {...colProps}>A (note, the parent component must be also have the full height/width)</Grid.Column>
      <Grid.Column style={styles.b} width={8} {...colProps}>B - full size no gutter semantic-ui grid! http://jsfiddle.net/ea04tkwo/. We've stretched #root's height in .storybook/styles.css</Grid.Column>
      <Grid.Column style={styles.c} width={8} {...colProps}>C - maximize this viewports root? https://github.com/storybooks/react-storybook/issues/131</Grid.Column>
      <Grid.Column style={styles.d} width={8} {...colProps}>D</Grid.Column>
    </Grid>
  )
})
.add('full size, equally sliced, centered content', () => {
  const colProps = object('column properties', { textAlign: 'center' })
  const styles = object('styles', {
    gridRoot: { height: '100%' },
    a: { backgroundColor: 'red' },
    b: { backgroundColor: 'blue' },
    c: { backgroundColor: 'pink' },
    d: { backgroundColor: 'salmon' }
  })
  return (
    <Grid padded style={styles.gridRoot}>
      <Grid.Column style={styles.a} width={8} {...colProps}>
        <Grid padded style={styles.gridRoot}>
          <Grid.Column verticalAlign='middle'>
            A (note, the parent component must be also have the full height/width)
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column style={styles.b} width={8} {...colProps}>B - full size no gutter semantic-ui grid! http://jsfiddle.net/ea04tkwo/. We've stretched #root's height in .storybook/styles.css</Grid.Column>
    </Grid>
  )
})

export default stories
