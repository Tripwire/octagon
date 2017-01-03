import React from 'react'
import Form from './Form'
import Input from '../input/Input'
import Button from '../button/Button'
import Message from '../message/Message'
import { host } from 'storybook-host'
import { storiesOf } from '@kadira/storybook'

const handleSubmit = (evt) => evt.preventDefault()

const stories = storiesOf('core.Form', module)
.addDecorator(host({
  title: 'form-container',
  align: 'center top',
  height: '100%',
  width: '100%'
}))
.add('with fields', () => (
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>First Name</label>
      <input name="first-name" placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="last-name" placeholder='Last Name' />
    </Form.Field>
    <Button primary type='submit'>Submit</Button>
  </Form>
))
.add('with required fields', () => (
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>Zip</label>
      <Input placeholder='Please enter zip code!' required label='zip dawg' />
    </Form.Field>
  </Form>
))
.add('with loading state', () => (
  <Form loading onSubmit={handleSubmit}>
    <Form.Field>
      <label>Bananas</label>
      <Input placeholder='in pajamas' />
    </Form.Field>
  </Form>
))
.add('with input groups', () => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Input label='field-1' value='best value' />
      <Form.Input label='field-2' value='greatest value' />
    </Form.Group>
    <Form.Group>
      <Form.Input label='field-3' value='most valueable' />
      <Form.TextArea label='field-4' value='brilliant!' />
    </Form.Group>
    <Button size='small' primary>Submit!</Button>
  </Form>
))
.add('with success message', () => (
  <Form success>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <Button>Submit</Button>
  </Form>
))
.add('with failed message', () => (
  <Form error>
    <Form.Field error>
      <label>Error Field Demo</label>
      <Input placeholder='totally bogus!' />
    </Form.Field>
    <Message
      error
      header='Uh oh...'
      content={'Your form has errors... fix \'em'}
    />
    <Button disabled>Submit</Button>
  </Form>
))

export default stories
