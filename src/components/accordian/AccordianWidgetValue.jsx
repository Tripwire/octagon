import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianWidgetValue = (props) => {
  return (
    <Flexbox alignItems="center" className="operation__group_list_item_assets_value">
        {props.children}
    </Flexbox>
  )
}

AccordianWidgetValue.defaultProps = {

}

AccordianWidgetValue.propTypes = {

}

export default AccordianWidgetValue
