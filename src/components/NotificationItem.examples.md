Normal Notification

     <div className="notification__list">
     <NotificationItem notification={{id: 1,name: 'CONNECTION REQUEST',filterOption: 'pos',state: 'normal',timestamp: '03-12-2016 01:00:00',detail: [{ id: 1, name: 'TIME OUT 1: SOURCE', state: 'warning' },{ id: 2, name: 'TIME OUT 2: SOURCE', state: 'warning' },{ id: 3, name: 'TIME OUT 3: SOURCE', state: 'warning' },{ id: 4, name: 'TIME OUT 4: SOURCE', state: 'warning' },{ id: 5, name: 'TIME OUT 5: SOURCE', state: 'warning' },{ id: 6, name: 'TIME OUT 6: SOURCE', state: 'warning' }]}} data={[]} />
     </div>

Critical Notification

     <div className="notification__list">
     <NotificationItem notification={{id: 1,name: 'CONNECTION REQUEST',filterOption: 'pos',state: 'critical',timestamp: '03-12-2016 02:00:00',detail: [{ id: 1, name: 'TIME OUT 1: SOURCE', state: 'warning' },{ id: 2, name: 'TIME OUT 2: SOURCE', state: 'warning' },{ id: 3, name: 'TIME OUT 3: SOURCE', state: 'warning' },{ id: 4, name: 'TIME OUT 4: SOURCE', state: 'warning' },{ id: 5, name: 'TIME OUT 5: SOURCE', state: 'warning' },{ id: 6, name: 'TIME OUT 6: SOURCE', state: 'warning' }]}} data={[]} />
     </div>

Warning Notification

     <div className="notification__list">
     <NotificationItem notification={{id: 1,name: 'CONNECTION REQUEST',filterOption: 'pos',state: 'warning',timestamp: '03-12-2016 03:00:00',detail: [{ id: 1, name: 'TIME OUT 1: SOURCE', state: 'warning' },{ id: 2, name: 'TIME OUT 2: SOURCE', state: 'warning' },{ id: 3, name: 'TIME OUT 3: SOURCE', state: 'warning' },{ id: 4, name: 'TIME OUT 4: SOURCE', state: 'warning' },{ id: 5, name: 'TIME OUT 5: SOURCE', state: 'warning' },{ id: 6, name: 'TIME OUT 6: SOURCE', state: 'warning' }]}} data={[]} />
     </div>

Notifications are automatically grouped if the time occurs within the same hour.  The syntax for the payload is as follows:

```javascript
{
  id: 1,
  name: 'CONNECTION REQUEST',
  filterOption: 'pos', //enables you to display grouped notifications based on this key
  state: 'normal', //one of [normal, critical, warning]
  timestamp: '03-12-2016 01:00:00',
  detail: [  //arrow of specific notifications grouped to this item
      { id: 1, name: 'TIME OUT 1: SOURCE', state: 'warning' },
      { id: 2, name: 'TIME OUT 2: SOURCE', state: 'warning' },
      { id: 3, name: 'TIME OUT 3: SOURCE', state: 'warning' },
      { id: 4, name: 'TIME OUT 4: SOURCE', state: 'warning' },
      { id: 5, name: 'TIME OUT 5: SOURCE', state: 'warning' },
      { id: 6, name: 'TIME OUT 6: SOURCE', state: 'warning' }
  ]
}
 
```