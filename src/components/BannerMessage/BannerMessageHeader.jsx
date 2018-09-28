import React from 'react'

/**
 * Header for BannerMessage
 */

const BannerMessageHeader = props => {
  const { children, ...rest } = props

  return (
    <div className='banner-message__header' {...rest}>
      {children}
    </div>
  )
}

export default BannerMessageHeader
