import React from 'react'
import Button from '../../suir/button/Button'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const LargeCardAction = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Button
      {...externalAttributes}
      className={`tripwire fullview__goto__button ${props.className}`}>
      {props.label}
    </Button>
  )
}

LargeCardAction.defaultProps = {

}

LargeCardAction.propTypes = {

}

export default LargeCardAction
