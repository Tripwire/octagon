import React from 'react'
import Flexbox from 'flexbox-react'

const LargeCardContent = (props) => {
  return (
    <Flexbox flexDirection='row' flexGrow={3} className={` ${props.className}`} style={props.style}>
      {props.children}
    </Flexbox>
  )
}

LargeCardContent.defaultProps = {

}

LargeCardContent.propTypes = {

}

export default LargeCardContent
