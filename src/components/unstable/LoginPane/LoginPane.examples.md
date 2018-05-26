### Login Pane Basic

```js
const { BasicLoginPane } = require('./LoginPaneExamples');
<BasicLoginPane />
```

### Login Pane CompactY

```js
const { BasicLoginPane } = require('./LoginPaneExamples');
<BasicLoginPane compactY />
```


##### LoginPane full

```js
const { Button, Input } = require('semantic-ui-react');
<LoginPane className='hide-in-test'>
  <LoginPane.Logo>
    <h1 style={{
      padding: '20px',
      background: 'darkslategray',
      color: 'white'
    }}>
      LOGO
    </h1>
  </LoginPane.Logo>
  <LoginPane.Username>
    <Input {...{
      'data-test': 'username',
      placeholder: 'Username',
      onKeyDown: this.enterSubmit,
      onChange: this.handleUserChange,
      autoFocus: true,
      autoComplete: 'off',
      autoCapitalize: 'off'
    }} />
  </LoginPane.Username>
  <LoginPane.Password>
    <Input {...{
      id: 'login-password',
      'data-test': 'password',
      type: 'password',
      placeholder: 'Password',
      onKeyDown: this.enterSubmit,
      onChange: this.handlePassChange,
      autoCapitalize: 'off',
      autoComplete: 'off'
    }} />
  </LoginPane.Password>
  <LoginPane.Submit>
    <Button primary>
      Login
    </Button>
  </LoginPane.Submit>
  <LoginPane.Footer>
    &copy; 2014 - {new Date().getFullYear()} Company, Inc.<br />
    Use of this software is subject to license restrictions,<br />
    see{' '}
    <a href='#'>
      https://www.bestsite.com/terms
    </a>{' '}
    for more information.
  </LoginPane.Footer>
</LoginPane>
```
