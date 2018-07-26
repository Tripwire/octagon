#### Basic

```js
const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');

<SideNav style={{maxHeight: '200px', minHeight: '200px'}}>
  <SideNav.MenuItem active image={iconDashboard} />
  <SideNav.MenuItem image={iconOperations} />
</SideNav>
```

#### Scaled

```js
const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');

<SideNav style={{maxHeight: '200px', minHeight: '200px', width: '100px'}}>
  <SideNav.MenuItem>
    <img src={iconDashboard} style={{ height: '75px', width: '75px' }} />
  </SideNav.MenuItem>
  <SideNav.MenuItem active>
    <img src={iconOperations} style={{ height: '75px', width: '75px' }} />
  </SideNav.MenuItem>
</SideNav>
```
