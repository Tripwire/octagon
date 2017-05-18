import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import MicroCardContentStatus from './MicroCardContentStatus'
import MicroCardContentMessage from './MicroCardContentMessage'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

class MicroCardContent extends React.Component {
  static Status = MicroCardContentStatus;
  static Message = MicroCardContentMessage;

  render () {
    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <Flexbox flexDirection='column' paddingBottom='10px' paddingLeft='10px' paddingTop='5px'>
        {(this.props.title)
          ? <Flexbox {...externalAttributes} className={`box__header ${this.props.className}`}>{this.props.title}</Flexbox>
        : ''}
        <Flexbox flexGrow={2}>
          {this.props.children}
        </Flexbox>
      </Flexbox>
    )
  }
}

MicroCardContent.defaultProps = {
  title: ''
}

MicroCardContent.propTypes = {
  title: PropTypes.string
}

export default MicroCardContent
