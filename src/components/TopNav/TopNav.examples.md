Top Nav Example
      
      const logo = require('../../assets/tripwire-logo.png');
      <TopNav>
        <TopNav.Content align="left">
            <img src={logo} alt="TripWire Logo" width="75" />
        </TopNav.Content>
        <TopNav.Content align="right">
            <div className="nav__link">
                Audrey&nbsp; &nbsp;<i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
              <TopNav.LocalTime />
              </div>
        </TopNav.Content>
      </TopNav>

