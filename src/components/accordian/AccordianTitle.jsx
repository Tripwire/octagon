import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianTitle = (props) => {
  return (
    <Flexbox alignItems="center" className="operation_group_list_item_name">
        {props.children}
    </Flexbox>
  )
}

AccordianTitle.defaultProps = {

}

AccordianTitle.propTypes = {

}

export default AccordianTitle
