import Flexbox from 'flexbox-react'
import React from 'react'
import classnames from 'classnames'

const ThinCardWidgetValue = props => {
  const { className, ...rest } = props
  return (
    <Flexbox
      alignItems='center'
      className={classnames('thincard__widget_value', className)}
      {...rest}
    >
      {props.children}
    </Flexbox>
  )
}
ThinCardWidgetValue.defaultProps = {}

ThinCardWidgetValue.propTypes = {}

export default ThinCardWidgetValue
