import React from 'react'

/**
 * Body for Banner Message. Can contain any children (e.g. text, lists, image)
 */

const BannerMessageBody = props => {
  const { children, ...rest } = props
  const content = typeof children === 'string' ? <p>{children}</p> : children
  return (
    <div className='banner-message__body' {...rest}>
      {content}
    </div>
  )
}

export default BannerMessageBody
