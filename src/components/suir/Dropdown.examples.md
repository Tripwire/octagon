#### Default
```jsx
     const Dropdown = require('semantic-ui-react').Dropdown;
     <Dropdown
        placeholder='Select Country'
        selection
        options={[ { text: 'All', value: 'all' }, { text: 'prod.1.console', value: 'io' }, { text: 'prod.2.console', value: 'groups' }, { text: 'prod.3.console', value: 'tasktypes' } ]}
        defaultValue={'all'}
    />
```
See full dropdown documentation [here](http://react.semantic-ui.com/modules/dropdown)

#### Default2
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
 <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
  </Dropdown>
  ```
  #### Selection
  A dropdown can be used to select between choices in a form.
 ```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
    const friendOptions = [
      {
         text: 'Jenny Hess',
         value: 'Jenny Hess',
         image: { avatar: true, src: '/img/jenny.jpg' },
     },
     {
            text: 'Justen Hess',
            value: 'Justen Hess',
            image: { avatar: true, src: '/img/justen.jpg' },
     },
    {
           text: 'Elliot Fu',
           value: 'Elliot Fu',
           image: { avatar: true, src: '/img/elliot.jpg' },
     },
  {
       text: 'Christian',
       value: 'Christian',
       image: { avatar: true, src: '/img/christian.jpg' },
  },
    {
           text: 'Matt',
           value: 'Matt',
           image: { avatar: true, src: '/img/matt.jpg' },
     },
  {
       text: 'Stevie',
       value: 'Stevie',
       image: { avatar: true, src: '/img/stevie.jpg' },
  }
        
   
    ]
    
    const DropdownExampleSelection = () => (
      <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} />
    )
    
   DropdownExampleSelection()
  ```
  #### Search Selection
  A selection dropdown can allow a user to search through a large list of choices.
  ```jsx
      const Dropdown = require('semantic-ui-react').Dropdown;
      const friendOptions = [
        {
           text: 'Jenny Hess',
           value: 'Jenny Hess',
           image: { avatar: true, src: '/img/jenny.jpg' },
       },
       {
              text: 'Justen Hess',
              value: 'Justen Hess',
              image: { avatar: true, src: '/img/justen.jpg' },
       },
      {
             text: 'Elliot Fu',
             value: 'Elliot Fu',
             image: { avatar: true, src: '/img/elliot.jpg' },
       },
    {
         text: 'Christian',
         value: 'Christian',
         image: { avatar: true, src: '/img/christian.jpg' },
    },
      {
             text: 'Matt',
             value: 'Matt',
             image: { avatar: true, src: '/img/matt.jpg' },
       },
    {
         text: 'Stevie',
         value: 'Stevie',
         image: { avatar: true, src: '/img/stevie.jpg' },
    }
          
     
      ]
      
      const DropdownExampleSelection = () => (
        <Dropdown placeholder='Select Friend' fluid search selection options={friendOptions} />
      )
      
     DropdownExampleSelection()
  ```
  #### Multiple Selection
  ```jsx
  const Dropdown = require('semantic-ui-react').Dropdown;
  const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]
  
  const DropdownExampleMultipleSelection = () =>  (
    <Dropdown placeholder='Skills' fluid multiple selection options={options} />
  )
DropdownExampleMultipleSelection()
  
  ```
#### Multiple Search Selection
   A selection dropdown can allow multiple search selections.
  ```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
    const options = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ]
    
    const DropdownExampleMultipleSelection = () =>  (
      <Dropdown placeholder='Skills' fluid multiple search selection options={options} />
    )
  DropdownExampleMultipleSelection()
