    const Popup = require('semantic-ui-react').Popup;
    const Button = require('semantic-ui-react').Button;
    <div>
        <Popup
          trigger={<Button className=''>Popup Neutral</Button>}
          content='Neutral Popup Content'
          className='grey'
          positioning='bottom left' />
        <br /><br />
        <Popup
            trigger={<Button className=''>Popup Critical</Button>}
            content='Critical Popup Content'
            className='red'
            positioning='top right'/>
        <br /><br />
        <Popup
            trigger={<Button className=''>Popup Warning</Button>}
            content='Warning Popup Content'
            className='yellow'
            positioning='bottom left' />
    </div>

Custom colors as classNames grey, yellow, red.  See full popup documentation [here](http://react.semantic-ui.com/modules/popup)
