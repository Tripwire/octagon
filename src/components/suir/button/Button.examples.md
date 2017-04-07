## Button Generic

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire'>Test button</Button>

## Button Disabled

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire' disabled >Some Copy </Button>

## Button Active

    const Button = require('semantic-ui-react').Button;
    <Button className='tripwire' active>
        Some Copy
    </Button>

## Button Positive

    const Button = require('semantic-ui-react').Button;
    <Button positive className='tripwire'>
      <i className='icon_check' style={{marginRight: '10px'}} />
        Positive
      </Button>

## Button Negative

    const Button = require('semantic-ui-react').Button;
    <Button negative className='tripwire'>
    <i className='icon_close' style={{marginRight: '10px'}} />
    Negative
    </Button>

## Button Icon

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

See full input documentation [here](http://react.semantic-ui.com/elements/button)
