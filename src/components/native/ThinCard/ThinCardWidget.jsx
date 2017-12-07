import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'
import ThinCardWidgetLabel from './ThinCardWidgetLabel'
import ThinCardWidgetValue from './ThinCardWidgetValue'

class ThinCardWidget extends React.Component {
  render () {
    let borderClass = ''
    if (this.props.borderLeft) {
      borderClass += 'borderLeft '
    }
    if (this.props.borderRight) {
      borderClass += 'borderRight '
    }

    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <Flexbox
        {...externalAttributes}
        onClick={this.props.onClick}
        alignItems='center'
        className={`${borderClass} ${this.props.className}`}
        paddingRight='15px'
        paddingLeft='15px'
        marginBottom='10px'
        marginTop='10px'>
        {this.props.children}
      </Flexbox>
    )
  }
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
