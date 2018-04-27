import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const LargeCardContent = props => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      flexDirection='row'
      flexGrow={3}
      style={props.style}
      paddingTop='10px'
      paddingBottom='10px'
      paddingLeft='15px'
      paddingRight='15px'
    >
      {props.children}
    </Flexbox>
  )
}

LargeCardContent.defaultProps = {}

LargeCardContent.propTypes = {}

export default LargeCardContent
