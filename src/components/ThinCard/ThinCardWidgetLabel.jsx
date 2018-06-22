import Flexbox from 'flexbox-react'
import React from 'react'
import classnames from 'classnames'

const ThinCardWidgetLabel = props => {
  const { children, className, ...rest } = props
  return (
    <Flexbox
      alignItems='center'
      className={classnames('thincard__widget_label', className)}
      {...rest}
    >
      {children}
    </Flexbox>
  )
}

ThinCardWidgetLabel.defaultProps = {}

ThinCardWidgetLabel.propTypes = {}

export default ThinCardWidgetLabel
