#### Default modal dialog with close button

```jsx
const Modal = require('semantic-ui-react').Modal;
const Header = require('semantic-ui-react').Header;
const Button = require('semantic-ui-react').Button;
const Icon = require('semantic-ui-react').Icon;
<div>
<Modal size={'small'}  trigger={<Button>Small Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder'}><Icon className='ei icon_info_alt' size='large' />This is a small modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button primary>OK</Button>
    </Modal.Actions>
</Modal> 
<br/><br/>

<Modal size={'medium'}  trigger={<Button>Medium Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder'}><Icon className='ei icon_info_alt' size='large' />This is a medium modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Your computer has a low battery, so you should act immediatly to keep from loosing your work. Do you want save your work now?</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button secondary>Cancel</Button>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>

<Modal size={'large'}  trigger={<Button>Large Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder'}><Icon className='ei icon_info_alt' size='large' />This is a large modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>To restore enough memory for programs to work correctly. Save your files and then close or restart all open programs. Your battery is running low. Do you want to restart your computer now?</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button secondary>Cancel</Button>
       <Button primary>OK</Button>
  </Modal.Actions>
</Modal>
</div>
```

#### Default Line modal dialog with close button

```jsx
const Modal = require('semantic-ui-react').Modal;
const Header = require('semantic-ui-react').Header;
const Button = require('semantic-ui-react').Button;
const Icon = require('semantic-ui-react').Icon;
<div>
<Modal size={'small'}  trigger={<Button>Small Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'border'}><Icon className='ei icon_info_alt' size='large' />This is a small modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'border'}>
       <Button primary>OK</Button>
    </Modal.Actions>
</Modal> 
<br/><br/>

<Modal size={'medium'}  trigger={<Button>Medium Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'border'}><Icon className='ei icon_info_alt' size='large' />This is a medium modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Your computer has a low battery, so you should act immediatly to keep from loosing your work. Do you want save your work now?</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'border'}>
       <Button secondary>Cancel</Button>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>

<Modal size={'large'}  trigger={<Button>Large Modal</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'border'}><Icon className='ei icon_info_alt' size='large' />This is a large modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>To restore enough memory for programs to work correctly. Save your files and then close or restart all open programs. Your battery is running low. Do you want to restart your computer now?</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'border'}>
       <Button secondary>Cancel</Button>
       <Button primary>OK</Button>
  </Modal.Actions>
</Modal>
</div>
```


#### modal with Info success warning Errom dialog 

```jsx
const Modal = require('semantic-ui-react').Modal;
const Header = require('semantic-ui-react').Header;
const Button = require('semantic-ui-react').Button;
const Icon = require('semantic-ui-react').Icon;
<div>


<Modal size={'info'}  trigger={<Button>Information message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder'}><Icon className='ei icon_info_alt' size='large' />This is a information message</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Your computer has a low battery, so you should act immediatly to keep from loosing your work. Do you want save your work now?</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>
<Modal size={'info'}  trigger={<Button>success message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder success'}><Icon className='ei icon_check_alt2' size='large' />This is a success message</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>You have successfully read this important imformation. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>  
<Modal size={'info'}  trigger={<Button>warning message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder warning'}><Icon className='ei icon_error-triangle_alt' size='large' />This is a medium modal size</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Your account will get locked for security purposes due to excessive consecutive failed logins.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>
<Modal size={'info'}  trigger={<Button>error message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder error'}><Icon className='ei icon_error-circle_alt' size='large' />This is a error message</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>The operation timed-out before this asset was fully scanned. Aww yeah, you successfully read this important error message.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>


</div>
```


#### modal with Confirmation dialog 

```jsx
const Modal = require('semantic-ui-react').Modal;
const Header = require('semantic-ui-react').Header;
const Button = require('semantic-ui-react').Button;
const Icon = require('semantic-ui-react').Icon;
<div>


<Modal size={'info'}  trigger={<Button>System problems</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder'}><Icon className='ei icon_info_alt' size='large' />System problems</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>The operating system, hardware device, network, or program has failed or is not in the state required to perform a task.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
  <Button secondary>Try again</Button>
       <Button primary>OK</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>
<Modal size={'info'}  trigger={<Button>success message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder success'}><Icon className='ei icon_check_alt2' size='large' />Your application is updated.</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Your computer was restarted to finish installing updates. Click to see which updates were installed.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
      <Button secondary>Show Summary</Button>
      <Button primary>Close</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>  
<Modal size={'info'}  trigger={<Button>warning message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder warning'}><Icon className='ei icon_error-triangle_alt' size='large' />Do you want to uninstall the Support files?</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>Microsoft SQL Server 2005 Tools Express Edition is dependent on these files. If you unistall them, this product will be broken. You can prevent damage from happening by uninstalling the product first.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
      <Button secondary>Uninstall</Button>
      <Button primary>Cancel</Button>
  </Modal.Actions>
  
</Modal>
<br/><br/>
<Modal size={'info'}  trigger={<Button>error message</Button>} closeIcon="ei icon_close close">
  <Modal.Header className={'noBorder error'}><Icon className='ei icon_error-circle_alt' size='large' />You don’t have access to perform this task</Modal.Header>
  <Modal.Content>
    <Modal.Description>
      <p>To perform this task, contact the administrator.</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions className={'noBorder'}>
      <Button secondary>Retry</Button>
       <Button primary>Close</Button>
  </Modal.Actions>
  
</Modal>


</div>
```