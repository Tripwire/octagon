#### Simple Label

```js
const Label = require('semantic-ui-react').Label;
const Icon = require('semantic-ui-react').Icon;
<Label>
  <Icon name='mail' /> 23
</Label>
```


```jsx
   const Label = require('semantic-ui-react').Label;
   const img = require('semantic-ui-react').img;
      const LabelExampleImage = () => (
        <div>
          <Label as='a' image>
            <img src='/img/justen.jpg' />
            justen
          </Label>
          <Label as='a' image>
            <img src='/img/elliot.jpg' />
            Elliot
          </Label>
          <Label as='a' image>
            <img src='/img/stevie.jpg' />
            Stevie
          </Label>
        </div>
      )
LabelExampleImage()
```
```jsx
   const Label = require('semantic-ui-react').Label;
   const img = require('semantic-ui-react').img;

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='/img/stevie.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='/img/jenny.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='/img/christian.jpg' />
      Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

LabelExampleImage()
```
```jsx
 const Label = require('semantic-ui-react').Label;
 const Icon = require('semantic-ui-react').Icon;

const LabelExampleIcon = () => (
  <div>
    <Label image>
      <img src='/img/elliot.jpg' />
      Adrienne
      <Icon name='delete' />
    </Label>
    <Label image>
      <img src='/img/christian.jpg' />
      Zoe
      <Icon name='delete' />
    </Label>
    <Label image>
      <img src='/img/matt.jpg' />
      Nan
      <Icon name='delete' />
    </Label>
  </div>
)

LabelExampleIcon()
```

#### Pointing
A label can point to content next to it
```js
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
    <input type='password' autoComplete='off' placeholder='Password' />
  </Form.Field>
  <Form.Field inline>
    <Label basic color='red' pointing='right'>Your password must be 6 characters or more</Label>
    <input type='password' autoComplete='off' placeholder='Password' />
  </Form.Field>
</Form>
```
```js
const Form = require('semantic-ui-react').Form;
const Divider = require('semantic-ui-react').Divider;
const Label = require('semantic-ui-react').Label;
const LabelExamplePointing = () => (
  <Form>
    <Form.Field>
      <input type='text' placeholder='First name' />
      <Label basic color='red' pointing>
        Please enter a value
      </Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label basic color='red' pointing='below'>
        Please enter a value
      </Label>
      <input type='text' placeholder='Last Name' />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Username' />
      <Label basic color='red' pointing='left'>
        That name is taken!
      </Label>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <Label basic color='red' pointing='right'>
        Your password must be 6 characters or more
      </Label>
      <input type='password' placeholder='Password' />
    </Form.Field>
  </Form>
)

LabelExamplePointing()
```
#### Corner
A label can position itself in the corner of an element
```js
const Grid = require('semantic-ui-react').Grid;
const Image = require('semantic-ui-react').Image;
const LabelExampleCorner = () => (
    <Grid columns={2}>
      <Grid.Column>
        <Image
          fluid
          label={{ as: 'a', corner: 'left', icon: 'heart' }}
          src='https://react.semantic-ui.com/images/wireframe/image.png'
        />
      </Grid.Column>
  
      <Grid.Column>
        <Image
          fluid
          label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
          src='https://react.semantic-ui.com/images/wireframe/image.png'
        />
      </Grid.Column>
    </Grid>
  )
  
  LabelExampleCorner()
```

#### Tag
A label can appear as a tag
```js
const Label = require('semantic-ui-react').Label;

const LabelExampleTag = () => (
  <div>
    <Label as='a' tag>
      New
    </Label>
     <Label as='a' color='red' tag>
          Upcoming
        </Label>
        <Label as='a' color='teal' tag>
          Featured
        </Label>
   </div>
)

LabelExampleTag()
```

