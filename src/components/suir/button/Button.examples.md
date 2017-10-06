## Generic

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button className=''>Generic</Button>
      <Button active className=''>Generic Active</Button>
      <Button disabled className=''>Generic Disabled</Button>
    </div>

## Primary

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button primary className=''>Primary</Button>
      <Button primary active className=''>Primary Active</Button>
      <Button primary disabled className=''>Primary Disabled</Button>
    </div>

## Secondary

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button secondary className=''>Secondary</Button>
      <Button secondary active className=''>Secondary Active</Button>
      <Button secondary disabled className=''>Secondary Disabled</Button>
    </div>

## Positive Button

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button positive className=''>Positive</Button>
      <Button positive active className=''>Positive Active</Button>
      <Button positive disabled className=''>Positive Disabled</Button>
      <Button positive className=''>
        <i className='icon_check' style={{marginRight: '10px'}} />
        Positive with Icon
      </Button>
    </div>

## Negative Button

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button negative className=''>Negative</Button>
      <Button negative active className=''>Negative Active</Button>
      <Button negative disabled className=''>Negative Disabled</Button>
      <Button negative className=''>
        <i className='icon_close' style={{marginRight: '10px'}} />
        Negative with Icon
      </Button>
    </div>

## Button Groups

    const Button = require('semantic-ui-react').Button;
    <div>
      <div>
        <Button.Group>
          <Button>Generic One</Button>
          <Button>Generic Two</Button>
          <Button>Generic Three</Button>
        </Button.Group>
      </div>
      <p />
      <div>
          <Button.Group>
          <Button positive>Positive One</Button>
          <Button positive>Positive Two</Button>
          <Button positive>Positive Three</Button>
        </Button.Group>
      </div>
      <p />
      <div>
        <Button.Group>
          <Button negative>Negative One</Button>
          <Button negative>Negative Two</Button>
          <Button negative>Negative Three</Button>
        </Button.Group>
      </div>
      <p />
      <div>
        <Button.Group>
          <Button >Generic One</Button>
          <Button positive>Positive Two</Button>
          <Button negative>Negative Three</Button>
        </Button.Group>
      </div>
    </div>

## Icon Button

    const Button = require('semantic-ui-react').Button;
    <div>
      <div>
        <Button icon>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Normal
      </div>
      <div>
        <Button icon active>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Active
      </div>
      <div>
        <Button icon disabled>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Disabled
      </div>
    </div>

## Adjacent Buttons

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button>Good Button</Button>
      <Button color='red'>Best Button</Button>
      <Button color='purple'>!! OMG FAVORITE Button !!</Button>
    </div>

## Color Buttons

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button color='red'>red</Button>
      <Button color='orange'>orange</Button>
      <Button color='yellow'>yellow</Button>
      <Button color='olive'>olive</Button>
      <Button color='green'>green</Button>
      <Button color='teal'>teal</Button>
      <Button color='blue'>blue</Button>
      <Button color='violet'>violet</Button>
      <Button color='purple'>purple</Button>
      <Button color='pink'>pink</Button>
      <Button color='brown'>brown</Button>
      <Button color='grey'>grey</Button>
      <Button color='black'>black</Button>
      <Button color='positive'>positive</Button>
      <Button color='negative'>negative</Button>
    </div>

See full input documentation [here](http://react.semantic-ui.com/elements/button)
