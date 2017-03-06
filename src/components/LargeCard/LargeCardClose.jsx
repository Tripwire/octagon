import React from 'react'
import { Icon } from 'semantic-ui-react'

const LargeCardClose = (props) => {
  return (
    <span className='close__fullview' onClick={props.onClick}>
        <Icon className='ei icon_close' aria-hidden='true' />
    </span>
  )
}

LargeCardClose.defaultProps = {

}

LargeCardClose.propTypes = {

}

export default LargeCardClose
