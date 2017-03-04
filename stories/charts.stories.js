import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CircleChart from '../src/components/charts/CircleChart/Circle'
import AreaChart from '../src/components/charts/AreaChart/AreaChart'
import BarChart from '../src/components/charts/BarChart/BarChart'

const dataArea = [
  { x: 0, y: 10214, up: 250, down: 229 },
  { x: 1, y: 25241, up: 212, down: 128 },
  { x: 2, y: 52421, up: 322, down: 192 },
  { x: 3, y: 20204, up: 420, down: 525 },
  { x: 4, y: 30024, up: 515, down: 325 }
]
const dataBarChart = [
  { x: '12-10-2016 01:02:00', y: 40, currentState: 'normal' },
  { x: '12-11-2016 03:15:00', y: 50, currentState: 'normal' },
  { x: '12-12-2016 05:22:00', y: 65, currentState: 'normal' },
  { x: '12-13-2016 05:22:00', y: 60, currentState: 'normal' },
  { x: '12-14-2016 05:22:00', y: 70, currentState: 'normal' },
  { x: '12-15-2016 05:22:00', y: 55, currentState: 'normal' },
  { x: '12-16-2016 05:22:00', y: 80, currentState: 'warning' },
  { x: '12-17-2016 05:22:00', y: 55, currentState: 'normal' },
  { x: '12-18-2016 05:22:00', y: 75, currentState: 'critical' },
  { x: '12-19-2016 05:22:00', y: 50, currentState: 'normal' }
]
storiesOf('Charts', module)
  .addDecorator((story) => (
    <div style={{maxWidth: '400px', height: '400px', marginTop: '200px', marginLeft: '15px'}}>
      {story()}
    </div>
  ))
  .add('Radial', () => (
    <CircleChart endPercentValue={'75k'} border={5} endPercent={0.45} backgroundOpacity={0.5} />
  ))
  .add('Area Chart', () => (
    <AreaChart
      data={dataArea}
      hideAxisX
      hideAxisY
      tooltipVisible
      dotVisible={false}
      yBuffer={5}
      color='#A676B2'
      width={300}
      height={60}
      tooltipContentType={['y', 'up', 'down']}
    />
  ))
   .add('Bar Chart', () => (
     <BarChart
       barPadding={0.3}
       borderRadius={0}
       data={dataBarChart}
       height={120}
       width={300}
       xDataType='date'
      />
  ))
