#### States

    const Checkbox = require('semantic-ui-react').Checkbox;
    <div>
      <div>
        <Checkbox />
        Standard
      </div>
      <div>
        <Checkbox checked />
        Checked
      </div>
      <div>
        <Checkbox disabled />
        Disabled
      </div>
      <div>
        <Checkbox checked disabled />
        Checked Disabled
      </div>
    </div>

Reference Semantic UI documentation for usage: <a href='http://react.semantic-ui.com/modules/checkbox' target='_new'> here </a>

A box for checking.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleCheckbox = () => <Checkbox label='Make my profile visible' />

CheckboxExampleCheckbox()

```

You can define a label with a props object.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleShorthandObject = () => (
  <Checkbox label={{ children: 'Make my profile visible' }} />
)

CheckboxExampleShorthandObject()
```


You can define a label by passing your own element.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleShorthandElement = () => (
  <Checkbox label={<label>Make my profile visible</label>} />
)

CheckboxExampleShorthandElement()

```


#### Toggle
A checkbox can toggle.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleToggle = () => <Checkbox toggle />

CheckboxExampleToggle()

```


#### Read Only
A checkbox can be read-only and unable to change states.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleReadOnly = () => <Checkbox label='This checkbox is read-only' readOnly />

CheckboxExampleReadOnly()

```


#### Checked
A checkbox can be checked.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleChecked = () => (
  <Checkbox label='This checkbox comes pre-checked' defaultChecked />
)

CheckboxExampleChecked()
```


#### Indeterminate
A checkbox can be indeterminate.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const CheckboxExampleIndeterminate = () => (
  <Checkbox label='This checkbox is indeterminate' defaultIndeterminate />
)

CheckboxExampleIndeterminate()
```

#### Disabled
A checkbox can be read-only and unable to change states.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const Form = require('semantic-ui-react').Form;
const CheckboxExampleDisabled = () => (
  <Form>
    <Form.Field>
      <Checkbox label='Disabled' disabled />
    </Form.Field>
    <Form.Field>
      <Checkbox toggle label='Disabled' disabled />
    </Form.Field>
  </Form>
)

CheckboxExampleDisabled()
```

#### States
A box for checking.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const Button = require('semantic-ui-react').Button;
initialState = { checked: true }
;<div>
        <Button onClick={() => setState({ checked: !state.checked })}>Toggle it</Button>
        <Checkbox label='Check this box' onChange={() => setState({ checked: !state.checked })} checked={state.checked} />
      </div>

```

#### Fitted
A fitted checkbox does not leave padding for a label.
```jsx
const Checkbox = require('semantic-ui-react').Checkbox;
const Segment = require('semantic-ui-react').Segment;
const CheckboxExampleFitted = () => (
  <div>
    <Segment compact>
      <Checkbox />
    </Segment>
    <Segment compact>
      <Checkbox slider />
    </Segment>
    <Segment compact>
      <Checkbox toggle />
    </Segment>
  </div>
)

CheckboxExampleFitted()
```