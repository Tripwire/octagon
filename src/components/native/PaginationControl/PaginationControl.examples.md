#### Enabled Pagination

```js
initialState = { page: 1 }
;<PaginationControl page={state.page} onChange={page => setState({ page })}
  onBlur={() => null} />
```

#### Disabled Pagination

```js
initialState = { page: 2 }
;<PaginationControl page={state.page} onChange={page => setState({ page })}
  onBlur={() => null} disabled />
```

#### Enabled Pagination within Container

```js
initialState = { page: 1 }
;<section style={{border: '1px solid black', padding: '1em'}}>
  <div>My page is: {state.page}</div>
  <PaginationControl page={state.page} totalPages={20}
    onBlur={page => { setState({ page: page || 1}) }}
    onChange={page => { setState({ page }) }}
  />
</section>
```
