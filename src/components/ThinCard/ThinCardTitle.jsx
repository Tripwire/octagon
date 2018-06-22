import Flexbox from 'flexbox-react'
import React from 'react'
import classnames from 'classnames'

const ThinCardTitle = props => {
  const { children, className, ...rest } = props
  return (
    <Flexbox
      alignItems='center'
      className={classnames('thincard__title', className)}
      {...rest}
    >
      {children}
    </Flexbox>
  )
}

ThinCardTitle.defaultProps = {}

ThinCardTitle.propTypes = {}

export default ThinCardTitle
