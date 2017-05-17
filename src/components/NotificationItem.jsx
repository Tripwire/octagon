import PropTypes from 'prop-types'
import React from 'react'
import * as d3 from 'd3'
import Flexbox from 'flexbox-react'
import '../styles/components/notification-item.css'

const parseDate = d3.timeParse('%m-%d-%Y %H:%M:%S')
const timeFormat = d3.timeFormat('%I')
let currentTime = ''
let sameTimeGroup = false
const warningIconUri = require('../assets/warning-yellow.svg')
const alertIconUri = require('../assets/alert-icon.svg')
const notificationUri = require('../assets/icon_activity_notification.svg')

const NotificationItem = (props) => {
  let notificationClass = 'notification__item'
  let iconUrl = ''
  if (props.notification.state === 'critical') {
    iconUrl = alertIconUri
  } else if (props.notification.state === 'warning') {
    iconUrl = warningIconUri
  } else if (props.notification.state === 'viewall') {
    iconUrl = ''
  } else {
    iconUrl = notificationUri
  }
  if (iconUrl !== '') {
    iconUrl = <img src={iconUrl} alt='icon' />
  } else {
    iconUrl = <div style={{ minWidth: 18 + 'px' }} />
  }

  let notificationCount = props.notification.detail.length
  if (!props.notification.detail.length) {
    notificationCount = null
  }
  const notificationTimestamp = parseDate(props.notification.timestamp)
  let timeFormatted = timeFormat(notificationTimestamp)
  timeFormatted = timeFormatted.replace(/^0+/, '')
  if (currentTime === timeFormatted) {
    sameTimeGroup = true
  } else {
    currentTime = timeFormatted
    sameTimeGroup = false
  }
  console.log(sameTimeGroup)
  currentTime = timeFormatted
  if (props.data.length === 1) {
    currentTime = ''
  }
  if (props.notification.id === props.currentTargetNotificationId) {
    notificationClass = 'notification__item currentTarget'
  }

  return (

    <li className={` ${notificationClass}`} key={props.notification.id} >
      <Flexbox alignItems='center'
        className={`notification__selection notification__state-${props.notification.state}
        same-timegroup-${sameTimeGroup}`}>
        <Flexbox flexDirection='row' flexGrow={3}>
          {sameTimeGroup
          ? <Flexbox className='no-timegroup' paddingRight='30px' />
            : <Flexbox flexDirection='row' className='notification__timegroup'>
              <Flexbox className='notification__time' alignItems='center' paddingLeft='15px' paddingRight='15px'>
                {timeFormatted}H
            </Flexbox>
              <Flexbox
                className={`notification__connection__dot notification__connection__dot_${props.notification.state}`}
                alignItems='center'
                marginRight='15px' />
            </Flexbox>
        }
          <span className='notification__vertical__line' />
          <Flexbox className='notification__connection__state' alignItems='center'>

            {iconUrl}
          </Flexbox>
          <Flexbox className='notification__detail' alignItems='center'>
            {notificationCount}&nbsp;{props.notification.name}
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection='column' height='100%'
          alignItems='flex-end'
          justifyContent='center'
          className={`icon-right icon-right-${props.notification.state}`}>
          <i className='arrow_carrot-right' />
        </Flexbox>
      </Flexbox>
    </li>

  )
}
NotificationItem.propTypes = {
  notification: PropTypes.object,
  data: PropTypes.array
}
export default NotificationItem
