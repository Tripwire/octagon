Enabled Pagination:

    <PaginationControl totalItems={20} perPage={5} />

Disabled Pagination:

    <PaginationControl totalItems={20} perPage={5} controlsDisabled={true} />

Handle the pagination of the resource with navigateToPage.  An example of usage:

```javascript
navigateToPage(page) { 
    this.setState({ currentNotes: this.getNotes(page) }); 
}

getNotes(pageNum) { 
    return this.state.allNotes.slice( pageNum * this.state.perPage - this.state.perPage, pageNum * this.state.perPage); 
}
`````