```

#### Search Dropdown
   A dropdown can be searchable.
  ```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
  
  const languageOptions = [{"key":"Arabic","text":"Arabic","value":"Arabic"},{"key":"Chinese","text":"Chinese","value":"Chinese"},{"key":"Danish","text":"Danish","value":"Danish"},{"key":"Dutch","text":"Dutch","value":"Dutch"},{"key":"English","text":"English","value":"English"},{"key":"French","text":"French","value":"French"},{"key":"German","text":"German","value":"German"},{"key":"Greek","text":"Greek","value":"Greek"},{"key":"Hungarian","text":"Hungarian","value":"Hungarian"},{"key":"Italian","text":"Italian","value":"Italian"},{"key":"Japanese","text":"Japanese","value":"Japanese"},{"key":"Korean","text":"Korean","value":"Korean"},{"key":"Lithuanian","text":"Lithuanian","value":"Lithuanian"},{"key":"Persian","text":"Persian","value":"Persian"},{"key":"Polish","text":"Polish","value":"Polish"},{"key":"Portuguese","text":"Portuguese","value":"Portuguese"},{"key":"Russian","text":"Russian","value":"Russian"},{"key":"Spanish","text":"Spanish","value":"Spanish"},{"key":"Swedish","text":"Swedish","value":"Swedish"},{"key":"Turkish","text":"Turkish","value":"Turkish"},{"key":"Vietnamese","text":"Vietnamese","value":"Vietnamese"}]
  const DropdownExampleSearchDropdown = () => (
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='world'
      options={languageOptions}
      search
      text='Select Language'
    />
  )
  DropdownExampleSearchDropdown()
```

#### Inline
   A dropdown can be formatted to appear inline in other content.
  ```jsx
  const friendOptions = [
          {
             text: 'Jenny Hess',
             value: 'Jenny Hess',
             image: { avatar: true, src: '/img/jenny.jpg' },
         },
         {
                text: 'Justen Hess',
                value: 'Justen Hess',
                image: { avatar: true, src: '/img/justen.jpg' },
         },
        {
               text: 'Elliot Fu',
               value: 'Elliot Fu',
               image: { avatar: true, src: '/img/elliot.jpg' },
         },
          {
               text: 'Christian',
               value: 'Christian',
               image: { avatar: true, src: '/img/christian.jpg' },
          },
        {
               text: 'Matt',
               value: 'Matt',
               image: { avatar: true, src: '/img/matt.jpg' },
         },
          {
               text: 'Stevie',
               value: 'Stevie',
               image: { avatar: true, src: '/img/stevie.jpg' },
          }]
    const Dropdown = require('semantic-ui-react').Dropdown;
    const DropdownExampleInline = () => (
      <span>
        Show me posts by{' '}
        <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
      </span>
    )
    DropdownExampleInline()
```
#### Pointing
   A dropdown can be formatted so that its menu is pointing.
```jsx
 const Dropdown = require('semantic-ui-react').Dropdown;
 const Menu = require('semantic-ui-react').Menu;
const DropdownExamplePointing = () => (
  <Menu>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text='Shopping' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Forums</Menu.Item>
    <Menu.Item>Contact Us</Menu.Item>
  </Menu>
)


DropdownExamplePointing()
```


```jsx
 const Dropdown = require('semantic-ui-react').Dropdown;
 const Menu = require('semantic-ui-react').Menu;

