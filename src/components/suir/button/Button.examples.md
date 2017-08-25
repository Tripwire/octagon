## Positive Button

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button positive className=''>Positive</Button>
      <Button positive className=''>
        <i className='icon_check' style={{marginRight: '10px'}} />
        Positive with Icon
      </Button>
      <Button positive active className=''>Positive Active</Button>
      <Button positive disabled className=''>Positive Disabled</Button>
    </div>

## Negative Button

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button negative className=''>
        <i className='icon_close' style={{marginRight: '10px'}} />
        Negative
      </Button>
      <Button negative active className=''>Negative Active</Button>
      <Button negative disabled className=''>Negative Disabled</Button>
    </div>

## Generic

    const Button = require('semantic-ui-react').Button;
    <div>
      <Button className=''>Generic</Button>
      <Button active className=''>Generic Active</Button>
      <Button disabled className=''>Generic Disabled</Button>
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

## Test

    const Button = require('semantic-ui-react').Button;
    <div>
      <div>
          <Button>Generic </Button>
          <Button disabled>Generic disabled</Button>
      </div>
      <p />
      <div>
          <Button positive>Positive </Button>
          <Button positive disabled>Positive disabled</Button>
      </div>
      <p />
      <div>
          <Button negative>Negative </Button>
          <Button negative disabled>Negative disabled</Button>
      </div>
    </div>


## Active Button

    const Button = require('semantic-ui-react').Button;
    <Button className='' active>
        Some Copy
    </Button>

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

See full input documentation [here](http://react.semantic-ui.com/elements/button)
