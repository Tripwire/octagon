import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianPrimaryAction = (props) => {
  return (
    <Flexbox alignItems="center" className={`og__groupBox_play ${props.className}`}>
        {props.children}
    </Flexbox>
  )
}

AccordianPrimaryAction.defaultProps = {

}

AccordianPrimaryAction.propTypes = {

}

export default AccordianPrimaryAction
