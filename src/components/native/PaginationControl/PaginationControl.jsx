import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import '../../../styles/components/pagination-control.css'

class PaginationControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      inputPage: 1,
      totalPages: props.totalPages
    }
    this.gotoFirstPage = this.gotoFirstPage.bind(this)
    this.gotoPrevPage = this.gotoPrevPage.bind(this)
    this.gotoNextPage = this.gotoNextPage.bind(this)
    this.gotoLastPage = this.gotoLastPage.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveInput = this.saveInput.bind(this)
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this)
  }

  gotoFirstPage () {
    this.gotoPage(1)
  }

  gotoPrevPage () {
    this.gotoPage(this.state.currentPage - 1)
  }

  gotoNextPage () {
    this.gotoPage(this.state.currentPage + 1)
  }

  gotoLastPage () {
    this.gotoPage(this.state.totalPages)
  }

  gotoPage (page) {
    if (this.isValidPage(page)) {
      this.props.navigateToPage(page)
      this.setState({currentPage: page})
      this.setState({inputPage: page})
    }
  }

  greaterThanFirstPage (page) {
    const firstPage = 1
    return page >= firstPage
  }

  lessThanLastPage (page) {
    const lastPage = this.state.totalPages
    return page <= lastPage
  }

  isValidPage (page) {
    return (this.greaterThanFirstPage(page) && this.lessThanLastPage(page))
  }

  isDisabled (btnType) {
    const controlsDisabled = this.props.controlsDisabled
    const disabledClass = 'pagination_disabled'

    if (controlsDisabled) {
      return disabledClass
    } else if (btnType) {
      const btnMap = {'prev': -1, 'next': 1}
      const linkedPage = this.state.currentPage + btnMap[btnType]
      const invalidPage = !this.isValidPage(linkedPage)

      if (invalidPage) {
        return disabledClass
      }
    }
    return ''
  }

  saveInput () {
    let inputValue = this.state.inputPage

    if (!this.greaterThanFirstPage(inputValue)) {
      inputValue = 0
    } else if (!this.lessThanLastPage(inputValue)) {
      inputValue = this.state.totalPages
    }

    this.gotoPage(inputValue)
  }

  handleInputKeyDown (event) {
    const ENTER = 13
    if (event.keyCode === ENTER) {
      this.saveInput()
    }
  }

  handleInputChange (event) {
    const inputValue = parseInt(event.target.value)
    if (inputValue) {
      this.setState({inputPage: inputValue})
    }
  }

  render () {
    let inputPage = this.state.inputPage
    var isDisabledAttribute = this.props.controlsDisabled ? 'disabled' : false
    return (
      <Flexbox flexDirection='row' className='pagination'>
        <button className={`pagination__button pagination__prev ${this.isDisabled('prev')}`} onClick={this.gotoFirstPage} tabIndex={`${this.isDisabled('prev') ? -1 : 0}`}>
          <i className='arrow_carrot-2left' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__prev ${this.isDisabled('prev')}`} onClick={this.gotoPrevPage} tabIndex={`${this.isDisabled('prev') ? -1 : 0}`}>
          <i className='arrow_carrot-left' aria-hidden='true' />
        </button>
        <Flexbox className={`pagination__page-number ${this.isDisabled()}`} alignItems='center'>
          <span>Page</span>
          <input className={`pagination__input ${this.isDisabled()}`} type='text' value={`${inputPage}`} disabled={isDisabledAttribute}
            onChange={this.handleInputChange} onBlur={this.saveInput} onKeyDown={this.handleInputKeyDown} tabIndex={`${this.isDisabled() ? -1 : 0}`} />
          <span> of</span>
          <span className='pagination__page-total'>{this.state.totalPages}</span>
        </Flexbox>
        <button className={`pagination__button pagination__next ${this.isDisabled('next')}`} onClick={this.gotoNextPage} tabIndex={`${this.isDisabled('next') ? -1 : 0}`}>
          <i className='arrow_carrot-right' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__next ${this.isDisabled('next')}`} onClick={this.gotoLastPage} tabIndex={`${this.isDisabled('next') ? -1 : 0}`}>
          <i className='arrow_carrot-2right' aria-hidden='true' />
        </button>
      </Flexbox>
    )
  }
}

PaginationControl.propTypes = {
  totalPages: PropTypes.number.isRequired,
  navigateToPage: PropTypes.func.isRequired,
  controlsDisabled: PropTypes.bool
}

export default PaginationControl
