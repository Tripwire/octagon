Standard Large Card
     
     const Flexbox = require('flexbox-react').default;
     <div style={{height: '275px'}}>
     <LargeCard showCard>
        <LargeCard.Gutter color='critical' />
        <LargeCard.Content style={{height: '275px'}}>
          <Flexbox flexDirection='column' flexGrow={1} className='column'>
            <Flexbox>
                <LargeCard.Title title='test' description='some description' />
                <FavoriteButton isFavorited />
            </Flexbox>
            <Flexbox flexDirection="column">
                Place left column content here
                <LargeCard.Stat name='assets' value={294} />
            </Flexbox>
          </Flexbox>
          <Flexbox flexDirection='column' flexGrow={3}>
            <Flexbox flexDirection='row' marginBottom="35px">
              <LargeCard.KeyValue name='item' value={29} />
              <LargeCard.KeyValue name='item' value={29} />
              <LargeCard.KeyValue name='item' value={29} />
            </Flexbox>
            <LargeCard.RecentList items={[
            {
                id: 0,
                state: 'normal',
                name: 'text',
                status: 'OPERATION COMPLETED',
                date: '9/12/2016'
            }
            ]} />
          </Flexbox>
        </LargeCard.Content>
        <LargeCard.Close  />
        <LargeCard.Action label='test' />
      </LargeCard>
      </div>

#### Available Fragments ####

```javascript

`Title`             : Title & Description
`Action`            : primary action button
`Close`             : close button
`Gutter`            : colored bar to indicate status
`KeyValue`          : key value pairs for data
`RecentList`        : Support for recent list of operations
`Stat`              : Horizontally laid out out stats using accent color

```