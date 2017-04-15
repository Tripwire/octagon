import React from 'react'
import Icon from '../suir/icon/Icon'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const MicroCardAction = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Icon
      {...externalAttributes}
      onClick={props.onClick}
      className={`ei microcard__arrow-right arrow_carrot-right ${props.className}`} />
  )
}

MicroCardAction.defaultProps = {

}

MicroCardAction.propTypes = {

}

export default MicroCardAction
