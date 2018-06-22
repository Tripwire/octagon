import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import ThinCardWidgetLabel from './ThinCardWidgetLabel'
import ThinCardWidgetValue from './ThinCardWidgetValue'
import classnames from 'classnames'

const ThinCardWidget = props => {
  const { borderLeft, borderRight, children, className, ...rest } = props
  return (
    <Flexbox
      alignItems='center'
      className={classnames(
        borderLeft && 'borderLeft',
        borderRight && 'borderRight',
        className
      )}
      paddingRight='15px'
      paddingLeft='15px'
      marginBottom='10px'
      marginTop='10px'
      {...rest}
    >
      {children}
    </Flexbox>
  )
}
ThinCardWidget.Label = ThinCardWidgetLabel
ThinCardWidget.Value = ThinCardWidgetValue

ThinCardWidget.defaultProps = {
  borderLeft: false,
  borderRight: false
}

ThinCardWidget.propTypes = {
  borderLeft: PropTypes.bool,
  borderRight: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default ThinCardWidget
