import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianWidgetLabel = (props) => {
  return (
    <Flexbox alignItems="center" className={` ${props.className} og__title`} style={props.style}>
        {props.children}
    </Flexbox>
  )
}

AccordianWidgetLabel.defaultProps = {

}

AccordianWidgetLabel.propTypes = {

}

export default AccordianWidgetLabel
