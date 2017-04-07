MircoCard Standard

    <MicroCard cardContent={{
        id: 0,
        isFavorited: true,
        title: 'test'
        }}
    style={{marginRight: '10px'}}  >
        <MicroCard.Gutter color='critical' />
        <MicroCard.Content cardContent={{
        id: 0,
        isFavorited: true,
        title: 'test'
        }} />
        <MicroCard.Favorite isFavorited />
        <MicroCard.Count value={27} />
        <MicroCard.Action  />
      </MicroCard>

MicroCard Rich

      const Flexbox = require('flexbox-react');
      const alertIconUri = require('../../assets/alert-icon.svg');
      <MicroCard cardContent={{
        id: 0,
        isFavorited: true,
        title: 'test'
        }} style={{marginRight: '10px'}} >
        <MicroCard.Gutter color='blue' />
        <MicroCard.Content title="Test" >
            <MicroCard.Content.Status status='critical' />
            <MicroCard.Content.Message status='critical'>
                <h4>connection error</h4>
                <h3>DATABASE</h3>
            </MicroCard.Content.Message>
        </MicroCard.Content>
        <MicroCard.Favorite isFavorited />
        <MicroCard.Count value={27} />
        <MicroCard.Action  />
      </MicroCard>
