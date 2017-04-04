Top Nav Example
      
      const logo = require('../../assets/tripwire-logo.png');
      <TopNav>
        <TopNav.Content align="left">
            <img src={logo} alt="TripWire Logo" width="75" />
        </TopNav.Content>
        <TopNav.Content align="right">
              Audrey&nbsp;&nbsp;
              <TopNav.LocalTime />
        </TopNav.Content>
      </TopNav>

## TopNav Subcomponents ##

```javascript
Content
      align : one of [ left, right ]

LocalTime
      // no props available
```
 