#### Menu

```js
const Menu = require('semantic-ui-react').Menu;
const Segment = require('semantic-ui-react').Segment;
<div>
  <Menu attached='top' tabular>
    <Menu.Item name='First' active />
    <Menu.Item name='Second' />
    <Menu.Item name='Third' />
  </Menu>
  <Segment attached='bottom'>
    <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
  </Segment>
</div>
```

#### Vertical Nav Menu
```js
const Menu = require('semantic-ui-react').Menu;
const Segment = require('semantic-ui-react').Segment;
<div style={{width: '180px'}}>
  <Menu vertical className='nav'>
    <Menu.Item name='About' active />
    <Menu.Item name='Change Password' />
    <Menu.Item name='Updates' />
  </Menu>
</div>
```

#### Vertical Nav Menu (outlier text)
```js
const Menu = require('semantic-ui-react').Menu;
const Segment = require('semantic-ui-react').Segment;
<div style={{width: '180px'}}>
  <Menu vertical className='nav'>
    <Menu.Item name='Change System Password' active />
    <Menu.Item name='Alongwordisbrokentofitproperly' />
    <Menu.Item name='camelCaseIsProperlyHandled' />
  </Menu>
</div>
```
