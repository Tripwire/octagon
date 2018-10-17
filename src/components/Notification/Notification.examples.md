#### Notification Menu

```js
const notifications1 = [];

let notifications = [
    {id:1, type:'error',
    title:'First Notification',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla arcu, elementum in nibh eu, volutpat interdum lorem. Suspendisse congue consequat congue. Vestibulum iaculis, ipsum sed semper semper, leo velit varius quam, eget tincidunt augue nunc at turpis.',
    timeStamp:'2018-10-17T14:12:03+05:30',
    isMsgRead:false},
    {id:2,
    type:'success',
    title:'Second Notification',
    description:'Curabitur congue ligula sit amet lacus gravida lacinia. Curabitur id orci vel ligula ultricies sollicitudin. Nullam vel neque commodo, rutrum diam sed, cursus ex.',
    timeStamp:'2018-10-17T14:13:30+05:30',
    isMsgRead:false},
    {id:3,
    type:'info',
    title:'Third Notification',
    description:'Nulla accumsan, augue sit amet maximus hendrerit, nisl erat pharetra erat, vitae lacinia quam velit tincidunt turpis. Phasellus sagittis, libero vel ullamcorper laoreet, lorem libero scelerisque nisl, nec suscipit metus lacus sit amet justo.',
    timeStamp:'2018-10-17T13:13:30+05:30',
    isMsgRead:false},
    {id:4,
    type:'warning',
    title:'Fourth Notification',
    description:'Pellentesque eget posuere turpis.',
    timeStamp:'2018-10-12T13:13:30+05:30',
    isMsgRead:true},
    {id:5,
    type:'error',
    title:'Fifth Notification',
    description:'Integer enim tellus, molestie quis magna scelerisque, commodo malesuada erat. Cras sodales dolor enim.',
    timeStamp:'2018-10-17T14:15:41+05:30',
    isMsgRead:false},
    {id:6,
    type:'error',
    title:'Six Notification',
    description:'Fusce ac ornare nulla, ut faucibus nunc.',
    timeStamp:'2018-10-17T14:15:41+05:30',
    isMsgRead:false},
    {id:7,
    type:'info',
    title:'Seven Notification',
    description:'Curabitur semper tincidunt augue non faucibus. Nullam in dui pellentesque, tempor urna non, tincidunt arcu.',
    timeStamp:'2018-10-17T14:15:41+05:30',
    isMsgRead:false},
    {id:8,
    type:'warning',
    title:'Eighth Notification',
    description:'Quisque sagittis metus ac mattis maximus. Curabitur quis lorem et diam sodales cursus.',
    timeStamp:'2018-10-17T14:15:41+05:30',
    isMsgRead:true}
];

initialState = {
  selectedNotification: undefined,
  notifications: notifications
};

<div className='notifcationexample' style={{textAlign: 'right'}}>
  <Notification
    notifications={state.notifications}
    selectedNotification={state.selectedNotification}
    onNotificationClicked={notification => {
        const clickedBack = (typeof notification == 'undefined')
        if (!clickedBack) {
            const notificationIdx = notifications.findIndex( (item) => {
                return item.id === notification.id 
            })
            notifications[notificationIdx].isMsgRead = true
        }
        setState({ selectedNotification: notification, notifications: notifications})
      }
    }
    onClearAll={() => {
        setState({ selectedNotification: undefined, notifications: []})
      }
    }
    onClearNotification={notification => {
        const notificationIdx = notifications.findIndex( (item) => {
            return item.id === notification.id 
        })
        delete notifications[notificationIdx]
        setState({ selectedNotification: undefined, notifications: notifications})
      }
    }
  />
</div>
```