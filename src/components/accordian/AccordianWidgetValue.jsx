import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianWidgetValue = (props) => {
  return (
    <Flexbox alignItems='center' className='accordian__widget_value'>
      {props.children}
    </Flexbox>
  )
}

AccordianWidgetValue.defaultProps = {

}

AccordianWidgetValue.propTypes = {

}

export default AccordianWidgetValue
