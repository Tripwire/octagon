#### Top Nav

```js
const logo = require('../../assets/tripwire-logo.png');
<TopNav id='test-top-nav'>
  <TopNav.Content className='dummy-test-classname'>
    <img src={logo} alt="TripWire Logo" width="75" style={{ marginTop: '4px' }} />
  </TopNav.Content>
  <TopNav.Content link>
    Audrey
  {/* dropdown or logout link goes here */}
  </TopNav.Content>
</TopNav>
```
