## Dropdown

     const Dropdown = require('semantic-ui-react').Dropdown;
     <Dropdown 
        placeholder='Select Country' 
        selection 
        options={[ { text: 'All', value: 'all' }, { text: 'prod.1.console', value: 'io' }, { text: 'prod.2.console', value: 'groups' }, { text: 'prod.3.console', value: 'tasktypes' } ]} 
        defaultValue={'all'} 
    />

See full dropdown documentation [here](http://react.semantic-ui.com/modules/dropdown)


## Popup

     const Popup = require('semantic-ui-react').Popup;
     const Button = require('semantic-ui-react').Button;
     <Popup
        trigger={<Button className='tripwire'>Popup Neutral</Button>}
        content='Neutral Popup Content'
        className='grey'
        positioning='bottom left'
    />

Custom colors as classNames grey, yellow, red.  See full popup documentation [here](http://react.semantic-ui.com/modules/popup)

## Input

Standard 

    const Input = require('semantic-ui-react').Input;
    <Input />

Search Input
     
     const Input = require('semantic-ui-react').Input;
     <Input
          icon='search'
          placeholder='Browse / Search: Tag, Group, or Operation'
          style={{width: '400px'}}
        />

Includes support for custom styles for error, focus, disabled. 
See full input documentation [here](http://react.semantic-ui.com/elements/input)

## Radio Buttons
  
Radio toggle

     const Radio = require('semantic-ui-react').Radio;
     <Radio toggle />

Standard Radio

     const Radio = require('semantic-ui-react').Radio;
     <Radio />

See full radio documentation [here](http://react.semantic-ui.com/addons/radio)