const DropdownExamplePointingTwo = () => (
  <Menu vertical>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text='Messages' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Inbox</Dropdown.Item>
        <Dropdown.Item>Starred</Dropdown.Item>
        <Dropdown.Item>Sent Mail</Dropdown.Item>
        <Dropdown.Item>Drafts (143)</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Spam (1009)</Dropdown.Item>
        <Dropdown.Item>Trash</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Browse</Menu.Item>
    <Menu.Item>Help</Menu.Item>
  </Menu>
)
DropdownExamplePointingTwo()
```
#### Floating
   A dropdown menu can appear to be floating below an element.
```jsx
 const Dropdown = require('semantic-ui-react').Dropdown;
 const Button = require('semantic-ui-react').Button;
 const options = [
   { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
   { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
   { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
 ]
 
 const DropdownExampleFloating = () => (
   <Button.Group color='teal'>
     <Button>Save</Button>
     <Dropdown options={options} floating button  />
   </Button.Group>
 )
 DropdownExampleFloating()
 ```
 #### Icon
  A dropdown menu can contain an icon.
 ```jsx
  const Dropdown = require('semantic-ui-react').Dropdown;
  const DropdownExampleIcon = () => (
    <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Filter by tag' />
        <Dropdown.Divider />
        <Dropdown.Item icon='attention' text='Important' />
        <Dropdown.Item icon='comment' text='Announcement' />
        <Dropdown.Item icon='conversation' text='Discussion' />
      </Dropdown.Menu>
    </Dropdown>
  )
  DropdownExampleIcon()
  ```
#### Description
A dropdown menu can contain a description.
```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
    const DropdownExampleDescription = () => (
      <Dropdown text='Filter Tags' floating labeled button icon='filter' className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by tag' />
          <Dropdown.Divider />
          <Dropdown.Item description='2 new' text='Important' />
          <Dropdown.Item description='10 new' text='Hopper' />
          <Dropdown.Item description='5 new' text='Discussion' />
        </Dropdown.Menu>
      </Dropdown>
    )
    DropdownExampleDescription()
```
#### Label
A dropdown menu can contain a label.
```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
    const DropdownExampleLabel = () => (
      <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header icon='tags' content='Filter by tag' />
          <Dropdown.Divider />
          <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Important' />
          <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} text='Announcement' />
          <Dropdown.Item label={{ color: 'black', empty: true, circular: true }} text='Discussion' />
        </Dropdown.Menu>
      </Dropdown>
    )
    DropdownExampleLabel()
```
#### Message
A dropdown menu can contain a message.
```jsx
    const Dropdown = require('semantic-ui-react').Dropdown;
    const Message = require('semantic-ui-react').Message;
    const DropdownExampleMessage = () => (
      <Dropdown text='Login' icon='filter' floating labeled button className='icon'>
        <Dropdown.Menu>
          <Message error header='Error' content='You must log-in to see all categories' />
        </Dropdown.Menu>
      </Dropdown>
    )
    DropdownExampleMessage()
```
#### Image
A dropdown menu can contain an image.
```jsx
const friendOptions = [
          {
             text: 'Jenny Hess',
             value: 'Jenny Hess',
             image: { avatar: true, src: '/img/jenny.jpg' },
         },
         {
                text: 'Justen Hess',
                value: 'Justen Hess',
                image: { avatar: true, src: '/img/justen.jpg' },
         },
        {
               text: 'Elliot Fu',
               value: 'Elliot Fu',
               image: { avatar: true, src: '/img/elliot.jpg' },
         },
          {
               text: 'Christian',
               value: 'Christian',
               image: { avatar: true, src: '/img/christian.jpg' },
          },
        {
               text: 'Matt',
               value: 'Matt',
               image: { avatar: true, src: '/img/matt.jpg' },
         },
          {
               text: 'Stevie',
               value: 'Stevie',
               image: { avatar: true, src: '/img/stevie.jpg' },
          }]
    const Dropdown = require('semantic-ui-react').Dropdown;
    const DropdownExampleImage = () => (
      <Dropdown text='Add user' icon='add user' floating labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Header content='People You Might Know' />
          {friendOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
        </Dropdown.Menu>
      </Dropdown>
    )
    DropdownExampleImage()
```

#### Loading
A dropdown can show that it is currently loading data.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]

const DropdownExampleLoading = () => <Dropdown text='Dropdown' options={options} loading className="hide-in-test" />
DropdownExampleLoading()
```
#### Active
An active dropdown has its menu open.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]
const DropdownExampleActive = () => (<Dropdown text='Dropdown Active' options={options} open />)
DropdownExampleActive()
```

#### Disabled
A disabled dropdown menu does not allow user interaction.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [{ key: 1, text: 'Choice 1', value: 1 }, { key: 2, text: 'Choice 2', value: 2 }]
const DropdownExampleDisabled = () => <Dropdown text='Dropdown' options={options} disabled />

DropdownExampleDisabled()
```
A disabled dropdown item does not allow user interaction.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2, disabled: true },
  { key: 3, text: 'Choice 3', value: 3 },
]

const DropdownExampleDisabledItem = () => <Dropdown text='Dropdown' options={options} />

DropdownExampleDisabledItem()
```

#### Scrolling
A dropdown can have its menu scroll.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;

let getOptions = [{"key":0,"text":"Choice 0","value":0},{"key":1,"text":"Choice 1","value":1},{"key":2,"text":"Choice 2","value":2},{"key":3,"text":"Choice 3","value":3},{"key":4,"text":"Choice 4","value":4},{"key":5,"text":"Choice 5","value":5},{"key":6,"text":"Choice 6","value":6},{"key":7,"text":"Choice 7","value":7},{"key":8,"text":"Choice 8","value":8},{"key":9,"text":"Choice 9","value":9},{"key":10,"text":"Choice 10","value":10},{"key":11,"text":"Choice 11","value":11},{"key":12,"text":"Choice 12","value":12},{"key":13,"text":"Choice 13","value":13},{"key":14,"text":"Choice 14","value":14},{"key":15,"text":"Choice 15","value":15}]

const DropdownExampleScrolling = () => (
  <Dropdown placeholder='Select choice' scrolling options={getOptions} />
)

DropdownExampleScrolling()
```


