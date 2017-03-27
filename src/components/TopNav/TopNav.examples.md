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

Use the align prop to lay content out.  Accepted values are 'left' and 'right'.  