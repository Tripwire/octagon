import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import NotificationItem from '../src/components/NotificationItem';

const sampleNotifications =   [{
    id: 1,
    name: 'CONNECTION REQUEST',
    filterOption: 'pos',
    state: 'normal',
    timestamp: '03-12-2016 01:00:00',
    detail: [
      { id: 1, name: 'TIME OUT 1: SOURCE', state: 'warning' },
      { id: 2, name: 'TIME OUT 2: SOURCE', state: 'warning' },
      { id: 3, name: 'TIME OUT 3: SOURCE', state: 'warning' },
      { id: 4, name: 'TIME OUT 4: SOURCE', state: 'warning' },
      { id: 5, name: 'TIME OUT 5: SOURCE', state: 'warning' },
      { id: 6, name: 'TIME OUT 6: SOURCE', state: 'warning' },
    ],
  },
    {
    id: 2,
    name: 'Time-Out',
    filterOption: 'server',
    state: 'critical',
    timestamp: '03-12-2016 2:50:00',
    detail: [
      { id: 10, name: 'TIME OUT 1: SOURCE', state: 'warning' },
      { id: 11, name: 'TIME OUT 2: SOURCE', state: 'warning' },
      { id: 12, name: 'TIME OUT 2: SOURCE', state: 'warning' },
    ],
  },
 {
    id: 3,
    name: 'Connection Errors',
    filterOption: 'server',
    state: 'critical',
    timestamp: '03-12-2016 2:40:00',
    detail: [
      { id: 20, name: 'Connection Error 1: SOURCE', state: 'critical' },
      { id: 21, name: 'Connection Error 2: SOURCE', state: 'critical' },
      { id: 22, name: 'Connection Error 3: SOURCE', state: 'critical' },
      { id: 23, name: 'Connection Error 4: SOURCE', state: 'critical' },
      { id: 24, name: 'Connection Error 5: SOURCE', state: 'critical' },
      { id: 25, name: 'Connection Error 6: SOURCE', state: 'critical' },
      { id: 26, name: 'Connection Error 7: SOURCE', state: 'critical' },
      { id: 27, name: 'Connection Error 8: SOURCE', state: 'critical' },
      { id: 28, name: 'Connection Error 9: SOURCE', state: 'critical' },
    ],
  } 
];

storiesOf('Notifications', module)
  .addDecorator((story) => (
    <div style={{maxWidth: "500px" ,minHeight: "600px", backgroundColor: "rgb(244, 244, 244)"}}>
      {story()}
    </div>
  ))
  .add('Notification', () => (
    <div className="notification__list">
    <NotificationItem  notification={sampleNotifications[0]} data={[]} />
    <NotificationItem  notification={sampleNotifications[1]} data={[]} />
    <NotificationItem  notification={sampleNotifications[2]} data={[]} />
    </div>
  ))

  
