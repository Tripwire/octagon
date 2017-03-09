import React from 'react'
import Flexbox from 'flexbox-react'

const AccordianTitle = (props) => {
  return (
    <Flexbox alignItems='center' className='accordian__title'>
      {props.children}
    </Flexbox>
  )
}

AccordianTitle.defaultProps = {

}

AccordianTitle.propTypes = {

}

export default AccordianTitle
