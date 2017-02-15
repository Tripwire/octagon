import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Progress } from 'semantic-ui-react'


storiesOf('Progress Bar', module)
  .addDecorator((story) => (
    <div style={{maxWidth: "200px" , marginTop: "15px", marginLeft: "15px"}}>
      {story()}
    </div>
  ))
  .add('Progress Bars', () => (
    <div>
      <div>
        <Progress percent={46} progress color="grey" />
        Standard - With Progress
      </div>
      <div>
        <Progress percent={46}  color="grey" />
        Standard
      </div>
      <div>
        <Progress percent={46}  color="blue" />
        Success
      </div>
      <div>
        <Progress percent={46}  color="red" />
        Critical
      </div>
      <div>
        <Progress percent={46}  color="yellow" />
        Warning
      </div>
    </div>
  ))

