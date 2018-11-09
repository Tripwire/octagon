import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/banner-message.css'
import { Button } from 'semantic-ui-react'
import BannerMessageHeader from './BannerMessageHeader'
import BannerMessageBody from './BannerMessageBody'
import BannerMessageFooter from './BannerMessageFooter'
import classnames from 'classnames'

/**
 * A BannerMessage displays an alert at the top of a content section.
 */

const BannerMessage = props => {
  const { className, button, closed, header, icon, children, info, warning, error, success, onCloseClicked, ...rest } = props
  const forceInfo = !info && !warning && !error && !success

  function getOneDismissElement () {
    const dismissIcon = (
      <i
        className={`banner-message__close-icon ei icon_close`}
        onClick={onCloseClicked}
      />
    )
    const dismissButton = (
      <Button
        size='tiny'
        className='banner-message__close-button'
        onClick={onCloseClicked}
      >
        {button}
      </Button>
    )
    return (!icon && button && dismissButton) || dismissIcon
  }

  const childIsString = typeof children === 'string'
  const nakedHeader = childIsString && !header && children
  const headerContent = header || nakedHeader || ''
  const childContent = !childIsString ? children : ''
  const headerMarkup = headerContent && (
    <BannerMessageHeader>{headerContent}</BannerMessageHeader>
  )
  const alertIcon = (
    <i className={classnames('banner-message__alert', {
      'icon_check_alt2': success,
      'ei icon_info_alt': info || forceInfo,
      'ei icon_error-triangle_alt': warning,
      'ei icon_error-circle_alt': error
    })} />
  )
  const DismissElement = getOneDismissElement()

  return (
    <div className={classnames('banner-message__wrapper', className)}>
      <div
        className={classnames(
          'banner-message',
          {
            info: info || forceInfo,
            success,
            error,
            warning,
            closed
          }
        )}
        {...rest}
      >
        {alertIcon}
        {DismissElement}
        {headerMarkup}
        {childContent}
      </div>
    </div>
  )
}

BannerMessage.Header = BannerMessageHeader
BannerMessage.Body = BannerMessageBody
BannerMessage.Footer = BannerMessageFooter

BannerMessage.propTypes = {
  /**
   * Called when the user clicks header close icon (or button).
   */
  onCloseClicked: PropTypes.func
}

export default BannerMessage
