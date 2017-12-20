#### Enabled Pagination

```js
initialState = { page: 1 }
;<PaginationControl page={state.page} onChange={page => setState({ page })} />
```

#### Disabled Pagination

```js
initialState = { page: 2 }
;<PaginationControl page={state.page} onChange={page => setState({ page })} disabled />
```

#### Enabled Pagination within Container

```js
initialState = { page: 1 }
;<section style={{border: '1px solid black', padding: '1em'}}>
  <div>My page is: {state.page}</div>
  <PaginationControl page={state.page} totalPages={20} onChange={page => { setState({ page}) }} />
</section>
```
