#### Enabled Pagination

```js
initialState = { page: 1 }
;<PaginationControl page={state.page} totalPages={10} onPageChange={page => setState({ page })} />
```

#### Disabled Pagination

```js
initialState = { page: 2 }
;<PaginationControl page={state.page} totalPages={2} onPageChange={() => null} disabled />
```

#### Pagination with unknown Total Number of Pages

```js
initialState = { page: 1 }
;<PaginationControl page={state.page} onPageChange={page => setState({ page })} />
```

#### Enabled Pagination within Container

```js
initialState = { page: 1 }
;<section style={{border: '1px solid gray', padding: '0', display: 'inline-block'}}>
  <div style={{padding: '4px'}}>My page : {state.page}</div>

  <PaginationControl
  	page={state.page}
  	totalPages={20}
    onPageChange={page => {
    	setState({ page: page || state.page}) 
    }}
    onPageError={
    	page => { console.error(page)
    }}
  />

</section>
```
