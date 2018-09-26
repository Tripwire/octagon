import React from 'react'
import { Button } from 'semantic-ui-react'

/**
 * Header for BannerMessage
 */

const BannerMessageHeader = props => {

  const { children, ...rest } = props

  return (
    <div className="banner-message__header">{children}</div>
  )
}

export default BannerMessageHeader