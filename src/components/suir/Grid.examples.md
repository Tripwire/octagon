#### No whitespace (pure css)

    <div className='ui padded equal height grid' style={{height: '100%'}}>
      <div className='sixteen wide stretched column'>
        <div className='ui equal height grid'>
          <div className='eight wide red column'>A</div>
          <div className='eight wide green column'>B</div>
          <div className='eight wide orange column'>C</div>
          <div className='eight wide blue column'>D</div>
        </div>
      </div>
    </div>


####  No whitespace grid (SUIR)

    const Grid = require('semantic-ui-react').Grid;
    const colProps = {
      verticalAlign: null,
      textAlign: 'center'
    };
    const styles = {
      gridRoot: { height: '100%' },
      a: { backgroundColor: 'red' },
      b: { backgroundColor: 'blue' },
      c: { backgroundColor: 'pink' },
      d: { backgroundColor: 'salmon' }
    };
    <Grid padded style={styles.gridRoot}>
      <Grid.Column style={styles.a} width={8} {...colProps}>A (note, the parent component must be also have the full height/width)</Grid.Column>
      <Grid.Column style={styles.b} width={8} {...colProps}>B - full size no gutter semantic-ui grid! http://jsfiddle.net/ea04tkwo/. We've stretched #root's height in .storybook/styles.css</Grid.Column>
      <Grid.Column style={styles.c} width={8} {...colProps}>C - maximize this viewports root? https://github.com/storybooks/react-storybook/issues/131</Grid.Column>
      <Grid.Column style={styles.d} width={8} {...colProps}>D</Grid.Column>
    </Grid>


#### No whitespace, 2 column

    const Grid = require('semantic-ui-react').Grid;
    const colProps = { textAlign: 'center' };
    const styles = {
      gridRoot: { height: '100%' },
      a: { backgroundColor: 'red' },
      b: { backgroundColor: 'blue' },
      c: { backgroundColor: 'pink' },
      d: { backgroundColor: 'salmon' }
    };
    <Grid padded style={styles.gridRoot}>
      <Grid.Column style={styles.a} width={8} {...colProps}>
        <Grid padded style={styles.gridRoot}>
          <Grid.Column verticalAlign='middle'>
            A (note, the parent component must be also have the full height/width)
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column style={styles.b} width={8} {...colProps}>B - full size no gutter semantic-ui grid! http://jsfiddle.net/ea04tkwo/. We've stretched #root's height in .storybook/styles.css</Grid.Column>
    </Grid>
    
#### Grid
A basic grid.
```jsx

const _ = require('lodash');
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;


const columns = _.times(16, i => (
  <Grid.Column key={i}>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

GridExampleGrid()
```


#### Divided
A grid can have dividers between its columns.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleDividedNumber()
```
You can also use semantic names for columns.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleDividedPhrase = () => (
  <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleDividedPhrase()
```

#### Vertically Divided
A grid can have dividers between rows.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleVerticallyDivided()
```


#### Celled
A grid can have rows divided into cells.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleCelled = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleCelled()
```

#### Internally Celled
A grid can have rows divisions only between internal rows.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleCelledInternally()
```


#### Rows
A row is a horizontal grouping of columns.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleRows = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleRows()
```

#### Columns
Columns each contain gutters giving them equal spacing from other columns.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
GridExampleColumns()
```

#### Floated
A column can sit flush against the left or right edge of a row.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleFloated = () => (
  <Grid>
    <Grid.Column floated='left' width={5}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid>
)

GridExampleFloated()
```

#### Column Width
A column can vary in width taking up more than a single grid column.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleColumnWidth = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

GridExampleColumnWidth()
```

#### Column Count
A grid can have a different number of columns per row.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleColumnCount()
```


#### Equal Width
A row can automatically resize all elements to split the available width evenly.
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;
const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>1</Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
)

GridExampleEqualWidthColumn()

```
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;
const GridExampleEqualWidthRow = () => (
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleEqualWidthRow()
```

#### Stretched
A row can automatically resize all elements to split the available height evenly.
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;
const GridExampleStretched = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleStretched()
```
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;
const Image = require('semantic-ui-react').Image;
const GridExampleStretchedEqual = () => (
  <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleStretchedEqual()
```

#### Padded
A grid can preserve its vertical and horizontal gutters on first and last columns.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExamplePadded = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters.</p>

    <Grid columns={2} padded>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

