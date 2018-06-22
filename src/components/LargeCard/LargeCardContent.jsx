import Flexbox from 'flexbox-react'
import React from 'react'

const LargeCardContent = props => {
  const { children, ...rest } = props
  return (
    <Flexbox
      flexDirection='row'
      flexGrow={3}
      paddingTop='10px'
      paddingBottom='10px'
      paddingLeft='15px'
      paddingRight='15px'
      {...rest}
    >
      {children}
    </Flexbox>
  )
}

LargeCardContent.defaultProps = {}

LargeCardContent.propTypes = {}

export default LargeCardContent
