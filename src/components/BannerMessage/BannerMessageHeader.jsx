import React from 'react'

/**
 * Header for BannerMessage
 */

const BannerMessageHeader = props => {
  const { children } = props

  return (
    <div className='banner-message__header'>{children}</div>
  )
}

export default BannerMessageHeader
