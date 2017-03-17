import React from 'react'
import Icon from '../suir/icon/Icon'
import Flexbox from 'flexbox-react'

const LargeCardRecentList = (props) => {
  return (
    <Flexbox flexDirection='column' flexGrow={1} className={props.className}>

      <h4 className='label'>Recent</h4>
      {props.items.map((item) => {
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
          <Flexbox key={item.id} flexDirection='row' className={`state__body-${item.state} recent__activity__row`}>
            <Flexbox className={`state__body-${item.state}`} alignItems='center' marginRight='20px'>
              <Icon className={`text-uppercase text-small ei ${icon} text-large`} />
            </Flexbox>
            <Flexbox className={`text-uppercase text-small state__body-${item.state}`} alignItems='center'marginRight='20px'>
              {item.status}
            </Flexbox>
            <Flexbox className={`text-uppercase text-small state__body-${item.state}`} alignItems='center'>
              {item.date}
            </Flexbox>
          </Flexbox>
        )
      })
                }

    </Flexbox>
  )
}

LargeCardRecentList.defaultProps = {

}

LargeCardRecentList.propTypes = {
  items: React.PropTypes.array
}

export default LargeCardRecentList
