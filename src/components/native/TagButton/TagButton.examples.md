#### All

```js
<TagButton
  key={1}
  tag={{ id: 1, name: 'ALL', state: 'info', filterOption: '', count: 165 }} closeNotificationDetailView={null}
  getNotificationByTag={null}
  selectedTagId={0}
  setActiveTag={null}
/>
```

#### Grouped

```js
<TagButton
  key={1}
  tag={{ id: 2, name: 'Report', state: 'warning', filterOption: 'report', count: 5 }}
  closeNotificationDetailView={null}
  getNotificationByTag={null}
  selectedTagId={0}
  setActiveTag={null}
/>
```

To set the tag to active state have the `selectedTagId == <the-tag.id>`.

The tag object syntax is as follows:

```js static
{
  id: <integer>,
  name: <string>,
  state: <string>, //one of [warning, critical, normal]
  filterOption: <string>,
  count: <integer>
}
```
