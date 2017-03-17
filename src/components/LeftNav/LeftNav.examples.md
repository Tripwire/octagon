Simple Card Example
        
        const iconDashboard = require('../../assets/icon_mainav_dash_selected.svg');
        const iconOperations = require('../../assets/icon_mainav_ops_selected.svg');
      <div style={{height: '200px'}}>
      <LeftNav>                
            <LeftNav.MenuItem active image={iconDashboard} />      
            <LeftNav.MenuItem image={iconOperations} />
      </LeftNav>
      </div>

Richer Example



#### Supported Fragments ####

```javascript

`PrimaryAction`     : left button area
`Title`             : maybe title
`ActionButton`      : secondary action button
`Widget`            : container for stats
`Widget.Label`      : label formatted text
`Widget.Value`      : value formatted text
`Drawer`            : collapsable content

```