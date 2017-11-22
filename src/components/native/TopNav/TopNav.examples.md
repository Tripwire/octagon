#### Top Nav

```js
const logo = require('../../../assets/tripwire-logo.png');
<TopNav>
  <TopNav.Content align="left">
    <img src={logo} alt="TripWire Logo" width="75" />
  </TopNav.Content>
  <TopNav.Content align="right">
    Audrey
    <TopNav.LocalTime date={new Date(100000)} />
  </TopNav.Content>
</TopNav>
```
