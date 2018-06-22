import Flexbox from 'flexbox-react'
import React from 'react'
import classnames from 'classnames'

const ThinCardPrimaryAction = props => {
  const { children, className, ...rest } = props
  return (
    <Flexbox
      alignItems='center'
      className={classnames('thincard__primary_action', className)}
      {...rest}
    >
      {children}
    </Flexbox>
  )
}

ThinCardPrimaryAction.defaultProps = {}

ThinCardPrimaryAction.propTypes = {}

export default ThinCardPrimaryAction
