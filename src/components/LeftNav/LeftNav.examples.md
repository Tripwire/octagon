Simple Card Example
        
        const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
        const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');
      <div style={{height: '200px'}}>
      <LeftNav style={{maxHeight: '200px', minHeight: '200px'}}>                
            <LeftNav.MenuItem active image={iconDashboard} />      
            <LeftNav.MenuItem image={iconOperations} />
      </LeftNav>
      </div>

#### General Notes ####

Use the MenuItem subcomponent to place content.  Use the active prop to set the
item to active styling.  You can also use an onClick handler to deal with
navigating the user to the appropriate location.

Manually applied style on this component is only to prevent overrun inside of Styleguide.

#### Supported Fragments ####

```javascript
`MenuItem`     : Area to display content in the left nav
```