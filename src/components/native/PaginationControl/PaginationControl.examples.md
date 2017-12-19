#### Enabled Pagination

```js
<PaginationControl totalPages={20} navigateToPage={() => {}} />
```

#### Disabled Pagination

```js
<PaginationControl totalPages={1} controlsDisabled navigateToPage={() => {}} />
```

#### Enabled Pagination within Container

```js


function navigateToPage(page) {
debugger
  this.setState({ currentNotes: this.getNotes(page) })
}


class PaginationContainer extends React.Component {

	constructor () {
		this.state = { pageNumber: 1 }
	}

	render () {
		return (
			<section style={{border: '1px solid black'}}>
				<div>My page is:{this.state.pageNumber}</div>
  			<PaginationControl totalPages={20} navigateToPage={(page) => { this.setState({pageNumber: page}) }} />
  		</section>
		)
	}

};

	<PaginationContainer></PaginationContainer>

```

Handle the pagination of the resource with navigateToPage.  An example of usage:

```js static
navigateToPage(page) {
  this.setState({ pageNumber: page })
}

```
