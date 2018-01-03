#### Enabled Pagination

```js
initialState = { page: 1 }
;<PaginationControl page={state.page} onPageChange={page => setState({ page })} />
```

#### Disabled Pagination

```js
initialState = { page: 2 }
;<PaginationControl page={state.page} onPageChange={() => null} disabled />
```

#### Enabled Pagination within Container

```js
initialState = { page: 1 }
;<section style={{border: '1px solid black', padding: '1em'}}>
  <div>My page : {state.page}</div>
  <PaginationControl page={state.page} totalPages={20}
    onPageChange={page => {
    	setState({ page: page || state.page}) 
    }}
    onPageError={page => { console.error(page) }}
  />
</section>
```
