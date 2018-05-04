import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'
import ThinCardWidgetLabel from './ThinCardWidgetLabel'
import ThinCardWidgetValue from './ThinCardWidgetValue'

const ThinCardWidget = (props) => {
  let borderClass = ''
  if (props.borderLeft) {
    borderClass += 'borderLeft '
  }
  if (props.borderRight) {
    borderClass += 'borderRight '
  }

  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      onClick={props.onClick}
      alignItems='center'
      className={`${borderClass} ${props.className}`}
      paddingRight='15px'
      paddingLeft='15px'
      marginBottom='10px'
      marginTop='10px'>
      {props.children}
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
