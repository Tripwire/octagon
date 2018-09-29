#### Notification Menu

```js
const Flexbox = require('flexbox-react').default;

const notificationCount = 8;

const notifications1 = [];

const notifications = [
    {id:1, type:'error', title:'First Notification', description:'Tets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ', timeStamp:'Just now', isMsgRead:false},
    {id:2, type:'success', title:'Second Notification', description:'Tetsetetsd hgfasdgfasjfgsdfjgfh', timeStamp:'Just now', isMsgRead:false},
    {id:3, type:'info', title:'Third Notification', description:'Tetsetetsdhgfasdgfasjfgs dfjgfh', timeStamp:'Just now', isMsgRead:false},
    {id:4, type:'warning', title:'Fourth Notification', description:'Tetsetetsdhgfa sdgfasjfgsdfjgfh', timeStamp:'Just now', isMsgRead:true},
    {id:5, type:'error', title:'Fifth Notification', description:'Tets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ets etetsd hgfasdgf asjfgs dfjgfh ', timeStamp:'Just now', isMsgRead:false},
    {id:6, type:'error', title:'Six Notification', description:'Tetsetetsd hgfasdgfasjfgsdfjgfh', timeStamp:'Just now', isMsgRead:false},
    {id:7, type:'info', title:'Seven Notification', description:'Tetsetetsdhgfasdgfasjfgs dfjgfh', timeStamp:'Just now', isMsgRead:false},
    {id:8, type:'warning', title:'First Notification', description:'Tetsetetsdhgfa sdgfasjfgsdfjgfh', timeStamp:'Just now', isMsgRead:true}
];
  
<div >
    <Notification>
        <Notification.Badge key={'badge'}  size='large' notificationCount={notificationCount} />
        <Notification.Tray key={'tray'}>        
            <Notification.Header title={'Notification'} notificationCount={notificationCount} />
            <Notification.Body notifications={notifications} removeItem={null}>
            </Notification.Body>           
            <Notification.Footer>
              <div>Clear All</div>          
            </Notification.Footer>
        </Notification.Tray>    
    </Notification>
</div>
```
