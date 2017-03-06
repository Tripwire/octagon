import React from 'react'
import Flexbox from 'flexbox-react'

const MicroCardContent = (props) => {
  return (
    <Flexbox flexDirection='column' paddingBottom='10px' paddingLeft='10px' paddingTop='5px'>
      {(props.cardContent.title) ? <Flexbox className='box__header'>{props.cardContent.title}</Flexbox> : '' }
      <Flexbox flexGrow={2}>
        {props.children}
      </Flexbox>
    </Flexbox>
  )
}

MicroCardContent.defaultProps = {

}

MicroCardContent.propTypes = {
  isFavorited: React.PropTypes.bool
}

export default MicroCardContent
