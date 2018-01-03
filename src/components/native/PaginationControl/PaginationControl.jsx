import PropTypes from 'prop-types'
import React from 'react'
import '../../../styles/components/pagination-control.css'
import isNil from 'lodash/isNil'
import invariant from 'invariant'

const NAV_VERB_TO_INT_MAP = { prev: -1, next: 1 }
const DISABLED_ATTRIBUTES = { tabIndex: -1, disabled: 'disabled' }
const ENABLED_ATTRIBUTE = { tabIndex: 0 }

export default class PaginationControl extends React.PureComponent {
  constructor (props) {
    super(props)
    invariant(props.onPageChange, '`onPageChange` prop missing')
    invariant(props.page, '`page` prop missing')
    this.gotoFirstPage = this.gotoFirstPage.bind(this)
    this.gotoPrevPage = this.gotoPrevPage.bind(this)
    this.gotoNextPage = this.gotoNextPage.bind(this)
    this.gotoLastPage = this.gotoLastPage.bind(this)
    this.isPageWithinLowerBound = this.isPageWithinLowerBound.bind(this)
    this.isPageWithinUpperBound = this.isPageWithinUpperBound.bind(this)
    this.isValidPage = this.isValidPage.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  gotoFirstPage () {
    this.gotoPage(1)
  }

  gotoPrevPage () {
    const { page } = this.props
    this.gotoPage(page - 1)
  }

  gotoNextPage () {
    const { page } = this.props
    this.gotoPage(page + 1)
  }

  gotoLastPage () {
    const { totalPages } = this.props
    if (!isNil(totalPages)) this.gotoPage(totalPages)
  }

  gotoPage (page) {
    if (!this.isPageWithinLowerBound(page)) {
      this.props.onPageError(Error('Requested page is less than lower bound.'))
    } else if (!this.isPageWithinUpperBound(page)) {
      this.props.onPageError(Error('Requested page is greater than upper bound.'))
    }
    this.props.onPageChange(page)
  }

  isPageWithinLowerBound (page) {
    const firstPage = 1
    return page >= firstPage
  }

  isPageWithinUpperBound (page) {
    const { totalPages } = this.props
    if (isNil(totalPages)) return true

    return page <= totalPages
  }

  isValidPage (page) {
    return (this.isPageWithinLowerBound(page) && this.isPageWithinUpperBound(page))
  }

  isDisabled (btnType) {
    const { disabled, page } = this.props

    if (disabled) {
      return DISABLED_ATTRIBUTES
    }

    if (btnType) {
      if (btnType === 'last' && !this.props.totalPages) {
        return DISABLED_ATTRIBUTES
      }

      const linkedPage = page + (NAV_VERB_TO_INT_MAP[btnType] || 1)
      const invalidPage = !this.isValidPage(linkedPage)
      if (invalidPage) {
        return DISABLED_ATTRIBUTES
      }
    }

    return ENABLED_ATTRIBUTE
  }

  onBlur (evt) {
    this.gotoPage(evt.target.value === '' ? null : parseInt(evt.target.value, 10))
  }

  handleInputKeyDown (evt) {
    const ENTER = 13
    if (evt.keyCode === ENTER) {
      this.onBlur(evt)
    }
  }

  render () {
    const { page, totalPages } = this.props
    const isDisabled = this.isDisabled

    return (
      <div className='pagination'>
        <button className={`pagination__button pagination__prev`}
          onClick={this.gotoFirstPage} {...isDisabled('prev')} >
          <i className='arrow_carrot-2left' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__prev`}
          onClick={this.gotoPrevPage} {...isDisabled('prev')} >
          <i className='arrow_carrot-left' aria-hidden='true' />
        </button>
        <div className={`pagination__page-number`} >
          <span>Page</span>
          <input className={`pagination__input`} type='text' key={`${page}`} defaultValue={`${page}`}
            onBlur={this.onBlur} onKeyDown={this.handleInputKeyDown} {...isDisabled()} />
          <span>of</span>
          <span className='pagination__page-total'>{totalPages || '...'}</span>
        </div>
        <button className={`pagination__button pagination__next`}
          onClick={this.gotoNextPage} {...isDisabled('next')} >
          <i className='arrow_carrot-right' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__next`}
          onClick={this.gotoLastPage} {...isDisabled('last')} >
          <i className='arrow_carrot-2right' aria-hidden='true' />
        </button>
      </div>
    )
  }
}

PaginationControl.propTypes = {
  disabled: PropTypes.bool,
  /**
   * Called when the control is blurred.
   * @param {Number} page target page number
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * Called when the page changes with NAN or out-of-bounds number.
   * @param {Error} error NAN or out-of-bounds number.
   */
  onPageError: PropTypes.func,
   /**
   * Called when the page changes.
   * @param {Number} page target page number
   */
  page: PropTypes.number,
  totalPages: PropTypes.number
}
