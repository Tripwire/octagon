import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianPrimaryAction = (props) => {
  return (
    <Flexbox alignItems='center' className={`accordian__primary_action ${props.className}`}>
      {props.children}
    </Flexbox>
  )
}

AccordianPrimaryAction.defaultProps = {

}

AccordianPrimaryAction.propTypes = {

}

export default AccordianPrimaryAction
