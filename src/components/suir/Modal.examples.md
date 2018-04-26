#### Full screen modal dialog with close button

```js
const Modal = require('semantic-ui-react').Modal;
const Header = require('semantic-ui-react').Header;
const Button = require('semantic-ui-react').Button;

<Modal size='fullscreen' trigger={<Button>Show Modal</Button>} closeIcon='close'>
  <Modal.Header>Select a Photo</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <Header>Default Profile Image</Header>
      <p>We've found the following gravatar image associated with your e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </Modal.Description>
  </Modal.Content>
</Modal>
```
