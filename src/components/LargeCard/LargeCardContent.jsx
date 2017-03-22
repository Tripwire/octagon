import React from 'react'
import Flexbox from 'flexbox-react'

const LargeCardContent = (props) => {
  return (
    <Flexbox flexDirection='row' flexGrow={3} className={` ${props.className}`} style={props.style} paddingTop='10px' paddingBottom='10px' paddingLeft='15px' paddingRight='15px'>
      {props.children}
    </Flexbox>
  )
}

LargeCardContent.defaultProps = {

}

LargeCardContent.propTypes = {

}

export default LargeCardContent
