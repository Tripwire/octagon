import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const ThinCardActionButton = props => {
  const { innerProps, children, ...rest } = props
  const { innerClassName, ...innerRest } = innerProps
  return (
    <Flexbox alignItems='center' flexGrow={3} {...rest}>
      <div
        className={classnames('thincard__action_button', innerClassName)}
        {...innerRest}
      >
        {children}
      </div>
    </Flexbox>
  )
}

ThinCardActionButton.defaultProps = {
  style: {},
  innerProps: {}
}

ThinCardActionButton.propTypes = {
  style: PropTypes.object,
  innerProps: PropTypes.object
}

export default ThinCardActionButton