#### Compact
A compact dropdown has no minimum width.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;

let getOptions = [{"key":0,"text":"0","value":0},{"key":1,"text":"1","value":1},{"key":2,"text":"2","value":2}]

const DropdownExampleCompact = () => (
   <Dropdown placeholder='Com' compact selection options={getOptions} />
)

DropdownExampleCompact()
```
#### Fluid
A dropdown can take the full width of its parent.   
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const Menu = require('semantic-ui-react').Menu;
let getOptions = [{"key":0,"text":"Choice 0","value":0},{"key":1,"text":"Choice 1","value":1},{"key":2,"text":"Choice 2","value":2}]
const DropdownExampleFluid = () => (
  <Menu vertical>
    <Menu.Item as='a'>Link 1</Menu.Item>
    <Menu.Item as='a'>Link 2</Menu.Item>
    <Menu.Item header>All Sections</Menu.Item>
    <Menu.Item>
      <Dropdown placeholder='More' fluid selection options={getOptions} />
    </Menu.Item>
  </Menu>
)

DropdownExampleFluid()
```

#### Menu Direction
A dropdown menu or sub-menu can specify the direction it should open.   
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const Menu = require('semantic-ui-react').Menu;
const options = [
  { key: 1, text: 'This is a super long item', value: 1 },
  { key: 2, text: 'Dropdown direction can help', value: 2 },
  { key: 3, text: 'Items are kept within view', value: 3 },
]

const DropdownExampleMenuDirection = () => (
  <Menu>
    <Dropdown item simple text='Left menu' direction='right' options={options} />
    <Menu.Menu position='right'>
      <Dropdown item simple text='Right menu' direction='right' options={options} />
    </Menu.Menu>
  </Menu>
)

DropdownExampleMenuDirection()
```

#### Open On Focus
A dropdown that opens when it is focussed on.
```jsx
const friendOptions = [
          {
             text: 'Jenny Hess',
             value: 'Jenny Hess',
             image: { avatar: true, src: '/img/jenny.jpg' },
         },
         {
                text: 'Justen Hess',
                value: 'Justen Hess',
                image: { avatar: true, src: '/img/justen.jpg' },
         },
        {
               text: 'Elliot Fu',
               value: 'Elliot Fu',
               image: { avatar: true, src: '/img/elliot.jpg' },
         },
          {
               text: 'Christian',
               value: 'Christian',
               image: { avatar: true, src: '/img/christian.jpg' },
          },
        {
               text: 'Matt',
               value: 'Matt',
               image: { avatar: true, src: '/img/matt.jpg' },
         },
          {
               text: 'Stevie',
               value: 'Stevie',
               image: { avatar: true, src: '/img/stevie.jpg' },
          }]
const Dropdown = require('semantic-ui-react').Dropdown;
const DropdownExampleOpenOnFocus = () => (
  <div>
    <Dropdown placeholder='I open on focus' openOnFocus selection options={friendOptions} />{' '}
    <Dropdown
      placeholder='I do not open on focus'
      openOnFocus={false}
      selection
      options={friendOptions}
    />
  </div>
)

DropdownExampleOpenOnFocus()
```

#### Close On Blur
A dropdown that closes when it blurs
```jsx
const friendOptions = [
          {
             text: 'Jenny Hess',
             value: 'Jenny Hess',
             image: { avatar: true, src: '/img/jenny.jpg' },
         },
         {
                text: 'Justen Hess',
                value: 'Justen Hess',
                image: { avatar: true, src: '/img/justen.jpg' },
         },
        {
               text: 'Elliot Fu',
               value: 'Elliot Fu',
               image: { avatar: true, src: '/img/elliot.jpg' },
         },
          {
               text: 'Christian',
               value: 'Christian',
               image: { avatar: true, src: '/img/christian.jpg' },
          },
        {
               text: 'Matt',
               value: 'Matt',
               image: { avatar: true, src: '/img/matt.jpg' },
         },
          {
               text: 'Stevie',
               value: 'Stevie',
               image: { avatar: true, src: '/img/stevie.jpg' },
          }]
