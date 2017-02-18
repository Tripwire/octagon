import React from 'react'
import { suir } from '../src'
import renderer from 'react-test-renderer'
const { Button } = suir

const { test, expect } = global

test('Button rendered', () => {
  const btn = renderer.create(<Button>TestButton</Button>)
  let tree = btn.toJSON()
  expect(tree).toMatchSnapshot()
})
