## Generic

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire'>Test button</Button>

## Disabled Button

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire' disabled >Some Copy </Button>

## Active Button

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire' active>
        Some Copy
    </Button>

## Positive Button

    const Button = require('semantic-ui-react').Button;
    <Button positive className='tripwire'>
      <i className='icon_check' style={{marginRight: '10px'}} />
        Positive
      </Button>

## Negative Button

    const Button = require('semantic-ui-react').Button;
    <Button negative className='tripwire'>
    <i className='icon_close' style={{marginRight: '10px'}} />
    Negative
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