const Dropdown = require('semantic-ui-react').Dropdown;
const DropdownExampleCloseOnBlur = () => (
  <div>
    <Dropdown placeholder='I close on blur' closeOnBlur selection options={friendOptions} />{' '}
    <Dropdown
      placeholder='I stay open on blur'
      closeOnBlur={false}
      selection
      options={friendOptions}
    />
  </div>
)

DropdownExampleCloseOnBlur()
```

#### Close On Change
A multiple selection dropdown can close when the user changes its value.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const getOptions = [{"key":0,"text":"Choice 0","value":0},{"key":1,"text":"Choice 1","value":1},{"key":2,"text":"Choice 2","value":2},{"key":3,"text":"Choice 3","value":3},{"key":4,"text":"Choice 4","value":4}]
const DropdownExampleCloseOnChange = () => (
  <div>
    <Dropdown
      multiple
      search
      selection
      closeOnChange
      options={getOptions}
      placeholder='I close on change'
    />{' '}
    <Dropdown
      multiple
      search
      selection
      options={getOptions}
      placeholder='I stay open on change'
    />
  </div>
)

DropdownExampleCloseOnChange()

```

#### Trigger
A dropdown can render a node in place of the text.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const Icon = require('semantic-ui-react').Icon;

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DropdownTriggerExample = () => <Dropdown trigger={trigger} options={options} />

DropdownTriggerExample()
 ```
 
 
#### Multiple Custom Label
A "multiple" dropdown can render customized label for selected items.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const renderLabel = label => ({
  color: 'blue',
  content: `Customized label - ${label.text}`,
  icon: 'check',
})

const DropdownExampleMultipleCustomLabel = () => (
  <Dropdown
    multiple
    selection
    fluid
    options={options}
    placeholder='Choose an option'
    renderLabel={renderLabel}
  />
)
DropdownExampleMultipleCustomLabel()

```

#### Item Content
A dropdown item can be rendered differently inside the menu.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const Header = require('semantic-ui-react').Header;

const options = [
  {
    key: 1,
    text: 'Mobile',
    value: 1,
    content: <Header icon='mobile' content='Mobile' subheader='The smallest size' />,
  },
  {
    key: 2,
    text: 'Tablet',
    value: 2,
    content: <Header icon='tablet' content='Tablet' subheader='The size in the middle' />,
  },
  {
    key: 3,
    text: 'Desktop',
    value: 3,
    content: <Header icon='desktop' content='Desktop' subheader='The largest size' />,
  },
]

const DropdownExampleItemContent = () => (
  <Dropdown selection fluid options={options} placeholder='Choose an option' />
)
DropdownExampleItemContent()
```

#### Search Input
A dropdown implements a search input shorthand.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;

const options = [
  { key: 100, text: '100', value: 100 },
  { key: 200, text: '200', value: 200 },
  { key: 300, text: '300', value: 300 },
  { key: 400, text: '400', value: 400 },
]

const DropdownExampleSearchInput = () => (
  <Dropdown
    search
    searchInput={{ type: 'number' }}
    selection
    options={options}
    placeholder='Select amount...'
  />
)
DropdownExampleSearchInput()
```

#### Custom Search Function
A dropdown allows you to provide your own search function.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const _ = require('lodash');

const caseSensitiveSearch = (options, query) => {
  const re = new RegExp(_.escapeRegExp(query))
  return options.filter(opt => re.test(opt.text))
}

const options = [
  { key: 'a', value: 'a', text: 'UPPERCASE' },
  { key: 'b', value: 'b', text: 'lowercase' },
]

const DropdownExampleCustomSearchFunction = () => (
  <Dropdown
    fluid
    options={options}
    placeholder={'Try to search for case or CASE'}
    search={caseSensitiveSearch}
    selection
  />
)
DropdownExampleCustomSearchFunction()
```


#### Upward
A dropdown can open its menu upward.
```jsx
const Dropdown = require('semantic-ui-react').Dropdown;
const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const DropdownExampleUpwardSelection = () => (
  <Dropdown upward search selection options={options} placeholder='Choose an option' />
)

DropdownExampleUpwardSelection()
```

```jsx
const Dropdown = require('semantic-ui-react').Dropdown;

const options = [
  { key: 'new', text: 'New', value: 'new' },
  { key: 'save', text: 'Save as...', value: 'save' },
  { key: 'edit', text: 'Edit', value: 'edit' },
]

const DropdownExampleUpward = () => <Dropdown upward floating options={options} text='File' />

DropdownExampleUpward()
```











