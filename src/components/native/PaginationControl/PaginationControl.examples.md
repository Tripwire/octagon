#### Enabled Pagination

```js
<PaginationControl totalItems={20} perPage={5} navigateToPage={() => {}} />
```

#### Disabled Pagination

```js
<PaginationControl totalItems={20} perPage={5} controlsDisabled={true} navigateToPage={() => {}} />
```

Handle the pagination of the resource with navigateToPage.  An example of usage:

```js static
navigateToPage(page) {
  this.setState({ currentNotes: this.getNotes(page) })
}

getNotes(pageNum) {
  return this.state.allNotes.slice(pageNum * this.state.perPage - this.state.perPage, pageNum * this.state.perPage)
}
```
