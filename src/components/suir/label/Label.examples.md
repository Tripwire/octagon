## Simple Label

    const Label = require('semantic-ui-react').Label;
    const Icon = require('semantic-ui-react').Icon;
    <Label>
      <Icon name='mail' /> 23
    </Label>

## Form Labels

    const Form = require('semantic-ui-react').Form;
    const Divider = require('semantic-ui-react').Divider;
    const Label = require('semantic-ui-react').Label;
    <Form>
      <Form.Field>
        <input type='text' placeholder='First name' />
        <Label pointing>Please enter a value</Label>
      </Form.Field>
      <Divider />

      <Form.Field>
        <Label pointing='below'>Please enter a value</Label>
        <input type='text' placeholder='Last Name' />
      </Form.Field>
      <Divider />

      <Form.Field inline>
        <input type='text' placeholder='Username' />
        <Label pointing='left'>That name is taken!</Label>
      </Form.Field>
      <Divider />

      <Form.Field inline>
        <Label pointing='right'>Your password must be 6 characters or more</Label>
        <input type='password' placeholder='Password' />
      </Form.Field>
      <Form.Field inline>
        <Label basic color='red' pointing='right'>Your password must be 6 characters or more</Label>
        <input type='password' placeholder='Password' />
      </Form.Field>
    </Form>

See full documentation [here](http://react.semantic-ui.com/elements/label)
