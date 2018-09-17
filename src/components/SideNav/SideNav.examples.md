#### Basic

```js
const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');

<SideNav style={{maxHeight: '200px', minHeight: '200px'}}>
  <SideNav.MenuItem active image={iconDashboard} />
  <SideNav.MenuItem image={iconOperations} />
</SideNav>
```

#### React-Router NavLink

SideNav.MenuItem Supports wrapping a react-router NavLink object.  This greatly simplifies creating a menu that links to react-router sicne the active highlighting is handled automatically.

Sadly this code doesn't render correctly in styleguidest since it doesn't import react-router, but still the code example should be useful.

```js
const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');
const { MemoryRouter, NavLink } = require('react-router-dom');
<MemoryRouter>
  <SideNav style={{maxHeight: '200px', minHeight: '200px'}}>
    <SideNav.MenuItem as={NavLink} to='/link2' image={iconOperations} />
    <SideNav.MenuItem as={NavLink} to='/link1' active image={iconDashboard} />
  </SideNav>
</MemoryRouter>
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
