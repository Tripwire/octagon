#### Large Card Gutters

```js
<div style={{height: '150px'}}>
  <LargeCard showCard>
    {/* preferred - use a constant */}
    <LargeCard.Gutter color={LargeCard.Gutter.STATE_COLOR_MAP.CRITICAL} />
    <LargeCard.Gutter color={LargeCard.Gutter.STATE_COLOR_MAP.WARNING} />
    <LargeCard.Gutter color={LargeCard.Gutter.STATE_COLOR_MAP.NORMAL} />
    {/* not preferred - avoid picking your own colors */}
    <LargeCard.Gutter color='salmon' />
    <LargeCard.Gutter color='#efefef' />
    <LargeCard.Gutter color='#abc' />
  </LargeCard>
</div>
```