GridExamplePadded()
```
The following grid has vertical gutters.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExamplePaddedVertically = () => (
  <div>
    <p>The following grid has vertical gutters.</p>

    <Grid columns={2} padded='vertically'>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

GridExamplePaddedVertically()
```
The following grid has horizontal gutters.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExamplePaddedHorizontally = () => (
  <div>
    <p>The following grid has horizontal gutters.</p>

    <Grid columns={2} padded='horizontally'>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

GridExamplePaddedHorizontally()
```

#### Relaxed
A grid can increase its gutters to allow for more negative space.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleRelaxed = () => (
  <Grid relaxed columns={4}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

GridExampleRelaxed()
```


#### Colored
A grid row or column can be colored.
```jsx
const _ = require('lodash');
const Grid = require('semantic-ui-react').Grid;
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

const GridExampleColoredColumn = () => (
  <Grid columns={5} padded>
    {colors.map(color => (
      <Grid.Column color={color} key={color}>
        {_.capitalize(color)}
      </Grid.Column>
    ))}
  </Grid>
)

GridExampleColoredColumn()
```
```jsx
const _ = require('lodash');
const Grid = require('semantic-ui-react').Grid;
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

const GridColoredRowExample = () => (
  <Grid padded>
    {colors.map(color => (
      <Grid.Row color={color} key={color}>
        <Grid.Column>{_.capitalize(color)}</Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

GridColoredRowExample()
```

#### Floated
A column can sit flush against the left or right edge of a row.
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;

const GridExampleInverted = () => (
  <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          1
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          2
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          3
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleInverted()
```

#### Floated
A column can sit flush against the left or right edge of a row.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleCentered = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleCentered()

```
#### Text Alignment
A grid, row, or column can specify its text alignment.
```jsx
const Menu = require('semantic-ui-react').Menu;
const Grid = require('semantic-ui-react').Grid;
const GridExampleTextAlignmentCenter = () => (
  <Grid textAlign='center' columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleTextAlignmentCenter()
```
```jsx
const Menu = require('semantic-ui-react').Menu;
const Grid = require('semantic-ui-react').Grid;
const GridExampleTextAlignmentRight = () => (
  <Grid textAlign='right' columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleTextAlignmentRight()
```


#### Vertical Alignment
A grid, row, or column can specify its vertical alignment to have all its columns vertically centered.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleVerticalAlignment = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <br />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleVerticalAlignment()
```

```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleVerticalAlignmentRow = () => (
  <Grid columns={4} centered>
    <Grid.Row verticalAlign='top'>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <br />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='middle'>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <br />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='bottom'>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <br />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleVerticalAlignmentRow()
```

#### Containers
A container can be used alongside a grid to provide a responsive, fixed width container for wrapping the contents of a page.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

GridExampleContainer()
```

#### Doubling
A grid can double its column width on tablet and mobile sizes.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleDoubling = () => (
  <Grid doubling columns={5}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

GridExampleDoubling()
```

#### Stackable
A grid can have its columns stack on-top of each other after reaching mobile breakpoints.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const Segment = require('semantic-ui-react').Segment;
const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)

GridExampleStackable()
```


#### Reversed

A grid or row can specify that its columns should reverse order at different device sizes.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedComputer = () => (
  <Grid reversed='computer' columns='equal'>
    <Grid.Row>
      <Grid.Column>Computer A Fourth</Grid.Column>
      <Grid.Column>Computer A Third</Grid.Column>
      <Grid.Column>Computer A Second</Grid.Column>
      <Grid.Column>Computer A First</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer B Fourth</Grid.Column>
      <Grid.Column>Computer B Third</Grid.Column>
      <Grid.Column>Computer B Second</Grid.Column>
      <Grid.Column>Computer B First</Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleReversedComputer()
```

```jsx

const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedTablet = () => (
  <Grid reversed='tablet' columns='equal'>
    <Grid.Column>Tablet Fourth</Grid.Column>
    <Grid.Column>Tablet Third</Grid.Column>
    <Grid.Column>Tablet Second</Grid.Column>
    <Grid.Column>Tablet First</Grid.Column>
  </Grid>
)

GridExampleReversedTablet()
```

```jsx

const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedMobile = () => (
  <Grid reversed='mobile' columns='equal'>
    <Grid.Column>Mobile Fourth</Grid.Column>
    <Grid.Column>Mobile Third</Grid.Column>
    <Grid.Column>Mobile Second</Grid.Column>
    <Grid.Column>Mobile First</Grid.Column>
  </Grid>
)

GridExampleReversedMobile()
```
```jsx

const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedComputerVertically = () => (
  <Grid reversed='computer vertically'>
    <Grid.Row>
      <Grid.Column>Computer Row 4</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 3</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 1</Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleReversedComputerVertically()
```
```jsx

const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedTabletVertically = () => (
  <Grid reversed='tablet vertically'>
    <Grid.Row>
      <Grid.Column>Tablet Row 4</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 3</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 1</Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleReversedTabletVertically()
```
A grid or row can specify that its columns should reverse order on multiple device sizes.
```jsx
const Grid = require('semantic-ui-react').Grid;
const GridExampleReversedMultiple = () => (
  <Grid reversed='computer tablet' columns='equal'>
    <Grid.Row>
      <Grid.Column>Computer and Tablet Fourth</Grid.Column>
      <Grid.Column>Computer and Tablet Third</Grid.Column>
      <Grid.Column>Computer and Tablet Second</Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleReversedMultiple()
```
#### Device Visibility
A column or row can appear only for a specific device, or screen sizes.
```jsx
const Segment = require('semantic-ui-react').Segment;
const Grid = require('semantic-ui-react').Grid;
const GridExampleOnly = () => (
  <Grid>
    <Grid.Row columns={2} only='large screen'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='widescreen'>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='mobile'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column only='computer'>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column only='tablet mobile'>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4} only='computer'>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3} only='tablet'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleOnly()
```

```jsx
const Grid = require('semantic-ui-react').Grid;
const Segment = require('semantic-ui-react').Segment;

const GridExampleOnlyMultiple = () => (
  <Grid>
    <Grid.Row columns={2} only='mobile tablet'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} only='tablet computer'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} only='large screen widescreen'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

GridExampleOnlyMultiple()
```

#### Responsive Width

A column can specify a width for a specific device.
```jsx
const Image = require('semantic-ui-react').Image;
const Grid = require('semantic-ui-react').Grid;
const GridExampleResponsiveWidth = () => (
  <div>
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>

    <Grid>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

GridExampleResponsiveWidth()
```