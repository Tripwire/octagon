import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'

import '../styles/components/tag-button.css'
const TagButton = (props) => {
  let tagClass = 'tagContainer'
  if (props.selectedTagId === props.tag.id) {
    tagClass = 'selectedTagContainer'
  }
  if (props.tag.filterOption === '') {
    return (
      <Flexbox width='100%'>
        <Flexbox key={props.tag.id} flexDirection='row' height='30px' className={`${tagClass} `} marginBottom='5px' onClick={() => { props.closeNotificationDetailView(); props.getNotificationByTag(props.tag.filterOption); props.setActiveTag(props.tag.id) }}>
          <Flexbox className='tagContainerMiddleAll' alignItems='center' >{props.tag.name}</Flexbox>
        </Flexbox>
      </Flexbox>
    )
  } else {
    return (
      <Flexbox key={props.tag.id} flexDirection='row' height='30px' className={`${tagClass}`} marginBottom='5px' onClick={() => { props.closeNotificationDetailView(); props.getNotificationByTag(props.tag.filterOption); props.setActiveTag(props.tag.id) }}>
        <Flexbox alignItems='center' className='tagContainerValue'>{props.tag.count}</Flexbox>
        <Flexbox className='tagContainerMiddle' justifyContent='center' alignItems='center'>{props.tag.name}</Flexbox>
        <Flexbox className='tagArrow'>
          <div />
        </Flexbox>
      </Flexbox>
    )
  }
}

TagButton.defaultProps = {
  tag: {}
}

TagButton.propTypes = {
  tag: PropTypes.object
}
export default TagButton
