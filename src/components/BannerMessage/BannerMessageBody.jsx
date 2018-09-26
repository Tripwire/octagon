import React from 'react'
import { Button } from 'semantic-ui-react'

/**
* Body for Banner Message. Can contain any children (e.g. text, lists, image)
 */

const BannerMessageBody = props => {

  const { children, ...rest } = props

  return (
    <p className="banner-message__body">{children}</p>
  )
}

export default BannerMessageBody