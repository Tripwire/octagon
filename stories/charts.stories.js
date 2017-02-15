import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CircleChart from '../src/components/charts/CircleChart/Circle';


storiesOf('Charts', module)
  .add('Radial', () => (
    <CircleChart endPercentValue={"75k"} border={5} endPercent={.45} backgroundOpacity={0} />
  ))