#### Ribbon
A label can appear as a ribbon attaching itself to an element
```js
const Grid = require('semantic-ui-react').Grid;
const Image = require('semantic-ui-react').Image;
const Label = require('semantic-ui-react').Label;
const Segment = require('semantic-ui-react').Segment;
 
const LabelExampleRibbon = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>
          Overview
        </Label>
        <span>Account Details</span>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='blue' ribbon>
          Community
        </Label>
        <span>User Reviews</span>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>
          Specs
        </Label>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='teal' ribbon='right'>
          Reviews
        </Label>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)
LabelExampleRibbon()
```


```js
const Grid = require('semantic-ui-react').Grid;
const Image = require('semantic-ui-react').Image;
const Label = require('semantic-ui-react').Label;
const Segment = require('semantic-ui-react').Segment;
 
const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'black', content: 'Hotel', icon: 'hotel', ribbon: true }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'blue', content: 'Food', icon: 'spoon', ribbon: true }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    </Grid.Column>
  </Grid>
)

LabelExampleRibbonImage()
```
#### Attached
A label can attach to a content segment
```js
const Grid = require('semantic-ui-react').Grid;
const Image = require('semantic-ui-react').Image;
const Label = require('semantic-ui-react').Label;
const Segment = require('semantic-ui-react').Segment;

const LabelExampleAttached = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Segment padded>
          <Label attached='top'>HTML</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom'>CSS</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='top right'>Code</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment padded>
          <Label attached='top left'>View</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom left'>User View</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom right'>Admin View</Label>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

LabelExampleAttached()
```

#### Horizontal
A horizontal label is formatted to label content along-side it horizontally
```js
const List = require('semantic-ui-react').List;
const Image = require('semantic-ui-react').Image;
const Label = require('semantic-ui-react').Label;
const Segment = require('semantic-ui-react').Segment;
const LabelExampleHorizontal = () => (
  <List divided selection>
    <List.Item>
      <Label color='red' horizontal>
        Fruit
      </Label>
      Kumquats
    </List.Item>
    <List.Item>
      <Label color='purple' horizontal>
        Candy
      </Label>
      Ice Cream
    </List.Item>
    <List.Item>
      <Label color='red' horizontal>
        Fruit
      </Label>
      Orange
    </List.Item>
    <List.Item>
      <Label horizontal>Dog</Label>
      Poodle
    </List.Item>
  </List>
)

LabelExampleHorizontal()
```

#### Horizontal
A horizontal label is formatted to label content along-side it horizontally
```js
const Menu = require('semantic-ui-react').List;
const Icon = require('semantic-ui-react').Icon;
const Label = require('semantic-ui-react').Label;
const LabelExampleFloating = () => (
  <Menu compact>
    <Menu.Item as='a'>
      <Icon name='mail' /> Messages
      <Label color='red' floating>
        22
      </Label>
    </Menu.Item>
  
  </Menu>
)

LabelExampleFloating()
```

#### Detail
A label can contain a detail
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleDetail = () => (
  <Label>
    Dogs
    <Label.Detail>214</Label.Detail>
  </Label>
)

LabelExampleDetail()
```

#### Icon
A label can include an icon
```js
const Label = require('semantic-ui-react').Label;
const Icon = require('semantic-ui-react').Icon;
const LabelExampleIcon = () => (
  <div>
    <Label as='a'>
      <Icon name='mail' />
      Mail
    </Label>
    <Label as='a'>
      Tag
      <Icon name='delete' />
    </Label>
  </div>
)

LabelExampleIcon()
```

You can do the same using shorthands.
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleIconShorthand = () => <Label as='a' content='Mail' icon='mail' />

LabelExampleIconShorthand()
```

#### Image
A label can include an image
```js
const Label = require('semantic-ui-react').Label;
const Image = require('semantic-ui-react').Image;
const LabelExampleImage = () => (
  <div>
    <Label as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a'>
      <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>
  </div>
)

LabelExampleImage()
```

