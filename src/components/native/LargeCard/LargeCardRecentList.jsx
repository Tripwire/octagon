import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../../suir/icon/Icon'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const LargeCardRecentList = props => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} flexDirection='column' flexGrow={1}>
      <h4 className='label'>Recent</h4>
      {props.items.map(item => {
        let icon = ''
        switch (item.state) {
          case 'warning':
            icon = 'icon_error-triangle_alt'
            break
          case 'critical':
            icon = 'icon_error-circle_alt'
            break
          default:
            icon = 'icon_check_alt2'
        }
        return (
          <Flexbox
            key={item.id}
            flexDirection='row'
            className={`recent_list-${item.state} recent__activity__row`}
          >
            <Flexbox
              className={`recent_list-${item.state}`}
              alignItems='center'
              marginRight='20px'
            >
              <Icon className={`ei ${icon} text-large`} />
            </Flexbox>
            <Flexbox
              className={`text-uppercase text-small recent_list-${item.state}`}
              alignItems='center'
              marginRight='20px'
            >
              {item.status}
            </Flexbox>
            <Flexbox
              className={`text-uppercase text-small recent_list-${item.state}`}
              alignItems='center'
            >
              {item.date}
            </Flexbox>
          </Flexbox>
        )
      })}
    </Flexbox>
  )
}

LargeCardRecentList.defaultProps = {}

LargeCardRecentList.propTypes = {
  items: PropTypes.array
}

export default LargeCardRecentList
