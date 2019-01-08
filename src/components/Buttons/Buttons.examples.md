#### Primary Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
	<Button className='octagon'>Save</Button>
	<Button className='octagon active'>Save</Button>
	<Button className='octagon' loading>Save</Button>
	<Button disabled className='octagon'>Save</Button>
	<Button className='octagon'>
      <Icon className='check circle outline' />
      Save
  </Button>
</div>
```

#### Text Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
	<Button className='octagon textbutton'>Button</Button>
	<Button className='octagon textbutton active'>Button</Button>
	<Button className='octagon textbutton' loading>Button</Button>
	<Button disabled className='octagon textbutton'>Button</Button>
	<Button className='octagon textbutton'>
      <Icon className='check circle outline' />
      Button
  </Button>
</div>
```

#### Icon Button with Text
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button className='octagon iconbutton'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button className='octagon iconbutton active'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button disabled className='octagon iconbutton'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
</div>
```

#### Icon Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button className='octagon iconbutton'>
        <Icon className='close' size='large' />
    </Button>
    <Button className='octagon iconbutton active'>
        <Icon className='close' size='large' />
    </Button>
    <Button disabled className='octagon iconbutton'>
        <Icon className='close' size='large' />
    </Button>
</div>
```

### Action Menu
```js
const Button = require('semantic-ui-react').Button;

<div>
    <RolesActionList className='octagon actionbutton'/>
    <RolesActionList className='octagon actionbutton active'/>
    <RolesActionList disabled  className='octagon actionbutton'/>
</div>