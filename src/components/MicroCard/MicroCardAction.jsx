import React from 'react'
import Icon from '../suir/icon/Icon'

const MicroCardAction = (props) => {
  return (
    <Icon onClick={props.onClick} className='ei microcard__arrow-right arrow_carrot-right' />
  )
}

MicroCardAction.defaultProps = {

}

MicroCardAction.propTypes = {

}

export default MicroCardAction
