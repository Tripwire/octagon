#### Variant A Layout

```js
<MicroCard
  variant='a'
  style={{marginRight: '10px'}}
  gutter='critical'
>
  <MicroCard.Header style={{background: 'seashell'}}>
    [header] Variant A
    <FavoriteButton isFavorited style={{float: 'right'}} />
  </MicroCard.Header>
  <MicroCard.Content primary style={{background: 'lightgoldenrodyellow'}}>
    [primary]
  </MicroCard.Content>
  <MicroCard.Content secondary style={{background: 'bisque'}}>
    [secondary]
  </MicroCard.Content>
</MicroCard>
```

#### Variant A Demo

```js
<MicroCard
  variant='a'
  style={{marginRight: '10px'}}
  gutter='critical'
>
  <MicroCard.Header>
    Tropical Vacation Destination
    <FavoriteButton isFavorited style={{float: 'right'}} />
  </MicroCard.Header>
  <MicroCard.Content primary>
    Tahiti.  Great place. 🏖
    <br />
    Blah blah blah
  </MicroCard.Content>
  <MicroCard.Content secondary>
    <span>💸 BUY NOW <br />💸 AND SAVE</span>
  </MicroCard.Content>
</MicroCard>
```
