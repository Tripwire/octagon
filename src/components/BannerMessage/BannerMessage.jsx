import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/banner-message.css'
import { Button } from 'semantic-ui-react'
import BannerMessageHeader from './BannerMessageHeader'
import BannerMessageBody from './BannerMessageBody'
import BannerMessageFooter from './BannerMessageFooter'

/**
 * A BannerMessage displays an alert at the top of a content section.
 */

const BannerMessage = props => {
  const { closed, header, icon, children, ...rest } = props

  function getAlertIconClass () {
    if (status === 'success') return 'icon_check_alt2'
    if (status === 'information') return 'ei icon_info_alt'
    if (status === 'warning') return 'ei icon_error-triangle_alt'
    if (status === 'error') return 'ei icon_error-circle_alt'
  }

  function getStatus () {
    if (props.status) {
      if (props.status === 'info') return 'information'
      else return props.status
    }
    if (props.success) return 'success'
    if (props.info || props.information) return 'information'
    if (props.warning) return 'warning'
    if (props.error) return 'error'
  }

  function getOneDismissElement () {
    const dismissIcon = <i className={`banner-message__close-icon ei icon_close`} onClick={props.onCloseClicked} />
    const dismissButton = <Button size='tiny' className='banner-message__close-button' onClick={props.onCloseClicked}>{props.button}</Button>
    return (!icon && props.button && dismissButton) || dismissIcon
  }

  const childIsString = (typeof children === 'string')
  const nakedHeader = childIsString && !header && children
  const status = getStatus()
  const headerContent = header || nakedHeader || ''
  const childContent = !childIsString ? children : ''
  const headerMarkup = headerContent && <BannerMessageHeader>{headerContent}</BannerMessageHeader>
  const alertIcon = <i className={`banner-message__alert ${getAlertIconClass()}`} />
  const DismissElement = getOneDismissElement()

  return (
    <div className='banner-message__wrapper'>
      <div
        className={`banner-message ${status} ${closed ? 'closed' : ''}`}
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
