import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import '../../../styles/components/pagination-control.css'
import isNil from 'lodash/isNil'
import invariant from 'invariant'

const NAV_VERB_TO_INT_MAP = { prev: -1, next: 1 }

export default class PaginationControl extends React.PureComponent {
  constructor (props) {
    super(props)
    invariant(props.onBlur, '`onBlur` prop missing')
    invariant(props.onChange, '`onChange` prop missing')
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
    this.onChange = this.onChange.bind(this)
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
    if (this.isValidPage(page)) {
      this.props.onChange(page)
    }
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
    const disabledClass = 'pagination_disabled'

    if (disabled) {
      return disabledClass
    } else if (btnType) {
      const linkedPage = page + NAV_VERB_TO_INT_MAP[btnType]
      const invalidPage = !this.isValidPage(linkedPage)
      if (invalidPage) {
        return disabledClass
      }
    }
    return ''
  }

  onBlur (evt) {
    const { onBlur } = this.props
    if (!onBlur) return
    onBlur(evt.target.value === '' ? null : parseInt(evt.target.value, 10))
  }

  onChange (evt) {
    this.props.onChange(evt.target.value === '' ? null : parseInt(evt.target.value, 10))
  }

  handleInputKeyDown (evt) {
    const ENTER = 13
    if (evt.keyCode === ENTER) {
      this.onChange(evt)
    }
  }

  render () {
    const { page, disabled, totalPages } = this.props
    const isPrevDisabled = this.isDisabled('prev')
    const isNextDisabled = this.isDisabled('next')
    return (
      <Flexbox flexDirection='row' className='pagination'>
        <button className={`pagination__button pagination__prev ${isPrevDisabled}`}
          onClick={this.gotoFirstPage} tabIndex={`${isPrevDisabled ? -1 : 0}`}>
          <i className='arrow_carrot-2left' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__prev ${isPrevDisabled}`}
          onClick={this.gotoPrevPage} tabIndex={`${isPrevDisabled ? -1 : 0}`}>
          <i className='arrow_carrot-left' aria-hidden='true' />
        </button>
        <Flexbox className={`pagination__page-number ${this.isDisabled()}`} alignItems='center'>
          <span>Page</span>
          <input className={`pagination__input ${this.isDisabled()}`}
            type='text' value={`${page || ''}`} disabled={disabled}
            onChange={this.onChange} onBlur={this.onBlur} onKeyDown={this.handleInputKeyDown} tabIndex={`${this.isDisabled() ? -1 : 0}`} />
          <span> of</span>
          <span className='pagination__page-total'>{totalPages || '∞'}</span>
        </Flexbox>
        <button className={`pagination__button pagination__next ${isNextDisabled}`}
          onClick={this.gotoNextPage} tabIndex={`${isNextDisabled ? -1 : 0}`}>
          <i className='arrow_carrot-right' aria-hidden='true' />
        </button>
        <button className={`pagination__button pagination__next ${isNextDisabled}`}
          onClick={this.gotoLastPage} tabIndex={`${isNextDisabled ? -1 : 0}`}>
          <i className='arrow_carrot-2right' aria-hidden='true' />
        </button>
      </Flexbox>
    )
  }
}

PaginationControl.propTypes = {
  disabled: PropTypes.bool,
  /**
   * Called when the control is blurred.
   * @param {Number} page target page number
   */
  onBlur: PropTypes.func.isRequired,
  /**
   * Called when the page changes.
   * @param {Number} page target page number
   */
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number
}
