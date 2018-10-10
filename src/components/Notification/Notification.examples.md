#### Notification Menu

```js
const Flexbox = require('flexbox-react').default;
const notifications1 = [];

let notifications = [
    {id:1, type:'error',
    title:'First Notification',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla arcu, elementum in nibh eu, volutpat interdum lorem. Suspendisse congue consequat congue. Vestibulum iaculis, ipsum sed semper semper, leo velit varius quam, eget tincidunt augue nunc at turpis.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:2,
    type:'success',
    title:'Second Notification',
    description:'Curabitur congue ligula sit amet lacus gravida lacinia. Curabitur id orci vel ligula ultricies sollicitudin. Nullam vel neque commodo, rutrum diam sed, cursus ex.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:3,
    type:'info',
    title:'Third Notification',
    description:'Nulla accumsan, augue sit amet maximus hendrerit, nisl erat pharetra erat, vitae lacinia quam velit tincidunt turpis. Phasellus sagittis, libero vel ullamcorper laoreet, lorem libero scelerisque nisl, nec suscipit metus lacus sit amet justo.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:4,
    type:'warning',
    title:'Fourth Notification',
    description:'Pellentesque eget posuere turpis.',
    timeStamp:'Just now',
    isMsgRead:true},
    {id:5,
    type:'error',
    title:'Fifth Notification',
    description:'Integer enim tellus, molestie quis magna scelerisque, commodo malesuada erat. Cras sodales dolor enim.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:6,
    type:'error',
    title:'Six Notification',
    description:'Fusce ac ornare nulla, ut faucibus nunc.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:7,
    type:'info',
    title:'Seven Notification',
    description:'Curabitur semper tincidunt augue non faucibus. Nullam in dui pellentesque, tempor urna non, tincidunt arcu.',
    timeStamp:'Just now',
    isMsgRead:false},
    {id:8,
    type:'warning',
    title:'Eighth Notification',
    description:'Quisque sagittis metus ac mattis maximus. Curabitur quis lorem et diam sodales cursus.',
    timeStamp:'Just now',
    isMsgRead:true}
];

initialState = {
  detail: undefined,
  notifications: notifications
};

<div>
  <Notification
    notifications={state.notifications}
    detail={state.detail}
    onNotificationClicked={notification => {
        if (notification) {
            console.log('clicked: '+notification)
            console.log('READ: ' + notification.isMsgRead)
            let notificationIdx = undefined
            for (let i = 0; i < notifications.length; i++) {
                console.log(notifications[i].id + ' =? ' + notification.id)
                if (notifications[i].id === notification.id) {
                    notificationIdx = i;
                    break;
                }
            }
            notifications[notificationIdx].isMsgRead = true
        }
        setState({ detail: notification, notifications: notifications})
      }
    }
    onClearAll={() => {
        console.log('Clear All')
        setState({ detail: undefined, notifications: []})
      }
    }
    onClearNotification={notification => {
        console.log('clear: ' + notification.id)
        let notificationIdx = undefined
        for (let i = 0; i < notifications.length; i++) {
            console.log(notifications[i].id + ' =? ' + notification.id)
            if (notifications[i].id === notification.id) {
                notificationIdx = i;
                break;
            }
        }
        delete notifications[notificationIdx]
        setState({ detail: undefined, notifications: notifications})
      }
    }
  />
</div>
```