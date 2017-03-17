Simple Card Example
      
      <ThinCard data={{id: 0}} folder={false}>
        <ThinCard.PrimaryAction><StopStartButton isStopped /></ThinCard.PrimaryAction>
        <ThinCard.Title>I'm stopped</ThinCard.Title>
      </ThinCard>

Richer Example

    <ThinCard data={{id: 0}} folder drawer={<ThinCard.Drawer>test</ThinCard.Drawer>}>
        <ThinCard.PrimaryAction><StopStartButton /></ThinCard.PrimaryAction>
        <ThinCard.Title>I'm ready to go!</ThinCard.Title>
        <ThinCard.ActionButton>MANAGE</ThinCard.ActionButton>
        <ThinCard.Widget borderLeft>
          <ThinCard.Widget.Label style={{marginRight: '30px'}}>
            LABEL
          </ThinCard.Widget.Label>
          <ThinCard.Widget.Value>
            1234
          </ThinCard.Widget.Value>
        </ThinCard.Widget>
        <ThinCard.Widget borderLeft>
          <ThinCard.Widget.Label style={{marginRight: '30px'}}>
            FOO
          </ThinCard.Widget.Label>
          <ThinCard.Widget.Value>
            BAR
          </ThinCard.Widget.Value>
        </ThinCard.Widget>
      </ThinCard>

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