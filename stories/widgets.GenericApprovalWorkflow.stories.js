import React from 'react'
import { Grid, Item, Icon, Step } from '../src/index'

import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'

const stories = storiesOf('widgets.GenericApprovalWorkflow', module)

.addDecorator(withKnobs)
.add('horizontal', () => {
  const columnContents = [
    {
      header: 'Dividers R Great',
      content: 'https://github.com/Semantic-Org/Semantic-UI/issues/4342!'
    },
    {
      header: 'Great Stuff',
      content: 'I just can\'t get enough of it.'
    }
  ]
  const totalColumns = 16
  const simpleColumnWidth = 3
  const approvalColumnWidth = 1
  const stepColumnWidth = totalColumns - simpleColumnWidth * columnContents.length - approvalColumnWidth
  return (
    <Grid padded columns={totalColumns} divided>
      <Grid.Row>
        {columnContents.map((column, ndx) => (
          <Grid.Column width={simpleColumnWidth} key={`col-${ndx}`}>
            <Item>
              <Item.Content>
                <Item.Header as='h4' style={{margin: 0}}>{column.header}</Item.Header>
                <Item.Description>
                  <p>{column.content}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
        ))}
        <Grid.Column width={stepColumnWidth} verticalAlign='middle'>
          <Step.Group size='mini' fluid>
            <Step>
              <Icon name='truck' />
              <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name='payment' />
              <Step.Content title='Billing' description='Enter billing information' />
            </Step>
            <Step disabled icon='info' title='Confirm Order' />
          </Step.Group>
        </Grid.Column>
        <Grid.Column width={approvalColumnWidth} style={{padding: 0}} key='approvalColumn' verticalAlign='middle'>
          <Grid padded>
            <Grid.Column color='blue' textAlign='center' width={16}><Icon name='checkmark' size='large' inverted /></Grid.Column>
            <Grid.Column color='red' textAlign='center' width={16}><Icon name='close' size='large' inverted /></Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <p>small divider issue: https://github.com/Semantic-Org/Semantic-UI/issues/4882</p>
      </Grid.Row>
    </Grid>
  )
})

export default stories
