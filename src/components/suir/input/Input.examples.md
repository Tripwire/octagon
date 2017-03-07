## Standard

    const Input = require('semantic-ui-react').Input;
    <Input />

## Search Input

     const Input = require('semantic-ui-react').Input;
     <Input
          icon='search'
          placeholder='Browse / Search: Tag, Group, or Operation'
          style={{width: '400px'}}
        />

## States

    const Input = require('semantic-ui-react').Input;
    <div>
        <div>Normal</div>
        <Input />
        <br />
        <div>Error</div>
        <Input error />
        <br />
        <div>Focus</div>
        <Input focus />
        <br />
        <div>Disabled</div>
        <Input disabled />
    </div>

Includes support for custom styles for error, focus, disabled.
See full input documentation [here](http://react.semantic-ui.com/elements/input)
