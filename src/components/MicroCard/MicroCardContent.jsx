import React from 'react'
import Flexbox from 'flexbox-react'
import MicroCardContentStatus from './MicroCardContentStatus'
import MicroCardContentMessage from './MicroCardContentMessage'

class MicroCardContent extends React.Component {
  static Status = MicroCardContentStatus;
  static Message = MicroCardContentMessage;
  
  render (){
    return(
    <Flexbox flexDirection='column' paddingBottom='10px' paddingLeft='10px' paddingTop='5px'>
      {(this.props.title) ? <Flexbox className='box__header'>{this.props.title}</Flexbox> : '' }
      <Flexbox flexGrow={2}>
        {this.props.children}
      </Flexbox>
    </Flexbox>
  )
  }
}

MicroCardContent.defaultProps = {
  title : ''
}

MicroCardContent.propTypes = {
  title: React.PropTypes.string,
}

export default MicroCardContent
