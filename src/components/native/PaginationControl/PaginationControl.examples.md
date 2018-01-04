#### Enabled Pagination

```js
initialState = { page: 1 }
;<PaginationControl
	page={state.page}
	totalPages={10}
	onPageChange={obj => setState({ page: obj.page })}
/>
```

#### Disabled Pagination

```js
initialState = { page: 2 }
;<PaginationControl
	page={state.page}
	totalPages={2}
	onPageChange={() => null}
	disabled
/>
```

#### Pagination with unknown Total Number of Pages

```js
initialState = { page: 1 }
;<PaginationControl
	page={state.page}
	onPageChange={obj => setState({ page: obj.page })}
/>
```

#### Enabled Pagination within Container

```js
initialState = { page: 1 }
;<section style={{border: '1px solid gray', padding: '0', display: 'inline-block'}}>
  <div style={{padding: '4px', borderBottom: '1px solid gray'}}>
  	<p>My Page: {state.page}</p>
  </div>
  <div style={{padding: '4px 0'}}>
	  <PaginationControl
	  	page={state.page}
	  	totalPages={20}
	    onPageChange={obj => {
	    	if (obj.error) {
					console.error(obj.error)
	    	} else {
	    		setState({ page: obj.page}) 
	    	}
	    }}
	  />
  </div>

</section>
```
