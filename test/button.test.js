import React from 'react'
import Button from '../src/button/Button'
import renderer from 'react-test-renderer'

const { test, expect } = global

test('Button rendered', () => {
  const btn = renderer.create(<Button>TestButton</Button>)
  let tree = btn.toJSON()
  expect(tree).toMatchSnapshot()
})