You can do the same using shorthands.
```js
const Label = require('semantic-ui-react').Label;

const LabelExampleImageShorthand = () => {
  const imageProps = {
    avatar: true,
    spaced: 'right',
    src: '/img/elliot.jpg',
  }

  return <Label as='a' content='Elliot' image={imageProps} />
}

LabelExampleImageShorthand()
```
#### Link
A label can be a link or contain an item that links
```js
const Label = require('semantic-ui-react').Label;
const Icon = require('semantic-ui-react').Icon;
const LabelExampleLink = () => (
  <Label as='a'>
    <Icon name='mail' /> 23
  </Label>
)
LabelExampleLink()
```

#### Circular
A label can be circular
```js
const Label = require('semantic-ui-react').Label;
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const LabelExampleCircular = () => (
  <div>
    {colors.map(color => (
      <Label circular color={color} key={color}>
        2
      </Label>
    ))}
  </div>
)

LabelExampleCircular()
```

```js
const Label = require('semantic-ui-react').Label;

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const LabelExampleCircularEmpty = () => (
  <div>{colors.map(color => <Label circular color={color} empty key={color} />)}</div>
)

LabelExampleCircularEmpty()
```

#### Basic
A label can reduce its complexity
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleBasic = () => (
  <div>
    <Label as='a' basic>
      Basic
    </Label>
    <Label as='a' basic pointing>
      Pointing
    </Label>
    <Label as='a' basic image>
      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' basic color='red' pointing>
      Red Pointing
    </Label>
    <Label as='a' basic color='blue'>
      Blue
    </Label>
  </div>
)

LabelExampleBasic()
``` 

#### Colored
A label can have different colors
```js
const Label = require('semantic-ui-react').Label;
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const LabelExampleColored = () => (
  <div>
    {colors.map(color => (
      <Label color={color} key={color}>
        {_.capitalize(color)}
      </Label>
    ))}
  </div>
)

LabelExampleColored()
``` 

#### Size
A label can be small or large
```js
const Label = require('semantic-ui-react').Label;
const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

const LabelExampleSize = () => (
  <div>
    {sizes.map(size => (
      <Label key={size} size={size}>
        {_.capitalize(size)}
      </Label>
    ))}
  </div>
)

LabelExampleSize()
``` 

#### Group Size
Labels can share sizes together
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleGroupSize = () => (
  <Label.Group size='huge'>
    <Label>Fun</Label>
    <Label>Happy</Label>
    <Label>Smart</Label>
    <Label>Witty</Label>
  </Label.Group>
)

LabelExampleGroupSize()
``` 

#### Colored Group
Labels can share colors together
```js
const Label = require('semantic-ui-react').Label;
const Icon = require('semantic-ui-react').Icon;
const LabelExampleGroupSize = () => (
  <Label.Group color='blue'>
    <Label as='a'>
      Fun
      <Icon name='close' />
    </Label>
    <Label as='a'>
      Happy
      <Label.Detail>22</Label.Detail>
    </Label>
    <Label as='a'>Smart</Label>
    <Label as='a'>Insane</Label>
    <Label as='a'>Exciting</Label>
  </Label.Group>
)

LabelExampleGroupSize()
``` 

#### Tag Group
A label can reduce its complexity
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleGroupTag = () => (
  <Label.Group tag>
    <Label as='a'>$10.00</Label>
    <Label as='a'>$19.99</Label>
    <Label as='a'>$24.99</Label>
    <Label as='a'>$30.99</Label>
    <Label as='a'>$10.25</Label>
  </Label.Group>
)

LabelExampleGroupTag()
``` 

#### Circular Group
Labels can share shapes
```js
const Label = require('semantic-ui-react').Label;
const LabelExampleGroupCircular = () => (
  <Label.Group circular>
    <Label as='a'>11</Label>
    <Label as='a'>22</Label>
    <Label as='a'>33</Label>
    <Label as='a'>44</Label>
    <Label as='a'>141</Label>
  </Label.Group>
)

LabelExampleGroupCircular()
``` 