#### Primary Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button positive>Save</Button>
  	<Button positive active>Save</Button>
  	<Button positive loading></Button>
  	<Button disabled positive>Save</Button>
  	<Button positive>
        <Icon className='check circle outline' />
        Save
    </Button>
</div>
```

#### Secondary Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button negative>Cancel</Button>
  	<Button negative active>Cancel</Button>
  	<Button negative loading></Button>
  	<Button disabled negative>Cancel</Button>
  	<Button negative>
        <Icon className='check circle outline' />
        Cancel
    </Button>
</div>
```

#### Default Button
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button>Test Connection</Button>
  	<Button active>Test Connection</Button>
  	<Button loading></Button>
  	<Button disabled>Test Connection</Button>
  	<Button>
        <Icon className='check circle outline' />
         Test Connection
    </Button>
</div>
```

#### Default Button with icon
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
    <Button>
        <i className='icon_documents_alt' /> 
        Copy to Clipboard
    </Button>
    <Button active>
        <i className='icon_documents_alt' /> 
        Copy to clipboard
    </Button>
    <Button loading>
        <i className='icon_documents_alt' /> 
    </Button>
    <Button disabled >
        <i className='icon_documents_alt' /> 
        Copy to clipboard
    </Button>
</div>
```

#### Text Button with Icon
```js
Button = require('semantic-ui-react').Button;
Icon = require('semantic-ui-react').Icon;

<div>
	<Button className='textButton'>Button</Button>
	<Button className='textButton active'>Button</Button>
	<Button loading className='textButton'>Button</Button>
	<Button disabled className='textButton'>Button</Button>
	<Button className='textButton'>
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
    <Button className='iconButton'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button className='iconButton active'>
        <Icon className='save outline' size='large' />
        Save
    </Button>
    <Button disabled className='iconButton'>
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
    <Button className='iconButton'>
      <Icon className='close' size='large' />
    </Button>
    <Button className='iconButton active'>
      <Icon className='close' size='large' />
    </Button>
    <Button disabled className='iconButton'>
      <Icon className='close' size='large' />
    </Button>
</div>
```

### Action Menu
```js
const Button = require('semantic-ui-react').Button;
const menuList =[
  {'id':1,'Name':'Export', 'icon':'ei icon_cog'},
  {'id':2,'Name':'Delete', 'icon':'ei icon_info'},
  {'id':3,'Name':'Copy', 'icon':'save outline'},
  {'id':4,'Name':'Settings', 'icon':'ei icon_cog'}
]

initialState = {
  actionMenuList:menuList
};

<div>
    <ActionList className='actionButton' actionMenuList={state.actionMenuList} />
    <ActionList className='actionButton active' actionMenuList={state.actionMenuList} />
    <ActionList disabled className='actionButton' actionMenuList={state.actionMenuList} />
</div>
```