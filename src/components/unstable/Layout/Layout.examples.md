### Basic Layout

```js
const padding = { padding: '10px' };
const styles = {
  layout: {
  },
  header: {
    background: 'seashell',
    ...padding
  },
  nav: {
    background: 'lightgoldenrodyellow',
    ...padding
  },
  body: {
    background: 'bisque',
    ...padding
  }
};
<Layout className='hide-in-test'>
  <Layout.Header style={styles.header}>Header</Layout.Header>
  <Layout.Nav style={styles.nav}>Nav</Layout.Nav>
  <Layout.Body style={styles.body}>Body</Layout.Body>
</Layout>
```

### App Example

```js
const iconDashboard = require('../../../assets/icon_mainav_dash_selected.svg');
const iconOperations = require('../../../assets/icon_mainav_ops_selected.svg');
const logo = require('../../../assets/tripwire-logo.png');
<Layout className='hide-in-test'>
  <Layout.Header>
    <TopNav id='test-top-nav'>
      <TopNav.Content className='dummy-test-classname' align="left">
        <img src={logo} alt="TripWire Logo" width="75" />
      </TopNav.Content>
      <TopNav.Content align="right">
        Audrey
      {/* dropdown or logout link goes here */}
      </TopNav.Content>
    </TopNav>
  </Layout.Header>
  <Layout.Nav>
    <LeftNav style={{maxHeight: '200px', minHeight: '200px'}}>
      <LeftNav.MenuItem active image={iconDashboard} />
      <LeftNav.MenuItem image={iconOperations} />
    </LeftNav>
  </Layout.Nav>
  <Layout.Body style={{padding: '10px'}}>
    <h1>Body</h1>
  </Layout.Body>
</Layout>
```
