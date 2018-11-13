import cx from 'classnames'
import React from 'react'
import moment from 'moment'

export function generic ({ name, className }) {
  const Component = function Component (props) {
    const { className: userClassName, children, ...rest } = props
    return (
      <div className={cx(userClassName, className)} {...rest}>
        {children}
      </div>
    )
  }
  Component.displayName = name
  return Component
}

export function getRelativeTime (date, format) {
  if (date) {
    if (!format) {
      format = 'MM/DD/YYYY'
    }

    const inputDate = moment(date)
    const oneMinMs = 60000
    const diffMs = Math.abs(moment().diff(inputDate))
    const minute = Math.floor(moment().diff(inputDate) / oneMinMs)
    const hour = Math.floor(minute / 60)

    if (diffMs < oneMinMs) {
      return 'just now'
    } else if (minute < 60) {
      return `${minute} min${minute > 1 ? 's' : ''} ago`
    } else if (hour < 24) {
      return `${hour} hour${hour > 1 ? 's' : ''} ago`
    } else {
      return inputDate.format(format)
    }
  } else {
    return ''
  }
}
