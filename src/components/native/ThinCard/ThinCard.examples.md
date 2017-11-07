#### Simple Card Example

```js
<ThinCard data={{id: 0}} folder={false}>
  <ThinCard.PrimaryAction><StopStartButton isStopped /></ThinCard.PrimaryAction>
  <ThinCard.Title>I'm stopped</ThinCard.Title>
</ThinCard>
```

#### Richer Example

```js
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
```

Richer Example (Expanded)

```js
<ThinCard data={{id: 0}} folder expanded={true} drawer={<ThinCard.Drawer expanded={true}><div style={{padding: '10px'}}>test</div></ThinCard.Drawer>}>
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
```

#### Supported Fragments

```js static
<ThinCard.ActionButton />  // secondary action button
<ThinCard.Drawer />        // collapsable content
<ThinCard.PrimaryAction /> // left button area
<ThinCard.Title />         // title
<ThinCard.Widget />        // container for stats
<ThinCard.Widget.Label />  // label formatted text
<ThinCard.Widget.Value />  // value formatted text
```
