#### Primary Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
	<Button className='octagoan'>Save</Button>
	<Button className='octagoan active'>Save</Button>
	<Button className='octagoan' loading>Save</Button>
	<Button disabled className='octagoan'>Save</Button>
	<Button className='octagoan'>
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
	<Button className='octagoan textbutton'>Button</Button>
	<Button className='octagoan textbutton active'>Button</Button>
	<Button className='octagoan textbutton' loading>Button</Button>
	<Button disabled className='octagoan textbutton'>Button</Button>
	<Button className='octagoan textbutton'>
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
    <Button className='octagoan iconbutton'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button className='octagoan iconbutton active'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button disabled className='octagoan iconbutton'>
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
    <Button className='octagoan iconbutton'>
        <Icon className='close' size='large' />
    </Button>
    <Button className='octagoan iconbutton active'>
        <Icon className='close' size='large' />
    </Button>
    <Button disabled className='octagoan iconbutton'>
        <Icon className='close' size='large' />
    </Button>
</div>
```
