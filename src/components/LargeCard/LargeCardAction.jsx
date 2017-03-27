import React from 'react'
import Button from '../suir/button/Button'

const LargeCardAction = (props) => {
  return (
    <Button className='tripwire fullview__goto__button' onClick={props.onClick}>{props.label}</Button>
  )
}

LargeCardAction.defaultProps = {

}

LargeCardAction.propTypes = {

}

export default LargeCardAction
