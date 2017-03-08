import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianActionButton = (props) => {
  return (
    <Flexbox alignItems="center" flexGrow={3}>
      <div onClick={props.onClick} className={`operation__group_list_manage ${props.ClassName}`} style={props.style}>
          {props.children}
      </div>
    </Flexbox>
  )
}

AccordianActionButton.defaultProps = {

}

AccordianActionButton.propTypes = {

}

export default AccordianActionButton
