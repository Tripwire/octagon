import PropTypes from 'prop-types'
import React from 'react'
import '../../styles/components/pagination-control.css'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import invariant from 'invariant'

const NAV_VERB_TO_INT_MAP = { prev: -1, next: 1 }
const DISABLED_ATTRIBUTES = { tabIndex: -1, disabled: true }
const ENABLED_ATTRIBUTE = { tabIndex: 0 }

/**
 * Pagination Control: controls pagination of results, allowing the user to
 * easily navigate through pages of data.
 */
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
    this.handleUserInput = this.handleUserInput.bind(this)
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
    let payload = { page: page }
    if (!isNumber(page)) {
      payload.error = 'Invalid Number'
    } else if (!this.isPageWithinLowerBound(page)) {
      payload.error = 'Number less than lower bound'
    } else if (!this.isPageWithinUpperBound(page)) {
      payload.error = 'Number greater than upper bound'
    }
    this.props.onPageChange(payload)
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
    return (
      this.isPageWithinLowerBound(page) && this.isPageWithinUpperBound(page)
    )
  }

  isDisabled (btnType) {
    const { disabled, page, totalPages } = this.props

    if (disabled) {
      return DISABLED_ATTRIBUTES
    }

    if (btnType) {
      if (btnType === 'last' && isNil(totalPages)) {
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

  handleUserInput (evt) {
    this.gotoPage(parseInt(evt.target.value, 10))
  }

  handleInputKeyDown (evt) {
    const ENTER = 13
    if (evt.keyCode === ENTER) {
      this.handleUserInput(evt)
    }
  }

  render () {
    const { page, totalPages } = this.props
    const isDisabled = this.isDisabled

    return (
      <div className='octagon pagination'>
        <button
          className={`pagination__button pagination__prev`}
          data-hook='pagination-button-first-page'
          title='First Page'
          onClick={this.gotoFirstPage}
          {...isDisabled('prev')}
        >
          <i className='arrow_carrot-2left' aria-hidden='true' />
        </button>
        <button
          className={`pagination__button pagination__prev`}
          data-hook='pagination-button-prev-page'
          title='Previous Page'
          onClick={this.gotoPrevPage}
          {...isDisabled('prev')}
        >
          <i className='arrow_carrot-left' aria-hidden='true' />
        </button>
        <div className={`pagination__page-number`}>
          <label>
            <span>Page</span>
            <input
              className={`pagination__input`}
              type='number'
              min='1'
              max={totalPages}
              key={`${page}`}
              defaultValue={`${page}`}
              onBlur={this.handleUserInput}
              onKeyDown={this.handleInputKeyDown}
              {...isDisabled()}
            />
          </label>
          <span>of</span>
          <span className='pagination__page-total'>
            {totalPages || (
              <em className='pagination__page-number_total-pages-unknown'>
                ...
              </em>
            )}
          </span>
        </div>
        <button
          className={`pagination__button pagination__next`}
          data-hook='pagination-button-next-page'
          title='Next Page'
          onClick={this.gotoNextPage}
          {...isDisabled('next')}
        >
          <i className='arrow_carrot-right' aria-hidden='true' />
        </button>
        <button
          className={`pagination__button pagination__next`}
          data-hook='pagination-button-last-page'
          title='Last Page'
          onClick={this.gotoLastPage}
          {...isDisabled('last')}
        >
          <i className='arrow_carrot-2right' aria-hidden='true' />
        </button>
      </div>
    )
  }
}

PaginationControl.propTypes = {
  /**
   * Called when the page changes.
   * @param {Number} page target page number
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * Set pagination to disabled. Default is false.
   */
  disabled: PropTypes.bool,
  /**
   * Set page number.
   */
  page: PropTypes.number,
  /**
   * Set total number of pages.
   */
  totalPages: PropTypes.number
}
