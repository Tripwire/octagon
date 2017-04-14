import React from 'react'
import Icon from '../suir/icon/Icon'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardClose = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <span {...externalAttributes} className={`close__fullview ${props.className}`}>
      <Icon className='ei icon_close' aria-hidden='true' />
    </span>
  )
}

LargeCardClose.defaultProps = {

}

LargeCardClose.propTypes = {

}

export default LargeCardClose
